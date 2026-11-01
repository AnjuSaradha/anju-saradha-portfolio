# Anju Saradha Portfolio — V2

Responsive React + Vite portfolio with a dark purple/black reference-inspired hero, project gallery, experience, case studies, skills, contact section, and local FAQ chatbot.

## Run locally
1. Install Node.js LTS (if needed).
2. Open this folder in VS Code.
3. Run `npm install` then `npm run dev`.
4. Open the local URL printed by Vite.

## Publish on Vercel
- Push the project to GitHub and import it at https://vercel.com/new, or use `npx vercel --prod`.
- Framework preset: Vite. Build command: `npm run build`. Output: `dist`.

## Customize before publishing
- Update `src/data.js` with verified details and your LinkedIn URL.
- Add your CV as `public/anju-saradha-cv.pdf`.
- Add a photo as `public/profile.jpg` if you want to use it.
- Contact form opens an email draft; it does not send messages automatically.
- Chatbot uses preset FAQ responses, not a generative AI API.
- Do not claim unverified job titles, certifications or metrics.

## New hero section
Technology icon badges and four career/research statistics appear below the GitHub and LinkedIn links. Brand logos use react-icons. Run `npm install` after upgrading.
