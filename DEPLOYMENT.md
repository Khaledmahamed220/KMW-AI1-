# KMW AI deployment

## GitHub Pages
1. Push this project to your GitHub repository on the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open **Actions** and let `Deploy to GitHub Pages` finish successfully.
5. Open the published Pages URL shown by the deployment.

Do not choose **Deploy from a branch** for this Vite/React source project, because the repository contains `src/main.jsx` and needs the Vite build step first.

## Vercel
Import the repository into Vercel. The project already contains `vercel.json` with:
- Build command: `npm run build`
- Output directory: `dist`

Do not upload the raw `src/` folder as a static site. Vite must build the application first.
