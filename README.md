# Last-Minute Gifts

A one-page French landing page for a same-day gift delivery service in Casablanca, Morocco. Customers browse gift packs, tap a button, and start an order on WhatsApp. Gifts are prepared by hand and delivered in 2 to 3 hours.

*Page d'accueil en français pour un service de cadeaux livrés en 2 à 3 heures à Casablanca. Les commandes se font par WhatsApp.*

## Features

- Five gift packs with prices in MAD: Petit geste, Anniversaire, Romantique, Surprise sur mesure, and Box Surprise Totale.
- Every pack includes a small surprise box.
- "Cadeau secret" option: a handmade framed card with a personal message.
- 2 to 3 hour delivery section (Casablanca only, payment on delivery).
- Every button opens WhatsApp with a ready-made message, so the seller can ask about the receiver's age, gender, occasion and budget.
- Floating WhatsApp button, mobile-first layout, light and fast.

## Tech

- Plain HTML, CSS and a few lines of JavaScript in a single `index.html`. No framework and no build step.
- Inline SVG illustrations as a fallback when a photo is missing.
- Google Fonts: Young Serif and Figtree.

## Project structure

```
index.html            the whole page
cadeau-secret.png     photo for the secret gift section
photos/               pack photos (petit-geste, anniversaire, romantique,
                      sur-mesure, box-surprise-totale .jpg)
```

## Customize

- **WhatsApp number:** change `NUM` in the script at the bottom of `index.html` (international format, no `+`).
- **Prices and texts:** edit them directly in `index.html`.
- **Photos:** replace the files in `photos/` and keep the same names.

## Deploy

This is a static site. On Netlify choose *Add new site → Import an existing project → GitHub*, leave the build command empty and the publish directory blank. Every commit redeploys the site.

## Note on images

The pack photos are AI-generated illustrations. The page states that the exact content may vary depending on the flowers and products of the day.

## Author

Made by Maicon, Casablanca.
