# Urbanix Interiors - React + Vite + Tailwind

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

- Brand colors: `#000E1E` (navy) and `#F6AB23` (gold) are set in `tailwind.config.js`.
- All text, images, videos, clients, reviews and contact details live in `src/data/siteData.js`.
- Images are Unsplash HD URLs. Replace with your own project photos for production.
- Videos use sample MP4 links. Replace `src` in `videos` with your own files or hosted URLs.
- Contact form: add your API / EmailJS / Formspree call in `src/components/ContactForm.jsx` (see TODO).
- For hosting on Netlify/Vercel add an SPA rewrite so `/about`, `/services` etc. load on refresh.
