# Keshav Kumar — Portfolio (v2)

A fully responsive, single-page portfolio rebuilt from scratch, based on your
resume and the notes in `Info.docx`.

## What's inside
- `index.html` — all content (About, Education, Skills, Projects, Certifications, Achievements, Contact)
- `style.css` — design system (colors, type, layout, responsiveness)
- `script.js` — mobile menu, scroll effects, copy-email button, contact form
- `images/keshav.jpg` — your headshot, optimized for the web

## How the contact form works
The form submits in-page via **FormSubmit** (free, no account or dashboard
needed) — visitors never leave your site or see an email app popup.
Submissions land straight in your inbox at `keshavkumar64581@gmail.com`.
There's also a "Copy" button next to your email address for anyone who
prefers to email you directly.

**One-time activation (30 seconds, and it's automatic):**
Nothing to sign up for or configure — the code already points at your email.
The very first time anyone submits the form on the live site, FormSubmit
sends **you** a one-time email titled something like "Confirm your
FormSubmit form." Click the activation link in it once, and every
submission after that — including that very first one — lands in your
inbox automatically. (Check your spam folder if you don't see it within a
minute or two.)

**⚠️ Important — how to test it correctly:**
Don't test by double-clicking `index.html` on your computer. That opens it
as a `file://` address, and browsers block the kind of request in-page
sending needs from local files — it's a browser security rule, not a bug
in the site. To test properly, either:
- **Deploy it** (GitHub Pages, Netlify, Vercel — all free), then test on the
  real `https://` link, or
- **Run a local server** first: open a terminal in this folder and run
  `python3 -m http.server 8000`, then visit `http://localhost:8000` in
  your browser.

If you open your browser's DevTools (`F12` → Console tab) while testing,
any real error will be printed there — useful if you ever need help
debugging again.

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
