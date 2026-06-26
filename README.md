# Flavour with Fusion 🍳✨

An advanced, AI-powered recipe generator and meal planning assistant built with **Next.js 15**, **Groq AI**, **Firebase**, and **Supabase**.

## 🌟 Features
* **AI Recipe Generator:** Uses Groq's high-speed AI to generate complete, personalized recipes based on ingredients you have in your fridge. Generates unique AI food imagery via DALL-E integration.
* **Smart 7-Day Meal Planner:** Taking your age, height, weight, health goals, and strict cuisine preferences (including Gujarati, Jain, Punjabi, etc.) into account, Groq calculates and crafts a complete week of meals instantly.
* **Custom Recipes (Supabase):** Users can manually upload their own family recipes. These are permanently stored in a fully managed Supabase PostgreSQL database.
* **Authentication:** Secure user login and signup managed through Firebase Auth.
* **Modern UI:** Built with Tailwind CSS, shadcn/ui, and Framer Motion for buttery-smooth animations and glassmorphic designs.

## 🚀 Tech Stack
- **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion
- **AI Integration:** Groq SDK (`llama-3.1-8b-instant`), OpenAI (DALL-E)
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Firebase Auth
- **Icons & Components:** Lucide React, Radix UI (shadcn)

## 🛠️ Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add the following keys:
   ```env
   # Groq & OpenAI
   GROQ_API_KEY=your_groq_key
   OPENAI_API_KEY=your_openai_key

   # Firebase Auth
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_id

   # Supabase Database
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_anon_key
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment
This application is fully optimized to be deployed on Vercel. 
Simply push to GitHub, link your repository in the Vercel dashboard, and ensure all the environment variables above are added to the Vercel project settings.
