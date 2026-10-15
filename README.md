# Nathaniel Jones Casimero — Computer Engineering Portfolio

A responsive portfolio built with plain HTML, CSS, and JavaScript. No build
step, npm install, server, or backend is required. The About section is text-only;
the legacy `profile.jpg` file is not displayed by the website.

## Project structure

```text
nathaniel-jones-casimero-portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── dragon-code-backdrop.svg
│   └── tool-logos/
│       ├── capcut.png
│       ├── chatgpt.png
│       ├── claude.png
│       ├── canva.png
│       ├── vscode.png
│       └── autocad.png
└── README.md
```

Keep the lowercase names `index.html`, `style.css`, and `script.js`. GitHub
Pages serves files from Linux, where uppercase and lowercase filenames differ.
This existing project keeps CSS and JavaScript at the root; the canvas is
integrated into the existing hero instead of creating duplicate `css/` and
`js/` copies.

## Run it locally

1. Open this folder in Visual Studio Code.
2. Open `index.html` in a browser, or install the VS Code **Live Server**
   extension and choose **Open with Live Server**.
3. Edit the content and refresh the browser to see your changes.

## Personalize it before publishing

- The header and introduction use Nathaniel Jones Casimero. Edit these
  directly in `index.html` if you want to change the displayed name or
  personal introduction.
- The hero and contact links use `tasespero@gmail.com`; change
  `portfolio.email` in `script.js` if your contact address changes.
- The GitHub profile is set in `portfolio.profiles.github` in `script.js`;
  update `portfolio.profiles.linkedin` when you want to add your LinkedIn
  profile. The hero and contact links update together.
- Edit the `portfolio.tools`, `portfolio.projects`, `portfolio.services`, and
  `portfolio.journey` arrays near the top of `script.js`. The Ideas in progress
  section shows project examples and service cards; update each service to
  accurately describe what you can offer. The Always becoming timeline includes
  your current CPE education and placeholders for coursework, certificates, and
  verified milestones. Tool logos link to their official
  websites and enlarge on hover, focus, or touch. Each tool logo is a local
  PNG image in `assets/tool-logos/`. Project repository and demo links start
  empty; add real URLs only when those pages exist. Replace sample status and
  descriptions with accurate details. Do not include patient information or
  other sensitive data.
- Add only skills you are comfortable claiming. There are no proficiency
  percentages.

### Hero artwork

The requested photorealistic dragon artwork has **not** been generated or
included. The included `assets/dragon-code-backdrop.svg` is an original,
scalable abstract vector atmosphere — not a photorealistic image or AI
generation. It works as the replaceable hero artwork behind the CSS overlay.
To use your own licensed/generated artwork:

1. Export a compressed landscape image as WebP and save it as
   `assets/dragon-code-hero.webp`.
2. In both hero rules in `style.css`, replace
   `url("./assets/dragon-code-backdrop.svg")` with
   `url("./assets/dragon-code-hero.webp")`.
3. The CSS automatically layers your image behind a dark readability overlay.
   Keep the SVG file as a backup, or restore its URL to use the vector art.
4. Use artwork that you have the rights to publish.

The hero code window is decorative artwork, not a working editor. The contact
form submits to the Formspree endpoint configured in `index.html`; confirm that
the endpoint belongs to your Formspree account and complete any activation
steps Formspree requires before publishing. The email link remains available as
an alternative contact method.

### Animated hero background

`index.html` contains an aria-hidden canvas in the hero. `script.js` animates
the canvas with requestAnimationFrame; `style.css` adds slow ambient gradients.
The canvas cannot intercept clicks and is automatically resized with the hero.
Particle count scales with hero area and is capped for performance. Animation
pauses in background tabs. With `prefers-reduced-motion` enabled, the canvas
shows a still particle composition and CSS ambient motion stops.
The page-wide grid and decorative section dividers are removed. A separate
theme-colored star field appears behind content after the hero and gradually
fades as you scroll toward the footer.

To tune the effect, edit `energySettings` near the bottom of `script.js`:

- `particlesPerArea`: raise for more particles; lower to make it lighter.
- `minimumParticles` / `maximumParticles`: small-screen floor and overall cap.
- `particleSpeed`: multiply particle drift and vortex movement.
- `vortexStrength`: strength of the gentle spiral around the hero illustration.
- `glowIntensity`: glow around selected particles and the vortex.
- `maximumPixelRatio`: canvas resolution/performance cap on high-density screens.

The matching CSS ambient field duration is set by
`animation: ambient-drift 32s ...` on `.hero-backdrop::after`; a larger duration
means slower movement. Reduce the color alpha values in `drawVortex` to dim
the glow. The hero animation uses soft light and particles without connecting
lines. The canvas sits between the backdrop and page content.

### Cursor trail

On devices with a mouse or pen, moving the pointer leaves a short-lived,
glowing trail in the portfolio's orange, amber, gold, cyan, and teal theme.
The full-screen canvas never intercepts clicks, runs only while its particles
are fading, and is disabled for coarse/touch pointers and reduced-motion
preferences. To tune it, adjust `maximumCursorParticles` and the `cursorColors`
array near the end of `script.js`; adjust the particle `life`, `radius`, or
`shadowBlur` there to change trail duration and glow.

#### Testing and troubleshooting

- In VS Code, open `index.html` and choose **Open with Live Server**. Inspect
  the hero at desktop and mobile widths and check the browser console for errors.
- If the canvas is blank, confirm the `<canvas class="hero-energy">` is inside
  `.hero`, `script.js` is loaded with `defer`, and the browser supports Canvas
  2D and `ResizeObserver`. The existing SVG backdrop remains visible without
  canvas support.
- If custom art is missing, confirm its path is relative to `style.css`, check
  filename capitalization, and check the browser Network panel. Restore the
  bundled SVG URL to use the included vector background.
- If animation is slow, lower `maximumParticles` and `particlesPerArea`, set
  `maximumPixelRatio` to `1`, or reduce `glowIntensity`. The effect already
  pauses in hidden tabs and uses a lower-resolution canvas on high-DPI displays.
- Test reduced motion in the operating system's accessibility settings or
  emulate `prefers-reduced-motion: reduce` in browser developer tools.

## Publish with GitHub Pages

1. Sign in to GitHub and create a **public** repository, for example
   `nathaniel-jones-casimero-portfolio`. Do not initialize it with another README if you
   already have one in this folder.
2. In VS Code, open **Terminal → New Terminal**. Check that the terminal is
   in the folder containing `index.html` and `README.md`.
3. Run these commands, replacing `YOUR-USERNAME` and the repository name:

   ```bash
   git init
   git add index.html style.css script.js README.md assets/
   git commit -m "Build personal portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/nathaniel-jones-casimero-portfolio.git
   git push -u origin main
   ```

   If this folder is already a Git repository with a configured remote, do not
   run `git init` or add a second `origin`; inspect the existing remote and
   follow your repository's normal commit/push workflow.
4. On GitHub, open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**. Select
   `main` and `/(root)`, then click **Save**.
6. Wait for the Pages deployment in the repository's **Actions** tab to finish.
   Your site will be at
   `https://YOUR-USERNAME.github.io/nathaniel-jones-casimero-portfolio/`.
7. After later edits, commit and push them to `main`; GitHub Pages redeploys
   the site automatically.

Use the actual repository name in the published URL. All site assets use
relative paths, so the portfolio also works from a GitHub Pages project URL.
