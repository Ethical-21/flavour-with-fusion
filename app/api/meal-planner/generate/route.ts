import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const systemPrompt = `You are a certified, expert nutritionist. Create a highly customized, 7-day meal plan based on the following user profile:
Age: ${data.age}
Gender: ${data.gender}
Height: ${data.height} cm
Weight: ${data.weight} kg
Activity Level: ${data.activityLevel}
Health Goals: ${data.healthGoals?.join(', ') || 'General health'}
Food Preference (Veg/Non-Veg): ${data.foodPreference || 'Any'}
Diet Type: ${data.dietType || 'Any'}
Cuisine Preference: ${data.cuisinePreference || 'Any'}
Allergies: ${data.allergies?.join(', ') || 'None'}

Please calculate an appropriate daily calorie and macronutrient target, and provide 7 days of meals (Breakfast, Lunch, Dinner).
You must respond ONLY with a valid JSON object matching this exact structure:
{
  "Monday": {
    "breakfast": [{ "name": "...", "calories": 300, "protein": 15, "tags": ["..."], "prepTime": 10, "cookTime": 15 }],
    "lunch": [{ "name": "...", "calories": 500, "protein": 30, "tags": ["..."], "prepTime": 15, "cookTime": 20 }],
    "dinner": [{ "name": "...", "calories": 400, "protein": 25, "tags": ["..."], "prepTime": 20, "cookTime": 30 }]
  },
  "Tuesday": { ... },
  "Wednesday": { ... },
  "Thursday": { ... },
  "Friday": { ... },
  "Saturday": { ... },
  "Sunday": { ... }
}
Do not include any markdown formatting, backticks, or extra text. Just the raw JSON object.`;

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "system", content: systemPrompt }],
      temperature: 0.7,
      max_tokens: 3000,
      response_format: { type: "json_object" }
    } as any);

    const responseText = chatCompletion.choices[0]?.message?.content;
    if (!responseText) throw new Error("No response from Groq");

    const parsedData = JSON.parse(responseText);
    
    let finalData = parsedData;
    if (parsedData.mealPlan) finalData = parsedData.mealPlan;
    else if (parsedData.meal_plan) finalData = parsedData.meal_plan;
    else if (parsedData.week) finalData = parsedData.week;
    else if (parsedData.days) finalData = parsedData.days;

    return NextResponse.json(finalData);

  } catch (error: any) {
    console.error("Error generating meal plan:", error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate meal plan' },
      { status: 500 }
    );
  }
}
