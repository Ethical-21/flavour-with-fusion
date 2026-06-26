import { NextResponse } from 'next/server'
import { supabase } from '@/app/lib/supabase'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q') || ''
    const dietType = searchParams.get('dietType') || 'all'

    // Fetch from Supabase
    const { data: records, error } = await supabase
      .from('custom_recipes')
      .select('recipe_data')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase fetch error:', error);
      throw error;
    }

    let recipes = records?.map(record => record.recipe_data) || [];

    // Add vegetarian boolean field based on dietType
    recipes = recipes.map((recipe: any) => ({
      ...recipe,
      vegetarian: recipe.dietType === 'vegetarian'
    }))

    // Filter recipes based on query and diet type
    if (query) {
      const searchTerms = query.toLowerCase().split(',')
      recipes = recipes.filter((recipe: any) => 
        searchTerms.some(term => 
          recipe.title?.toLowerCase().includes(term) ||
          recipe.ingredients?.some((ing: string) => ing.toLowerCase().includes(term))
        )
      )
    }

    if (dietType !== 'all') {
      recipes = recipes.filter((recipe: any) => 
        dietType === 'vegetarian' ? recipe.dietType === 'vegetarian' : recipe.dietType === 'non-vegetarian'
      )
    }

    return NextResponse.json(recipes)
  } catch (error) {
    console.error('Failed to fetch custom recipes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch custom recipes' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received request to add custom recipe to Supabase')
    const recipeData = await request.json()
    console.log('Recipe data:', recipeData)

    const newRecipe = {
      id: Date.now(),
      ...recipeData,
      analyzedInstructions: [{
        steps: recipeData.instructions.split('\n').map((step: string, index: number) => ({
          number: index + 1,
          step: step.trim()
        }))
      }],
      nutrition: {
        nutrients: []
      }
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('custom_recipes')
      .insert([
        { recipe_data: newRecipe }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      throw error;
    }

    console.log('Recipe saved successfully to Supabase')
    return NextResponse.json(newRecipe, { status: 201 })

  } catch (error: unknown) {
    console.error('Error adding recipe:', error)
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `Failed to save custom recipe: ${error.message}` },
        { status: 500 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to save custom recipe' },
      { status: 500 }
    )
  }
}
