# Adrian Eremie – Bauunternehmen

Marketing website for Adrian Eremie, a construction, planning, and certified energy consulting business (Bauunternehmen, Planung & Energieberatung) based in Garching an der Alz, Germany. Built with Next.js, React, and Tailwind CSS.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- React 19
- Tailwind CSS 4
- [Zod](https://zod.dev) for contact form validation
- [Nodemailer](https://nodemailer.com) for sending contact form submissions via SMTP

## Getting Started

Install dependencies, then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Environment variables

The contact form (`src/app/actions.ts`) sends email via SMTP and requires a `.env.local` file with:

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_RECIPIENT=
```

## Project structure

- `src/app/` — routes and pages (home, `impressum`, `datenschutz`), root layout, and the `submitContactForm` server action
- `src/components/` — page sections (Hero, Services, Contact, Header, Footer, etc.)
- `public/icons/` — service icons

## Scripts

- `npm run dev` — start the development server
- `npm run build` — build for production
- `npm run start` — start the production server
- `npm run lint` — run ESLint
