# Anchorblock Technology — local redesign preview

This is a separate, dependency-free static preview of the Anchorblock company profile. It uses the supplied Anchorblock logo, the existing company copy and product imagery, and omits the open-source repository showcase. Nothing in this folder has been deployed.

## Preview

Open `index.html` in a browser. The page uses regular HTML, CSS, and JavaScript; it has no build step or package installation.

The supplied SVG logo is in `assets/anchorblock-logo.svg`. Original product and Trukkr image assets are bundled in `assets/originals`, so they work without remote image access. Inter loads from Google Fonts; an internet connection is needed for that font, with system fallbacks available.

The contact form validates the name, email, focus area, and project brief, then opens the visitor’s email app with a message addressed to `faruk@anchorblock.vc`. This local preview does not post to the production contact service; a deployed version will need its form endpoint connected.

## Review notes

- Layout and copy live in `index.html`. Capabilities use icon-led cards with their descriptions visible; sectors are always-visible points.
- Responsive visual styling lives in `styles.css`.
- Mobile navigation, the email handoff, and reduced-motion-aware reveal animations live in `main.js` and `styles.css`.
- The static preview does not include the production admin, careers editor, contact-service integration, or deployment configuration.
