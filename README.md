# Anash Khan — Premium Portfolio

A world-class personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. Features a premium black + gold design system inspired by Apple, Stripe, Linear, and Vercel.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, GSAP-ready, Lenis smooth scroll
- **Forms:** React Hook Form + Zod validation
- **Database:** Prisma + SQLite (contact form submissions)
- **Admin:** Protected admin panel at `/admin`

## Getting Started

```bash
npm install
cp .env.example .env   # then edit credentials
npm run db:migrate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form & Admin Panel

Contact form submissions are saved to a SQLite database via `POST /api/contact`.

**Admin panel:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

Configure in `.env`:

```env
DATABASE_URL="postgresql://anashkhan@localhost:5432/portfolio?schema=public"
ADMIN_EMAIL="your-email@gmail.com"
ADMIN_PASSWORD="your-strong-password"
SESSION_SECRET="long-random-secret-string"
```

Admin features:
- View all contact form submissions
- Filter by read/unread
- Mark messages as read
- Delete submissions
- Stats: total, unread, today

Browse data directly: `npm run db:studio`

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/           # Reusable UI components
│   ├── animations/   # Animation wrappers
│   ├── sections/     # Page sections
│   ├── layout/       # Navbar, Footer
│   ├── hero/         # Hero visual components
│   ├── effects/      # Cursor glow, scroll progress
│   └── loading/      # Loading screen
├── hooks/            # Custom React hooks
├── lib/              # Utilities & validations
├── types/            # TypeScript types
├── constants/        # Site config & navigation
├── data/             # Projects, experience, skills
├── services/         # API service layer
├── providers/        # Context providers
└── styles/           # Global styles
```

## Customization

Update your personal info in `src/constants/site.ts` and content in `src/data/`.

## Build

```bash
npm run build
npm start
```

## License

MIT
