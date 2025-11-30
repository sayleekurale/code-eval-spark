Smart Task Evaluator – AI-Powered Mini SaaS

A modern mini-SaaS application that evaluates coding tasks using AI.
Built using Vite + React + TypeScript + Tailwind + ShadCN UI and Supabase for authentication, storage, and APIs.

🌐 Live Demo

🔗 URL: Add your live URL here

🛠️ Tech Stack

Frontend: Vite, React, TypeScript

UI: Tailwind CSS, ShadCN UI

Backend: Supabase (Auth, Database, RLS, Functions)

AI: OpenAI / Gemini / Groq (as implemented)

Tools: Lovable, GitHub, Cursor, ChatGPT

✨ Features
🔐 Authentication

Login / Signup (Supabase Auth)

Secure user sessions

📤 Task Submission

Paste coding task

Upload file

Save tasks in Supabase

🤖 AI Evaluation

Send task to LLM

Generate: Score • Strengths • Weaknesses • Improvements

💳 Payment

Unlock full report

Payment page UI included

📊 Past Reports

View previous evaluations

Clean card/table layout

📥 Local Development
# Clone repository
git clone <YOUR_REPO_URL>

# Enter project
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start dev server
npm run dev

🔧 Environment Variables

Create a .env file:

VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
OPENAI_API_KEY=

🗄️ Supabase Setup

Tables used:

users

tasks

payments

RLS enabled ✔
Policies added ✔

Include your schema screenshot in the repo if required.

📹 Screen Recording

Google Drive Link: Add your link here

🤖 AI Tools Used

ChatGPT

Cursor

GitHub Copilot
(Add others if used)

🧩 Manual Work Done

Fixed UI bugs

Refactored API functions

Improved evaluation logic

Adjusted Supabase RLS

UI/UX polishing

📦 Deployment

Deployed using Lovable
Visit → Project → Share → Publish
