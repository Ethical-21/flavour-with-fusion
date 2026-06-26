'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Textarea } from './ui/textarea'

interface AddCustomRecipeProps {
  onRecipeAdded: () => void
}

export function AddCustomRecipe({ onRecipeAdded }: AddCustomRecipeProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    dietType: 'all',
    image: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/recipes/custom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          ingredients: formData.ingredients.split(',').map(i => i.trim()),
          instructions: formData.instructions,
          dietType: formData.dietType,
          image: formData.image
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to add recipe')
      }


      setOpen(false)
      onRecipeAdded()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add recipe. Please try again.')

    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex-1 bg-green-600 hover:bg-green-700">
          Add Custom Recipe
        </Button>

      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Custom Recipe</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Input
              id="ingredients"
              value={formData.ingredients}
              onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
              placeholder="Comma separated list"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instructions">Instructions</Label>
            <Textarea
              id="instructions"
              value={formData.instructions}
              onChange={(e) => setFormData({...formData, instructions: e.target.value})}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietType">Diet Type</Label>
            <select
              id="dietType"
              value={formData.dietType}
              onChange={(e) => setFormData({...formData, dietType: e.target.value})}
              className="w-full p-2 border rounded"
            >
              <option value="all">All</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
            </select>
          </div>



          {error && <p className="text-red-500">{error}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? 'Adding Recipe...' : 'Add Recipe'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
