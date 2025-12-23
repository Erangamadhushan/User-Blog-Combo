![Blogify](./public/main.png)
# 📝 User Blog Platform

A full-stack **user + Blog Platform** built with **Next.js App Router**, **Prisma**, and **PostgreSQL**, where users can authenticate and publish **Markdown-based blog posts** similar to writing a `README.md`.

---

## 📌 Table of Contents

- Overview
- Features
- Tech Stack
- Project Structure
- Screenshots
- Getting Started
- Environment Variables
- Database Setup
- Authentication
- API Routes
- Markdown Blogging
- Middleware & Security
- Future Improvement
- Licence

---

## 📖 Overview

This project is a modern blogging platform that allows users to:

- Register and log in using credentials or OAuth(Google, GitHub)
- Create and publish blogs using **Markdown**
- Preview blog content live before publishing
- View blogs rendered with systax highlighting and table of contents
- Access protected routes securely

---

## ✨ Features

- User authentication with **NextAuth**
- Email/password and OAuth login (GitHub & Google)
- JWT-based session handling
- Protected routes using middleware
- Markdown-based blog editor (README-style)
- Live Markdown preview with TOC
- Systax-highlighted code blocks
- Human-readable timestamps (e.g. "2 hours ago")
- Responsive UI using Tailwind CSS & shadcn/ui
- Light/Dark Themes

---

## 🧱 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- shadch/ui

### Backend
- Next.js APP Routes
- NextAuth
- Prisma ORM


### Database
- PostgreSQL
- Supabase (on going...)

### Other Tools
- react-markdown
- remark-gfm
- date-fns

---

## 🗂️ Project Structure

- Finalize soon...

## 🖼️ Screenshots

### Home Page
![Home Page](./public/home-page.png)

### About Page
![About Page](./public/about-page.png)

### Contact Page
![Blog Page](./public/contact-page.png)

### Login Page
![Login Page](./public/login-page.png)

### Register Page
![Register Page](./public/register-page.png)

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Erangamadhushan/User-Blog-Combo.git

```

### 2️⃣ Install dependencies
```bash
npm install
```

## 🔐 Environment Variables

Create a `.env.local file`

```env
DATABASE_URL=postgresql://user:password@localhost:5432/blogdb
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## 🗄️ Database Setup
1. Ensure PostgreSQL is running locally
2. Run Prisma migrations:

```bash
npx prisma migrate dev
```

3. (Optional) Open Prisma Studio:
```bash
npx prisma studio
```

## Run Prisma migrations:
Authentication is handled using NextAuth with:

- Credentials (email & password)
- OAuth providers (GitHub, Google)

JWT-based sessions are used to support middleware and route protection.

## ✍️ Markdown Blogging
- Blog content is written in Markdown
- Rendered using `react-markdown`
- Code blocks are syntax highlighted

## 🛡️ Middleware & Security

- Protected routes using NextAuth middleware
- API routes validate authentication server-side

## 🔮 Future Improvements
- Blog editing and drafts
- Comment System
- Like System(on going...)
- Slug-based URLs
- Image uploads in Markdown

## 📄 License
This project is licensed under the MIT License.

## 🙌 Acknowledgements
- Next.js (V16)
- Prisma (V6.19.0)
- NextAuth
- Tailwind CSS(^4.1.x)
-shadcn/ui

