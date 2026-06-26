<div align="center">
  <img src="public/logo.png" alt="Flavour with Fusion Logo" width="150" height="150" style="border-radius: 20px;" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3143/3143644.png'" />
  
  # 🍳 Flavour with Fusion

  <p align="center">
    <strong>An advanced, AI-powered recipe generator and personalized meal planning assistant.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  </p>
</div>

<br />

## 🌟 Overview

**Flavour with Fusion** revolutionizes how you decide what to eat. Whether you are staring at a fridge full of random ingredients or trying to stick to a strict 7-day health goal, this application leverages cutting-edge AI and extensive food databases to craft the perfect meal for you. 

With a beautiful, glassmorphic UI built entirely on the modern Next.js App Router, it provides a seamless, butter-smooth experience across all devices.

---

## ✨ Key Features

* 🧠 **AI-Powered Recipe Generation:** Powered by Groq's lightning-fast `llama-3.1-8b-instant`, the app instantly transforms a list of leftover ingredients into step-by-step gourmet recipes.
* 🥗 **Smart 7-Day Meal Planner:** A highly personalized meal planner that calculates optimal nutritional intake based on your exact physical metrics (age, height, weight), health goals, and strict dietary preferences (including Jain, Gujarati, and Keto).
* 🗄️ **Custom Recipe Vault:** Users can manually upload and securely save their own family recipes. These are permanently stored and queried instantly via a fully managed **Supabase PostgreSQL** database.
* 🔒 **Secure Authentication:** Complete, secure user authentication (Login/Signup/Google OAuth) powered by **Firebase Auth**.
* 🎨 **Modern & Responsive UI:** Designed with Tailwind CSS, Shadcn UI, and Framer Motion for beautiful micro-animations and a premium look-and-feel.

---

## 🚀 Tech Stack Architecture

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router), React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, Framer Motion, Radix UI (shadcn) |
| **Artificial Intelligence** | Groq API (`llama-3.1-8b-instant`), OpenAI (DALL-E Integration) |
| **Database** | Supabase (PostgreSQL) |
| **Authentication** | Firebase Auth |
| **Deployment** | Vercel |

---

## 🛠️ Local Development Setup

Follow these steps to run the application locally on your machine.

### 1. Clone the repository
```bash
git clone https://github.com/Ethical-21/flavour-with-fusion.git
cd flavour-with-fusion
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env.local` file in the root directory and securely add your API keys:

```env
# AI Services
GROQ_API_KEY=your_groq_api_key
OPENAI_API_KEY=your_openai_api_key

# Recipe APIs
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_spoonacular_key
NEXT_PUBLIC_EDAMAM_APP_ID=your_edamam_id
NEXT_PUBLIC_EDAMAM_APP_KEY=your_edamam_key

# Firebase Auth Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Supabase Database Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
```

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Deployment

This application is fully optimized for edge deployment on **Vercel**. 

1. Push your code to your GitHub repository.
2. Import the repository into your Vercel Dashboard.
3. Copy all variables from your `.env.local` file into the Vercel **Environment Variables** settings.
4. Click **Deploy**. Vercel will automatically build the Next.js static pages and serverless API routes.

> **Note:** Ensure your live Vercel domain is added to your Firebase **Authorized Domains** list to allow Google Sign-In to function properly in production.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ethical-21/flavour-with-fusion/issues).

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
