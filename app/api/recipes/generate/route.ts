import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { ingredients, dietType } = await request.json();

    if (!ingredients) {
      return NextResponse.json({ error: 'Ingredients are required' }, { status: 400 });
    }

    const systemPrompt = `You are a professional chef. Create 5 to 7 distinct, creative, and delicious recipes using these ingredients (and basic pantry staples like salt, pepper, oil if needed): ${ingredients}. 
Dietary preference: ${dietType === 'vegetarian' ? 'Vegetarian' : dietType === 'non-vegetarian' ? 'Non-Vegetarian (must include meat/poultry/seafood)' : 'Any'}.

You must respond ONLY with a valid JSON object matching this exact structure containing an array of recipes:
{
  "recipes": [
    {
      "id": 12345,
      "title": "Creative Recipe Name",
      "readyInMinutes": 30,
      "servings": 2,
      "vegetarian": true,
      "cuisines": ["Italian", "Fusion"],
      "healthScore": 75,
      "analyzedInstructions": [
        {
          "steps": [
            { "number": 1, "step": "Detailed step 1." },
            { "number": 2, "step": "Detailed step 2." }
          ]
        }
      ],
      "nutrition": {
        "nutrients": [
          { "name": "Calories", "amount": 450, "unit": "kcal" },
          { "name": "Protein", "amount": 20, "unit": "g" },
          { "name": "Carbohydrates", "amount": 40, "unit": "g" },
          { "name": "Fat", "amount": 15, "unit": "g" }
        ]
      }
    }
  ]
}
Do not include any markdown formatting, backticks, or extra text. Just the raw JSON object.`;

    const chatCompletion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [{ role: "system", content: systemPrompt }],
      temperature: 1,
      max_tokens: 6000,
      top_p: 1,
      response_format: { type: "json_object" }
    } as any);

    const responseText = chatCompletion.choices[0]?.message?.content;
    if (!responseText) throw new Error("No response from Groq");

    const parsedData = JSON.parse(responseText);
    const generatedRecipes = parsedData.recipes || [];

    // Assign a beautiful placeholder image to all recipes since Groq cannot generate images
    generatedRecipes.forEach((recipe: any) => {
      recipe.image = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800&auto=format&fit=crop";
    });

    return NextResponse.json(generatedRecipes);

  } catch (error: any) {
    console.error("Error generating recipes:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate recipes' },
      { status: 500 }
    );
  }
}
