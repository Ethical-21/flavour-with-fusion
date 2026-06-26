<div align="center">
  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" alt="Flavour with Fusion Banner" style="border-radius: 15px; margin-bottom: 20px;" />

  <h1>🍳 Flavour with Fusion</h1>
  
  <p>
    <em>Transform your ingredients into gourmet meals with the power of Artificial Intelligence.</em>
  </p>

  <p>
    <a href="#-overview">Overview</a> •
    <a href="#-key-features">Features</a> •
    <a href="#-architecture">Tech Stack</a> •
    <a href="#%EF%B8%8F-local-development">Setup</a> •
    <a href="#-deployment">Deployment</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
  </p>
</div>

---

## 📖 Overview

**Flavour with Fusion** revolutionizes how you decide what to eat. Whether you are staring at a fridge full of random ingredients or trying to stick to a strict 7-day health goal, this application leverages cutting-edge AI and extensive food databases to craft the perfect meal for you. 

Built with a beautiful, glassmorphic UI entirely on the modern Next.js App Router, it provides a seamless, butter-smooth experience across all devices.

---

## ✨ Key Features

### 🧠 AI-Powered Recipe Generation
Powered by Groq's lightning-fast `llama-3.1-8b-instant`, the app instantly transforms a list of leftover ingredients into step-by-step gourmet recipes when traditional databases fall short.

### 🥗 Smart 7-Day Meal Planner
A highly personalized meal planner that calculates optimal nutritional intake based on your exact physical metrics (age, height, weight), health goals, and strict dietary preferences (including Jain, Gujarati, and Keto).

### 🗄️ Custom Recipe Vault
Users can manually upload, store, and share their own family recipes. These are permanently stored and queried instantly via a fully managed **Supabase PostgreSQL** database.

### 🔒 Secure Authentication
Complete, secure user authentication (Login, Signup, and Google OAuth) powered by **Firebase Auth**.

### 🎨 Modern & Responsive UI
Designed with Tailwind CSS, Shadcn UI, and Framer Motion for beautiful micro-animations, engaging layouts, and a premium look-and-feel.

---

## 🏗️ Architecture

| Component | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router), React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, Framer Motion, Radix UI (shadcn) |
| **Artificial Intelligence** | Groq API (`llama-3.1-8b-instant`), OpenAI |
| **Database** | Supabase (PostgreSQL) |
| **Authentication** | Firebase Auth |
| **Deployment** | Vercel |

---

## 🛠️ Local Development

Want to run this locally? Follow these steps to get started in minutes.

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

## 🚀 Deployment

This application is fully optimized for edge deployment on **Vercel**. 

1. Push your code to your GitHub repository.
2. Import the repository into your Vercel Dashboard.
3. Copy all variables from your `.env.local` file into the Vercel **Environment Variables** settings.
4. Click **Deploy**. Vercel will automatically build the Next.js static pages and serverless API routes.

> **💡 Note:** Ensure your live Vercel domain is added to your Firebase **Authorized Domains** list to allow Google Sign-In to function properly in production.

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Ethical-21/flavour-with-fusion/issues).

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
<br/>
<div align="center">
  <sub>Built with ❤️ by the Flavour with Fusion Team</sub>
</div>
