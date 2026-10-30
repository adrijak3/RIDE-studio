# RIDE Studio — editable static website

This package contains the current RIDE Studio website and its demonstration pages.

## Edit

- `index.html`, `services.html`, `work.html`, `about.html`, `contact.html`: page entry points.
- `site.js`, `site.css`: core content, translations and styling.
- `studio-extras.*`, `studio-upgrade.*`, `contact-wire.*`, `portfolio-more.css`: additional studio design and interactions.
- `demo-shilo.html`, `meadow-*`: Lithuanian riding school demo, schedule and registration.
- `demo-noir.html`, `noir-evolution.*`: luxury demo.
- `demo-rose.html`, `demo-rose.js`: pink booking calendar demo.
- `booking-demo.html`: interactive system concept.
- PNG files: imagery used by the site.

This is plain HTML/CSS/JavaScript — no `npm install` or build is necessary. Keep the files together at the repository root for a static Pages deployment.

## Hosting with GitHub + Cloudflare Pages

1. Create a GitHub repository and upload the **contents** of this ZIP to its root (including `index.html`).
2. In Cloudflare Pages, connect the GitHub repository.
3. Select no framework, no build command, and output directory `/` (repository root).
4. Deploy. Future commits to the connected branch can trigger new deployments.

## Important before publishing

- The studio contact page includes WhatsApp `+370 628 76090`. Confirm you want this number public.
- The enquiry form opens WhatsApp with a prefilled message, or copies enquiry text. It does **not** store or email submissions automatically.
- Instagram is not connected yet.
- Demo bookings, prices, trainers and availability are fictional. None writes to a database or processes payments.
- The Equus production system and Supabase database are **not** part of this ZIP.
- Review content, accessibility and privacy information before launching publicly.
