# Igor Loguinov — Online Gallery

A dependency-free, responsive artist portfolio and online gallery for Igor Loguinov. Every image in `public/artworks` is included in the gallery and its title is derived from the filename.

## Run locally

Because this is a static site, no install step is required. From the repository root, use any local static server, for example:

```bash
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

Opening `index.html` directly also works in most browsers, but a local server is recommended so asset paths behave exactly as they will in deployment.

## Deploy to Netlify

1. Create a new site in Netlify and connect the Git repository.
2. Use these exact settings: **Base directory:** empty, **Build command:** empty, **Publish directory:** `.` (the repository root).
3. Deploy. The included `netlify.toml` also declares `publish = "."`, so a manually selected `public` directory is not needed.

The deploy preview should show `index.html` at the site root. If Netlify previously reported “Page not found”, open **Site configuration → Build & deploy → Continuous deployment → Build settings**, clear any `public` or `dist` publish directory override, and trigger a fresh deploy from the latest commit.

The site has no backend, environment variables, or secret requirements.
