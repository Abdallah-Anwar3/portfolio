# Abdallah Anwar | Portfolio

My personal portfolio: who I am, my skills, my projects, and how to reach me. It is bilingual (English and Arabic, with right-to-left layout), has a dark and a light theme, and every section loads in as you scroll.

Built with **Next.js** (App Router), **React**, **TypeScript** and **Tailwind CSS**.

## Features

- English and Arabic in one click. Both languages are in the HTML, so there is no flash when the page loads, and the choice is remembered.
- Dark theme by default, with a light theme switch. The choice is remembered.
- Sticky header with a highlight on the section you are in.
- Scroll reveal on every section (it respects "reduce motion").
- Project filter, and a detail page for each project with screenshots.
- Contact form that sends the message to my inbox, with a fallback to email.
- Static pages, so it is fast and cheap to host.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the build
npm run lint
```

## Project structure

```
src/
  app/
    layout.tsx             page shell, metadata, theme and language init
    page.tsx               the home page (all sections)
    projects/[slug]/       project detail pages
    globals.css            theme colors, animations, hover effects
  components/              Header, Footer, ProjectsGrid, ContactForm, Reveal, ...
  data/
    content.ts             profile, skills, experience, projects, UI text
    extra.ts               skill card text, contact form text and endpoint
public/
  me.webp                  profile photo
  projects/<slug>/         project images
```

## Add a new project

1. Put the images in `public/projects/<slug>/` (use `.webp`, about 1600px wide).
2. Open `src/data/content.ts` and add an object to the `projects` array, following the existing ones. Every text has an `en` and an `ar` version.
3. Save. It appears in the grid and gets its own page automatically.

## Change the content

Everything you read on the site is in `src/data/content.ts` and `src/data/extra.ts`: name, title, about, services, skills, experience, links, WhatsApp number, and the Arabic and English text.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which forwards the message to the inbox in `FORM_ENDPOINT` (`src/data/extra.ts`). The first message you send after changing the email asks you to confirm it once by email. If a message cannot be sent, the form shows a link to email me instead.

## Deploy

Import the repository in [Vercel](https://vercel.com/new). The defaults work for Next.js, so there are no environment variables to set.

## Contact

- Email: anwer3652@gmail.com
- WhatsApp: +20 111 126 1218
- LinkedIn: https://www.linkedin.com/in/abdallah-anwar0/
- GitHub: https://github.com/Abdallah-Anwar3
