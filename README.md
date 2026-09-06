# Igor Loguinov — Online Gallery

A dependency-free, responsive artist portfolio and online gallery for Igor Loguinov. Every intended image in `public/artworks` is included in the gallery and its title is derived from the filename. The two clipboard/screenshot files are intentionally excluded.

## Run locally

Because this is a static site, no install step is required. From the repository root, use any local static server, for example:

```bash
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

Opening `index.html` directly also works in most browsers, but a local server is recommended so asset paths behave exactly as they will in deployment.

## Deploy to Netlify

1. Sign in to Netlify and choose **Add new site → Import an existing project**.
2. Choose **GitHub**, authorize Netlify if prompted, and select `anaselkalali98-lang/igor-loguinov-gallery`.
3. Select the `main` branch.
4. Use these exact settings:
   - **Base directory:** leave empty
   - **Build command:** leave empty
   - **Publish directory:** `.`
5. Choose **Deploy site**. The repository's `netlify.toml` also sets `publish = "."`, and the root `index.html` should appear at the site URL.

If the site already exists and shows “Page not found”, open **Site configuration → Build & deploy → Continuous deployment → Build settings**, remove any `public` or `dist` publish-directory override, save, and choose **Deploys → Trigger deploy → Clear cache and deploy site**. Future pushes to `main` deploy automatically.

## Artwork inquiries

Each artwork card and lightbox includes an **Inquire to purchase** link. It opens WhatsApp at `https://wa.me/212651878160` with an artwork-specific message containing the title and a request for availability and purchase details. The general contact CTA uses the same WhatsApp number, while the Facebook studio link remains available for social contact.

The site has no backend, environment variables, or secret requirements.
