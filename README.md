# Keshav Kumar — Portfolio (v2)

A fully responsive, single-page portfolio rebuilt from scratch, based on your
resume and the notes in `Info.docx`.

## What's inside
- `index.html` — all content (About, Education, Skills, Projects, Certifications, Achievements, Contact)
- `style.css` — design system (colors, type, layout, responsiveness)
- `script.js` — mobile menu, scroll effects, copy-email button, contact form
- `images/keshav.jpg` — your headshot, optimized for the web

## How the contact form works
The form submits in-page via **Formspree** (free, no server to maintain) —
visitors never leave your site or see an email app popup. Submissions land
straight in your inbox. There's also a "Copy" button next to your email
address for anyone who prefers to email you directly.

**One-time setup (2 minutes) to turn this on:**
1. Go to [formspree.io](https://formspree.io) and sign up with
   `keshavkumar64581@gmail.com`.
2. Create a new form. Formspree gives you an endpoint URL that looks like
   `https://formspree.io/f/abcdwxyz`.
3. Open `script.js`, find this line near the top:
   ```js
   var FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
   ```
   and replace `YOUR_FORM_ID` with your real ID.
4. Save, re-upload/redeploy the file. Test by submitting the form yourself.
5. Formspree emails you a confirmation link the first time — click it to
   activate the form.

**Until you do this**, the form still works — it automatically falls back to
opening the visitor's email app pre-filled to `keshavkumar64581@gmail.com`,
so no message is ever lost either way.

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
