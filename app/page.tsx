'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useAuth } from './contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from './components/Navbar'

export default function HomePage() {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  }, [user, router])

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-cooking bg-cover bg-center bg-no-repeat -z-10">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Navbar />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 pt-24"> {/* Added pt-24 for navbar space */}
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Flavour with Fusion
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover delicious recipes and create personalized meal plans with our AI-powered platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recipe-generator"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-black bg-green-400 rounded-lg hover:bg-green-500 transition-colors"
            >
              Generate Recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/meal-planner"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Plan Your Meals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

