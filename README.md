# Itegure — Rwanda Provisoire Exam Prep

Comprehensive preparation platform for the Rwandan Provisional Driving License (Permis Provisoire) exam, built by Kagabo Lucky.

## Features

- **400 authentic questions** in Kinyarwanda, English and Français, based on Presidential Decree N° 85/01
- **20-question randomized mock exams** with a 12/20 (60%) pass threshold
- **Difficulty-based timing**: Easy (1m30s/question), Medium (1min/question), Hard (30s/question)
- **Restart / New Test flow**: retry the same 20 questions reshuffled, or draw a fresh random set
- **Instant feedback** with legal explanations and article references
- **Road signs catalog** and **traffic law cheat sheet**
- **Question bank** with search, category filters and bookmarks
- Progress tracking saved in the browser (localStorage)

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```
   npm install
   ```
   or with pnpm:
   ```
   pnpm install
   ```

2. Start the dev server:
   ```
   npm run dev
   ```

3. Open http://localhost:3000

## Production Build

```
npm run build
npm run preview
```

## Deploy

Static Vite app — deploy anywhere (Vercel, Netlify, Cloudflare Pages, etc.).

Vercel:

```
vercel
```
