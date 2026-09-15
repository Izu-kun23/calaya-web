# Calaya Engineering — Editorial Industrial Design System

## Reference scan

The supplied reference uses an image-led industrial hero beneath a compact floating header, generous white editorial sections, modular metric cards, alternating image-and-copy compositions, a dark project band, large proof points, a two-story insight grid, and a compact dark footer. The visual rhythm comes from asymmetric columns, short line lengths, restrained radii, fine rules, and strong changes in scale.

The reference's subject matter is not copied. Its layout system is translated to Calaya's existing oil-and-gas content, real project imagery, and existing blue, white, and red identity.

## Tokens

- Operations blue: `#071a3a`
- Calaya blue: `#163d7a`
- Action red: `#d9272e`
- Paper white: `#ffffff`
- Field grey: `#f3f6f9`
- Ink: `#0b1220`
- Content width: `1180px`
- Section spacing: `88–128px` desktop, `64–88px` mobile
- Media radius: `12–14px`; action radius: `5–6px`

Typography keeps the existing Montserrat heading, Open Sans body, and Roboto data families. Headlines are compact, left-aligned, and high contrast; body copy stays below 80 characters per line.

## Page anatomy

```text
floating navigation
full-bleed operational hero + lower-edge proof card
editorial company introduction
four-card operational metric rail
horizontal service index
image + numbered delivery method
dark case-study rail
large divided impact rows
two-story insights grid
conversion band + compact footer
```

## Motion

- One orchestrated GSAP hero entrance for image, copy, actions, and proof card.
- Subtle hero-image parallax tied to scroll.
- ScrollTrigger reveals on shared page sections.
- Counts animate once on entering the viewport.
- Horizontal rails retain native touch and trackpad scrolling.
- Lenis drives smooth scrolling and is synchronized with GSAP's ticker.
- `prefers-reduced-motion` disables transforms, smoothing, and long transitions.

## Cross-page rules

All routes share the same compact navigation, footer, hero scale, section rhythm, card geometry, image treatment, and red action language. Existing service, project, product, partner, policy, contact, and news content remains intact.

Inner pages use the homepage as their visual source of truth: large lightweight image-led heroes, left-aligned introductions, paper-white and cool-grey section alternation, fine-rule cards, six-pixel action radii, navy proof areas, restrained shadows, and the same responsive content spine. Functional tabs, filters, forms, galleries, and modals keep their existing behavior.

## Guardrails

- Do not introduce colors outside the current blue/white/red system and its neutral greys.
- Do not replace operational content with generic marketing claims.
- Use red for actions and evidence accents, not indiscriminate decoration.
- Prefer Calaya field imagery to abstract artwork.
- Keep motion purposeful, performant, keyboard-safe, and reduced-motion aware.

## Large-screen scaling

- 14-inch laptops and short desktop viewports keep a complete hero within the visible height.
- Standard desktop content stays near `1180px` to protect the reference composition.
- At 1728px and above, the editorial grid expands to `1440px`; at 2200px and above it caps at `1660px`.
- QHD and 4K displays gain wider project/service rails, taller evidence imagery, and increased section rhythm rather than excessively long text lines.
- Legacy Tailwind page containers scale alongside the homepage so service, partner, project, policy, and contact routes do not remain narrow on 27/32-inch displays.
