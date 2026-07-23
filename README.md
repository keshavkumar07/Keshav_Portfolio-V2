# Keshav Kumar — Portfolio (v2)

A fully responsive, single-page portfolio rebuilt from scratch, based on your
resume and the notes in `Info.docx`.

## What's inside
- `index.html` — all content (About, Education, Skills, Projects, Certifications, Achievements, Contact)
- `style.css` — design system (colors, type, layout, responsiveness)
- `script.js` — mobile menu, scroll effects, copy-email button, contact form
- `images/keshav.jpg` — your headshot, optimized for the web

## How the contact form works
There's no paid backend, so the "Send message" button opens the visitor's
email app with a pre-filled message addressed to
**keshavkumar64581@gmail.com** — so every submission lands straight in your
inbox with no server to maintain. There's also a "Copy" button next to your
email address for anyone who prefers to email you directly.

If you'd like true in-page submissions later (no email app popup), you can
connect a free service like **Formspree** or **EmailJS** — that only requires
changing a few lines in `script.js`, happy to help with that when you're ready.

## Editing content
Everything lives in plain HTML in `index.html` — search for the section you
want to change (e.g. `id="projects"`) and edit the text directly. No build
step required.

## Deploying
This is a static site — you can host it for free on **GitHub Pages**,
**Netlify**, or **Vercel** by uploading these files as-is.

## Notes on your info
- Your phone number was intentionally left out, as requested.
- Instagram link was updated to the one in `Info.docx` (`__its.keshav__`).
- The old "5 years of experience" / "Web Developer at a company" claims from
  your first portfolio were removed since they aren't on your resume —
  the new site only shows things you can back up in an interview.
