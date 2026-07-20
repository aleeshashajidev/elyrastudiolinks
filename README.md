# Elyra Studio Links — Angular Landing Page

A mobile-first QR-code landing page for a jewellery business with glassmorphism cards, animated buttons, social links, gallery images and dark/light mode.

## 1. Update your details

Edit `src/app/app.component.ts`:

- Replace the WhatsApp number. Use country code and no `+`, spaces or brackets.
- Replace the Facebook URL.
- Confirm the Instagram URL.

Add your photos inside `public/images/` using:

- `jewellery-1.jpg`
- `jewellery-2.jpg`
- `jewellery-3.jpg`

## 2. Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200`.

## 3. Rename the GitHub repository

The included setup assumes the repository is named `elyra-links`.

For a different repository name, update this line in `package.json`:

```json
"build:pages": "ng build --configuration production --base-href /YOUR-REPOSITORY-NAME/"
```

## 4. Deploy through GitHub Pages

1. Create a public GitHub repository named `elyra-links`.
2. Upload the complete project, including the `.github` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Push or upload a change to the `main` branch.
6. Open the **Actions** tab and wait for the deploy workflow to complete.
7. Your URL will be: `https://YOUR-USERNAME.github.io/elyra-links/`

Use that final URL when creating the QR code for your business card.
