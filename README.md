# AgentOS Website

The enterprise agent harness marketing site. Built with Next.js, Tailwind CSS, and TypeScript.

## Quick start

You need Node.js 18+ installed. Get it from https://nodejs.org if you don't have it.

```bash
# 1. Unzip the folder
unzip agent-os-website.zip
cd agent-os-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in your browser
# http://localhost:3000
```

That's it. The site runs locally on your machine.

## Pages

- `/` - Homepage (hero, operating loop, specimen, principles, timeline)
- `/product` - The harness architecture (6-layer diagram)
- `/security` - Trust pillars, deployment paths, threat models
- `/use-cases` - Three enterprise scenarios with before/after
- `/about` - TenX thesis, founders timeline, team
- `/early-access` - Request access intake form

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Inter (sans), Source Serif 4 (serif headings), Geist Mono (code)
