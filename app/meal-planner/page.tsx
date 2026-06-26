'use client'

import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { MealPlanCard } from '../components/MealPlanCard'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { 
  MEALS,
  MEAL_TYPES,
  DIET_TYPES,
  dietaryTypes, 
  cuisineTypes, 
  healthGoals, 
  allergens, 
  activityLevels,
  Meal,
  MealCategory
} from '../data/meal-plans'
import { Loader2, CalendarDays, Activity, Goal, UtensilsCrossed } from 'lucide-react'

interface FormData {
  age: string;
  height: string;
  weight: string;
  gender: string;
  activityLevel: string;
  healthGoals: string[];
  foodPreference: string;
  dietType: string;
  cuisinePreference: string;
  allergies: string[];
  mealCount: number;
  spicePreference: number;
}

const initialFormData: FormData = {
  age: '',
  height: '',
  weight: '',
  gender: '',
  activityLevel: '',
  healthGoals: [],
  foodPreference: '',
  dietType: '',
  cuisinePreference: '',
  allergies: [],
  mealCount: 3,
  spicePreference: 2,
};

const formatLabel = (str: string) => {
  return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export default function MealPlannerPage() {
  const { user } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [loading, setLoading] = useState(false)
  const [generatedPlan, setGeneratedPlan] = useState<Record<string, { breakfast: Meal[], lunch: Meal[], dinner: Meal[] }> | null>(null)

  useEffect(() => {
    if (!user) {
      router.push('/auth/login')
    }
  }, [user, router])

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleMultiSelect = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/meal-planner/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate meal plan');
      }

      const mealPlan = await response.json();
      setGeneratedPlan(mealPlan)
    } catch (error) {
      console.error('Error generating meal plan:', error)
      alert("There was an error generating your meal plan. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  if (!user) return null

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-cooking bg-cover bg-center bg-no-repeat -z-10">
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Navbar />
      <div className="relative z-10 min-h-screen p-8 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-gray-200 mb-4">
              Personalized Meal Planner
            </h1>
            <p className="text-white text-xl">
              Your Journey to Healthier Eating Starts Here 🥗 ✨
            </p>
          </div>

          {!generatedPlan ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <Card className="p-6 bg-white/60 backdrop-blur-sm hover:bg-white/70 transition-all">
                  <div className="flex items-center gap-2 mb-6">
                    <Activity className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Your Body Profile</h2>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          value={formData.age}
                          onChange={(e) => handleInputChange('age', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) => handleInputChange('gender', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="height">Height (cm)</Label>
                        <Input
                          id="height"
                          type="number"
                          value={formData.height}
                          onChange={(e) => handleInputChange('height', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input
                          id="weight"
                          type="number"
                          value={formData.weight}
                          onChange={(e) => handleInputChange('weight', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="activityLevel">Activity Level</Label>
                      <Select
                        value={formData.activityLevel}
                        onValueChange={(value) => handleInputChange('activityLevel', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select activity level" />
                        </SelectTrigger>
                        <SelectContent>
                          {activityLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/60 backdrop-blur-sm hover:bg-white/70 transition-all">
                  <div className="flex items-center gap-2 mb-6">
                    <Goal className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Health Goals</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {healthGoals.map((goal) => (
                        <Badge
                          key={goal}
                          variant={formData.healthGoals.includes(goal) ? "default" : "secondary"}
                          className="cursor-pointer"
                          onClick={() => handleMultiSelect('healthGoals', goal)}
                        >
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="p-6 bg-white/60 backdrop-blur-sm hover:bg-white/70 transition-all">
                  <div className="flex items-center gap-2 mb-6">
                    <UtensilsCrossed className="w-5 h-5 text-primary" />
                    <h2 className="text-2xl font-bold">Dietary Preferences</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label>Food Preference (Veg/Non-Veg)</Label>
                      <Select
                        value={formData.foodPreference}
                        onValueChange={(value) => handleInputChange('foodPreference', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Vegetarian">Vegetarian</SelectItem>
                          <SelectItem value="Non-Vegetarian">Non-Vegetarian</SelectItem>
                          <SelectItem value="Vegan">Vegan</SelectItem>
                          <SelectItem value="Any">Any</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Diet Type</Label>
                      <Select
                        value={formData.dietType}
                        onValueChange={(value) => handleInputChange('dietType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select diet type" />
                        </SelectTrigger>
                        <SelectContent>
                          {DIET_TYPES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {formatLabel(type)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Cuisine Preference</Label>
                      <Select
                        value={formData.cuisinePreference}
                        onValueChange={(value) => handleInputChange('cuisinePreference', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select cuisine preference" />
                        </SelectTrigger>
                        <SelectContent>
                          {cuisineTypes.map((cuisine) => (
                            <SelectItem key={cuisine} value={cuisine}>
                              {formatLabel(cuisine)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Allergies</Label>
                      <div className="flex flex-wrap gap-2">
                        {allergens.map((allergen) => (
                          <Badge
                            key={allergen}
                            variant={formData.allergies.includes(allergen) ? "destructive" : "secondary"}
                            className="cursor-pointer"
                            onClick={() => handleMultiSelect('allergies', allergen)}
                          >
                            {allergen}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Spice Preference</Label>
                      <div className="pt-2">
                        <Slider
                          min={1}
                          max={4}
                          step={1}
                          value={[formData.spicePreference]}
                          onValueChange={([value]) => handleInputChange('spicePreference', value)}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm mt-2">
                          <span>Mild</span>
                          <span>Medium</span>
                          <span>Hot</span>
                          <span>Very Spicy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(generatedPlan).map(([day, meals]) => (
                  <MealPlanCard
                    key={day}
                    day={day}
                    meals={meals}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="px-8 py-6 text-lg bg-gradient-to-r from-black-500 to-white-400 hover:from-white-500 hover:to-white-500 text-white rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Generating Your Meal Plan...
                </>
              ) : generatedPlan ? (
                'Regenerate Meal Plan'
              ) : (
                'Generate Your Personalized Meal Plan'
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

