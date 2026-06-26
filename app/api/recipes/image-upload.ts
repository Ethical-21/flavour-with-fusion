import { NextResponse } from 'next/server'
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary'

type CloudinaryUploadResponse = UploadApiResponse & {
  tags: string[]
  info: {
    categorization: {
      google_tagging: {
        tags: Array<{
          tag: string
          confidence: number
        }>
      }
    }
  }
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

export async function POST(req: Request) {
  try {
    console.log('Starting image upload process')
    
    // Handle file upload
    const formData = await req.formData()
    const file = formData.get('image') as File
    
    if (!file) {
      console.error('No file provided in form data')
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      console.error('Invalid file type:', file.type)
      return NextResponse.json(
        { error: 'Invalid file type. Please upload an image.' },
        { status: 400 }
      )
    }
    
    console.log('Valid image file received:', file.name, file.type)

    // Convert file to buffer
    console.log('Converting file to buffer')
    const buffer = Buffer.from(await file.arrayBuffer())
    console.log('File buffer created, size:', buffer.length)

    // Upload to Cloudinary with AI analysis
    console.log('Uploading to Cloudinary')
    const result = await new Promise<CloudinaryUploadResponse>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          detection: 'adv_food',
          categorization: 'google_tagging',
          auto_tagging: 0.7
        },
        (error: any, result?: UploadApiResponse) => {
          if (error) {
            reject(new Error(error.message || 'Cloudinary upload failed'))
          } else if (!result) {
            reject(new Error('Cloudinary upload returned no result'))
          } else {
            resolve(result as CloudinaryUploadResponse)
          }
        }
      )
      
      uploadStream.end(buffer)
    })

    const { secure_url, tags, info } = result

    // Extract detected food items from tags
    const detectedIngredients = tags || []
    const dishName = detectedIngredients.length > 0 ? detectedIngredients[0] : 'Unknown Dish'

    return NextResponse.json({
      success: true,
      dishName,
      ingredients: detectedIngredients,
      imageUrl: secure_url
    })

  } catch (error) {
    console.error('Image processing error:', error)
    return NextResponse.json(
      { 
        error: 'Failed to process image',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
