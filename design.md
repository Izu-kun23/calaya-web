# Bluestone98 Website Design Specification

> A detailed, implementation-ready UI reference for recreating the design language of [bluestone98.com](https://www.bluestone98.com/) with Tailwind CSS.
>
> Audited: 19 September 2026. This document describes observed design patterns and proposes a maintainable Tailwind implementation. It is not a copy of Bluestone98's proprietary source code, content, branding, or assets.

## 1. Design intent

The experience positions Bluestone98 as an established, design-led digital studio. Its confidence comes from reduction rather than decoration:

- oversized editorial typography;
- an almost monochrome canvas;
- high-quality project imagery as the main source of colour;
- generous spacing and deliberate asymmetry;
- small, functional controls with polished micro-interactions;
- proof distributed throughout the page rather than isolated in one block;
- motion used to establish pace, reveal depth, and make the interface feel engineered.

The aesthetic can be described as **editorial minimalism with kinetic portfolio energy**. The UI should feel premium, direct, technically mature, and calm between moments of visual intensity.

## 2. Experience principles

1. **Let work supply the colour.** The shell remains black, white, and off-white. Portfolio media creates emotional variety.
2. **Scale communicates confidence.** Headlines are dramatically larger than body copy, often occupying most of the viewport width.
3. **Whitespace is structural.** Large empty areas are not accidental; they direct attention and create rhythm.
4. **Motion must explain hierarchy.** Text reveals, rolling labels, image movement, and marquees should reinforce the direction of reading.
5. **Proof precedes persuasion.** Awards, client logos, projects, testimonials, process, and metrics progressively reduce buyer risk.
6. **The conversion path stays simple.** A persistent “Start a project” action opens a concise, staged enquiry flow.
7. **Every interaction has a quiet response.** Buttons, navigation, cards, and cursors respond without becoming theatrical.

## 3. Visual foundation

### 3.1 Colour system

Observed core colours:

| Token | Value | Tailwind utility | Use |
| --- | --- | --- | --- |
| `ink` | `#0B0E12` | `bg-ink`, `text-ink` | Primary text, page surround, dark panels |
| `paper` | `#FFFFFF` | `bg-white` | Main content surface |
| `lime` | `#DEFE4C` | `bg-lime` | Primary accent and CTA emphasis |
| `line` | `rgba(11,14,18,.16)` | `border-ink/15` | Hairlines and ghost buttons |
| `muted` | `rgba(11,14,18,.62)` | `text-ink/60` | Secondary text |
| `dark-muted` | `rgba(255,255,255,.64)` | `text-white/65` | Supporting copy on dark surfaces |

Use neutral surfaces for at least 80% of the interface. Lime is a signal, not a background default. Saturated colours belong mainly inside imagery and animated atmospheric gradients.

### 3.2 Typography

The live site uses:

- **Display:** Degular Display or a similar soft grotesk display face.
- **Interface/body:** Inter, with system fallbacks.

The display face has wide counters, compact vertical proportions, and a slightly editorial character. If Degular Display is unavailable, use `Manrope`, `DM Sans`, or `Inter Tight`, but validate line breaks manually.

```css
/* app.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@400;500&display=swap');

@layer base {
  html { @apply bg-ink text-ink antialiased; }
  body { @apply font-sans text-[15px] leading-[1.45]; }
  h1, h2, h3 { @apply font-display font-normal tracking-[-0.018em]; }
}
```

Recommended type scale:

| Role | Mobile | Tablet | Desktop | Notes |
| --- | --- | --- | --- | --- |
| Mega display | `clamp(3.5rem, 14vw, 5.8rem)` | `8vw` | `clamp(5.7rem, 7.2vw, 8rem)` | Line-height `.84–.9` |
| Section display | `3rem` | `4.5rem` | `clamp(4.5rem, 6vw, 7rem)` | Line-height `.9–.98` |
| Large title | `2.25rem` | `3rem` | `3.75rem` | Line-height `.98` |
| Card title | `1.5rem` | `1.8rem` | `2.25rem` | Line-height `1.05` |
| Body large | `1.05rem` | `1.15rem` | `1.25rem` | Max width `38rem` |
| Body | `.9375rem` | `1rem` | `1rem` | Line-height `1.45–1.6` |
| Label/nav | `.72rem` | `.75rem` | `.75rem` | Weight 500–600 |

Avoid heavy bold display type. Visual authority comes from scale and spacing, not weight.

### 3.3 Layout shell

The desktop page sits as a white sheet inside a dark outer frame, approximately 10–12px from the viewport edges. This creates a subtle poster-like border.

```tsx
<body className="bg-ink p-0 lg:p-[10px]">
  <div className="min-h-screen overflow-clip bg-white lg:rounded-[2px]">
    {/* header + page */}
  </div>
</body>
```

Container sizes inferred from the live design:

- Full: `max-w-[1700px]`
- Standard: `max-w-[1500px]`
- Reading/narrow: `max-w-[1300px]`
- Desktop horizontal padding: `40px`
- Mobile horizontal padding: `12–20px`

```tsx
const container = "mx-auto w-full max-w-[1500px] px-4 md:px-10";
```

Use a 12-column grid at desktop and a 4-column grid on mobile. Asymmetry is encouraged, but edges should always resolve to the grid.

## 4. Tailwind configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0E12',
        paper: '#FFFFFF',
        lime: '#DEFE4C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Degular Display', 'Manrope', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        full: '106.25rem',
        standard: '93.75rem',
        narrow: '81.25rem',
      },
      borderRadius: {
        media: '1.125rem',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'ticker-run': { to: { transform: 'translateX(-50%)' } },
        'roll-up': { to: { transform: 'translateY(-50%)' } },
        'glow-a': {
          '0%,100%': { transform: 'translate3d(-14%,-9%,0) scale(1)', opacity: '.7' },
          '50%': { transform: 'translate3d(16%,11%,0) scale(1.18)', opacity: '1' },
        },
        'glow-b': {
          '0%,100%': { transform: 'translate3d(13%,10%,0) scale(1.16)', opacity: '1' },
          '50%': { transform: 'translate3d(-15%,-11%,0) scale(1)', opacity: '.65' },
        },
      },
      animation: {
        ticker: 'ticker-run 28s linear infinite',
        'glow-a': 'glow-a 12s ease-in-out infinite',
        'glow-b': 'glow-b 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
```

## 5. Page structure

The homepage follows a commercially strong narrative:

1. Global header
2. Hero proposition
3. Immersive project image rail
4. Studio positioning statement
5. Trusted-by proof and logo marquee
6. Recent projects portfolio grid
7. Oversized “All work” transition link
8. Client testimonial gallery
9. Services index
10. Three-stage process
11. Business statistics
12. Animated conversion CTA
13. Footer / legal / contact details
14. Project enquiry overlay
15. Cookie preference banner

This order should be preserved because it moves the buyer from positioning, to evidence, to capability, to method, to scale, and finally to conversion.

## 6. Global header

### Desktop

- Fixed or sticky at the top, visually transparent when at page origin.
- Logo aligned left.
- Main navigation centred: Our Work, Services, Sectors, About Us, Contact.
- Phone number and dark pill CTA aligned right.
- The header condenses while scrolling: narrower width, increased corner radius, soft shadow, and stronger background.
- Hide/reveal behaviour may follow scroll direction: disappear on downward velocity; return on upward movement.

```tsx
<header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 lg:px-6">
  <div className="mx-auto flex h-[72px] max-w-full items-center justify-between rounded-full bg-white/95 px-4 transition-all duration-700 ease-expo supports-[backdrop-filter]:backdrop-blur-xl lg:px-5">
    <Logo className="h-[54px] w-auto lg:h-[60px]" />
    <nav className="hidden items-center gap-8 lg:flex">...</nav>
    <div className="hidden items-center gap-5 lg:flex">...</div>
    <MenuButton className="lg:hidden" />
  </div>
</header>
```

### Navigation micro-interaction

Each label is duplicated in a vertically clipped wrapper. On hover, the current label rolls upward while its duplicate enters from below.

```tsx
<a className="group h-4 overflow-hidden text-xs font-medium">
  <span className="flex flex-col transition-transform duration-500 ease-expo group-hover:-translate-y-1/2">
    <span className="h-4">Services</span>
    <span className="h-4">Services</span>
  </span>
</a>
```

### Mobile menu

- Replace central navigation and phone with a menu trigger.
- Open a full-screen ink panel.
- Use oversized stacked navigation labels.
- Reveal items with a 40–70ms stagger.
- Keep “Start a project” visually distinct in lime.
- Lock background scrolling and return focus to the trigger on close.

## 7. Buttons and links

### Primary pill

```tsx
const primaryButton = [
  'group relative inline-flex min-h-11 items-center justify-center gap-3',
  'overflow-hidden rounded-full bg-ink px-6 py-3',
  'text-xs font-semibold text-white',
  'transition-[color,transform] duration-500 ease-expo',
  'hover:-translate-y-0.5 focus-visible:outline-none',
  'focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2'
].join(' ');
```

### Lime pill

Use for the final CTA and high-priority conversion moments: `bg-lime text-ink`.

### Ghost pill

`border border-ink/15 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white`.

### Arrow treatment

Use a northeast arrow (`↗`) or 45-degree arrow icon. Animate it 2–3px diagonally on hover. Never use a large chevron.

### Button motion

- Duration: `400–500ms`
- Ease: `cubic-bezier(.16,1,.3,1)`
- Text can use the two-line roll treatment.
- Optional circular background fill may scale from the arrow side.
- Respect a 44px minimum touch target.

## 8. Hero

### Composition

The hero begins below the header with substantial top space. Its desktop layout is intentionally unbalanced:

- small bullet eyebrow above the title;
- very large two-line headline on the left;
- supporting copy beneath the title, constrained to roughly 460px;
- two ghost actions aligned toward the lower-right;
- image rail begins before the hero feels fully complete, pulling the user into the work.

```tsx
<section className="px-4 pb-16 pt-32 md:px-10 md:pb-24 md:pt-48">
  <div className="mx-auto max-w-standard">
    <p className="mb-7 flex items-center gap-2 text-xs">
      <span className="size-1.5 rounded-full bg-ink" />
      Strategists. Designers. Engineers.
    </p>
    <h1 className="max-w-[1120px] font-display text-[clamp(3.6rem,7.1vw,7.6rem)] leading-[.86] tracking-[-.018em]">
      Built with experience.<br />Designed to last.
    </h1>
    <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
      <p className="max-w-[470px] text-base leading-[1.35] lg:col-span-5">...</p>
      <div className="flex gap-3 lg:col-span-4 lg:col-start-10">...</div>
    </div>
  </div>
</section>
```

### Entry animation

- Eyebrow: opacity 0 → 1, y 12 → 0.
- Headline: reveal by line using an overflow-hidden mask; y 110% → 0.
- Copy/actions: fade and rise with a 100–160ms stagger.
- Total entrance should complete within 1.1–1.4 seconds.
- Do not animate individual letters; line-level motion feels more assured.

## 9. Project image rail

The opening project gallery uses multiple tall, rounded media cards with different vertical offsets. The first card can bleed past the left boundary; later cards create a loose editorial rhythm.

### Card anatomy

- Aspect ratios range from approximately `3/4` to `4/5`.
- Radius: `16–20px`.
- Media uses `object-cover`.
- Cards may lift or reveal metadata on hover.
- Use `overflow-hidden` on each card.
- Apply subtle image scale: `group-hover:scale-[1.025]` over 700–900ms.

```tsx
<div className="grid grid-cols-2 items-end gap-3 md:grid-cols-4 md:gap-4">
  {projects.map((project, i) => (
    <article className={cn('group overflow-hidden rounded-media', offsets[i])}>
      <img className="aspect-[3/4] size-full object-cover transition-transform duration-1000 ease-expo group-hover:scale-[1.025]" />
    </article>
  ))}
</div>
```

On mobile, use a horizontally scrollable rail with snap points instead of shrinking all cards into a dense grid.

## 10. Positioning statement

Use one large paragraph-like heading across most of the page width. The live experience uses a scroll-linked “fill text” reveal: text begins muted and becomes fully inked as the viewport passes through it.

Recommended implementation:

- split into words or lines, never characters;
- base colour `text-ink/20`;
- overlay or per-word active colour `text-ink`;
- update using Intersection Observer or Motion `useScroll`;
- avoid forced scrub animations on low-power/mobile devices.

```tsx
<h2 className="max-w-[1220px] font-display text-[clamp(2.8rem,4.5vw,5rem)] leading-[.96]">
  {/* progressively filled words */}
</h2>
```

## 11. Trust / logo marquee

This is a full-width ink section that interrupts the white page:

- small “Trusted by” label;
- large white claim;
- two opposing or repeated logo tracks;
- monochrome client logos with consistent visual height;
- generous vertical padding.

```tsx
<section className="overflow-hidden bg-ink py-20 text-white md:py-28">
  <div className="px-4 md:px-10">...</div>
  <div className="mt-14 flex w-max animate-ticker items-center gap-16 pr-16 motion-reduce:animate-none">
    {[...logos, ...logos].map(...)}
  </div>
</section>
```

Marquee rules:

- duplicate the sequence for a seamless loop;
- use linear movement at 25–40 seconds per loop;
- pause on hover only if logos are interactive;
- add no gradients that obscure logo legibility;
- in `prefers-reduced-motion`, show a wrapped static grid.

## 12. Recent projects

The portfolio grid is the main proof engine. It should feel curated rather than templated.

### Desktop grid

- Use a two-column editorial grid.
- Vary media height and vertical offset.
- Alternate portrait and landscape cards.
- Maintain a strong text hierarchy: title, one-sentence outcome, service tags.
- Keep card chrome invisible; cards are media and typography, not boxes.

### Project card

```tsx
<a className="group block">
  <div className="overflow-hidden rounded-media bg-ink/5">
    <img className="size-full object-cover transition duration-1000 ease-expo group-hover:scale-[1.03]" />
  </div>
  <div className="mt-5 flex items-start justify-between gap-6">
    <div>
      <h3 className="font-display text-3xl leading-none">Project name</h3>
      <p className="mt-2 max-w-xl text-sm text-ink/65">Commercial outcome or concise description.</p>
    </div>
    <ArrowUpRight className="mt-1 size-5 transition-transform duration-500 ease-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
  </div>
  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-wide">...</ul>
</a>
```

### Scroll reveal

Each card should enter once with opacity and translate, staggered by visual row. Images can use a clipping mask from bottom to top. Avoid replaying large reveals whenever the user scrolls back.

## 13. Oversized “All work” link

Use a nearly viewport-wide display link as a transitional statement. The text may be duplicated and vertically rolled on hover. It should feel like an editorial spread, not a standard button.

- Desktop size may reach `clamp(8rem, 17vw, 15rem)`.
- Line-height near `.9`.
- Negative tracking around `-.015em`.
- Keep the active hit area equal to the full visible word.
- On mobile, reduce to roughly `22vw` and preserve one line if possible.

## 14. Testimonials

Testimonials combine lifestyle/project imagery and oversized quotation copy. The sequence should feel like a gallery rather than a carousel widget.

### Recommended composition

- Section header at top.
- On desktop: media panel on one side; quote, identity, and navigation on the other.
- On mobile: image first, quote second, controls last.
- Author image/avatar or initials appear beside name and organisation.
- Current slide indicator should be subtle.

### Interaction

- Crossfade or horizontal slide between items.
- Duration `600–800ms` with expo easing.
- Image and quote transition together but with a 60–100ms offset.
- Support swipe on touch, arrow keys when focused, and labelled previous/next controls.
- Pause auto-advance on hover/focus; preferably do not auto-advance at all.

## 15. Services index

The live site presents six numbered services:

1. Websites
2. eCommerce
3. Branding
4. UX / UI Design
5. Development
6. Ongoing Support

Use an accordion-like row structure with a number, title, and description. Desktop hover may reveal media or shift the title; click should remain the real navigation action.

```tsx
<a className="group grid grid-cols-[3rem_1fr_auto] items-start border-t border-ink/15 py-6 md:grid-cols-12 md:py-8">
  <span className="text-xs tabular-nums md:col-span-1">01</span>
  <h3 className="font-display text-4xl leading-none md:col-span-4 md:text-6xl">Websites</h3>
  <p className="mt-4 max-w-lg text-sm text-ink/65 md:col-span-5 md:col-start-7 md:mt-0">...</p>
  <ArrowUpRight className="size-5 md:col-start-12" />
</a>
```

Add a closing bottom border to the last row. On hover, darken the title and move the arrow; avoid turning every row into a filled card.

## 16. Process: Strategy, Design, Build

The process is a three-stage narrative. Each stage contains:

- two-digit index;
- large stage title;
- concise paragraph;
- compact capability tags.

Desktop behaviour can use sticky positioning: keep the “How we work” heading pinned while process panels pass beside it. On small screens, stack naturally.

```tsx
<section className="grid gap-12 px-4 py-20 md:px-10 lg:grid-cols-12 lg:py-32">
  <h2 className="font-display text-6xl lg:sticky lg:top-28 lg:col-span-5 lg:self-start lg:text-8xl">How we work</h2>
  <div className="space-y-24 lg:col-span-6 lg:col-start-7">...</div>
</section>
```

Use scroll-linked line or background progress carefully. The content must remain understandable without animation.

## 17. Statistics

The statistics block uses white space, large numbers, and restrained dividers:

- Companies Supported — 7500+
- Years Established — 28
- UK Studios — 3
- Client Retention — 93%

Recommended grid: four columns desktop, two tablet, one or two mobile. Numbers should use tabular numerals where possible.

Counter animation rules:

- trigger once when 35–50% visible;
- duration 1.2–1.8 seconds;
- use ease-out;
- preserve the final semantic number in the DOM;
- skip counting when reduced motion is requested;
- do not animate from zero if the section is loaded directly into view after navigation.

## 18. Conversion CTA

The bottom CTA is a dark, immersive panel with large white text, a lime action, and slow ambient gradients/textures.

### Visual layers

1. Base `bg-ink`.
2. Two blurred lime/green-blue glow fields with 12–15 second opposing paths.
3. Optional low-opacity noise texture.
4. Oversized headline and CTA above all effects.
5. Decorative sheen or drifting type texture at very low opacity.

```tsx
<section className="relative isolate overflow-hidden bg-ink px-4 py-24 text-white md:px-10 md:py-36">
  <div aria-hidden className="absolute -left-1/4 -top-1/3 -z-10 size-[70vw] rounded-full bg-lime/25 blur-[120px] animate-glow-a motion-reduce:animate-none" />
  <div aria-hidden className="absolute -bottom-1/3 -right-1/4 -z-10 size-[65vw] rounded-full bg-cyan-500/20 blur-[130px] animate-glow-b motion-reduce:animate-none" />
  <h2 className="max-w-5xl font-display text-[clamp(4rem,7vw,7.5rem)] leading-[.9]">Let's build something<br />great together.</h2>
  <a className="mt-10 inline-flex rounded-full bg-lime px-7 py-4 text-xs font-semibold text-ink">Start a project ↗</a>
</section>
```

## 19. Project enquiry overlay

The “Start a project” action opens a high-conversion modal or full-screen drawer.

### Content architecture

- Headline: “Let's build something made to last.”
- Reassurance: a real person responds within one working day.
- Proof bullets: independence, awards, and studio locations.
- Primary fields: service, name, email.
- Optional fields: phone and company.
- Submit action.
- Progressive second step: budget range and project detail.
- Confirmation state with a clear route back to the site.

### UX rules

- Name and email are the only essential fields.
- Present optional detail after the primary submission or behind a disclosure.
- Budget should use pill choices, not a select.
- Show inline validation near the field.
- Preserve entered data when moving between steps.
- Close on explicit close, Escape, or backdrop click only when no submission is in progress.
- Trap focus, set an accessible dialog name, and restore focus on exit.
- On mobile, use a full-screen sheet with a sticky close action.

## 20. Footer

The footer should conclude, not introduce a new visual system.

- Dark background continuous with the CTA.
- Brand mark, contact details, location/studio information, social links, privacy and terms.
- Large but disciplined spacing.
- Small legal text in muted white.
- Links reuse the rolling text or underline-slide interaction.
- Do not overcrowd with sitemap links already available in navigation.

## 21. Motion system

### Timing tokens

| Token | Duration | Use |
| --- | --- | --- |
| `instant` | 120–180ms | Pressed states, toggles |
| `fast` | 250–350ms | Icons, colour, cursor feedback |
| `base` | 400–550ms | Button fills, nav rolls, accordion |
| `slow` | 700–1000ms | Images, section reveals, modal entrance |
| `ambient` | 12–40s | Glows, marquees, background textures |

Primary easing: `cubic-bezier(0.16, 1, 0.3, 1)`.

### Motion inventory

| Element | Trigger | Behaviour |
| --- | --- | --- |
| Header | Scroll | Compresses, gains surface/shadow; may hide/reveal by direction |
| Nav/link labels | Hover/focus | Vertical roll between duplicated labels |
| Logo | Hover | Vertical roll/alternate mark |
| Hero text | Load | Masked line rise with stagger |
| Project media | Hover | Slow 2–3% scale and optional overlay reveal |
| Section headings | Enter viewport | Fade/rise or masked line reveal |
| Positioning copy | Scroll | Muted-to-solid word fill |
| Logos | Continuous | Seamless horizontal ticker |
| Portfolio cards | Enter viewport | One-time clip/translate reveal |
| Statistics | Enter viewport | Count to value once |
| CTA glow | Continuous | Slow opposing translate and scale |
| Custom cursor | Pointer movement | Ring trails pointer; context label appears on media |

### Custom cursor

Desktop pointer devices may use a small dot plus a larger ring. The ring expands on interactive media and can display context such as “View”. Disable it for touch, pen, reduced motion, and any environment where it harms usability. Never hide the native cursor until the custom cursor has initialized successfully.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }
  .marquee-track { transform: none !important; }
}
```

Provide a static logo grid and fully visible text as fallbacks.

## 22. Responsive behaviour

### Mobile: below 640px

- Remove the decorative outer page gutter.
- Use 16px content padding.
- Switch header to logo + menu trigger.
- Hero headline is 3–4 lines if required; do not compress tracking excessively.
- Stack hero copy and actions.
- Turn opening media gallery into horizontal snap scrolling.
- Collapse portfolio to one column.
- Keep display typography large enough to preserve identity.
- Stack testimonial media and copy.
- Stack process sections; remove sticky behaviour.
- Use a 2-column stats grid when labels fit, otherwise one column.
- Full-screen enquiry sheet.

### Tablet: 640–1023px

- 24–32px content padding.
- Keep mobile navigation.
- Use 2-column project grids.
- Permit partial asymmetry but avoid large empty offsets.
- Stats use 2 columns.

### Desktop: 1024px and above

- Full navigation and phone number.
- 40px page padding.
- 12-column grids and asymmetric alignment.
- Sticky process heading.
- Custom cursor only for fine pointers.

### Wide desktop: 1536px and above

- Cap content width; whitespace should grow outside the grid.
- Do not continue scaling body copy.
- Mega headings may grow slightly but must remain within intentional line breaks.

## 23. Component architecture

Suggested React/Next.js component tree:

```text
app/
  layout.tsx
  page.tsx
components/
  layout/
    SiteFrame.tsx
    Header.tsx
    MobileMenu.tsx
    Footer.tsx
  primitives/
    Button.tsx
    RollingLabel.tsx
    SectionLabel.tsx
    Reveal.tsx
    MediaFrame.tsx
    Marquee.tsx
    ArrowLink.tsx
  sections/
    Hero.tsx
    ProjectRail.tsx
    PositioningStatement.tsx
    ClientProof.tsx
    ProjectGrid.tsx
    Testimonials.tsx
    ServicesIndex.tsx
    Process.tsx
    Stats.tsx
    ConversionCTA.tsx
  overlays/
    ProjectEnquiryDialog.tsx
    CookiePreferences.tsx
```

Component contracts:

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  services: string[];
  image: ImageAsset;
  aspect?: 'portrait' | 'landscape' | 'square';
  featured?: boolean;
};

type Service = {
  number: string;
  title: string;
  description: string;
  href: string;
  media?: ImageAsset;
};

type Testimonial = {
  quote: string;
  person: string;
  company: string;
  portrait?: ImageAsset;
  featureImage: ImageAsset;
};
```

Keep layout variants data-driven. Do not hard-code offset classes from CMS values without a safelist or explicit mapping.

## 24. Accessibility

- Use a visible skip link.
- Maintain one `h1`; use logical heading levels beneath it.
- All text must reach WCAG AA contrast.
- Provide visible focus rings using lime or ink depending on surface.
- Do not rely on cursor effects or hover reveals to communicate essential information.
- Give every portfolio image meaningful alt text; decorative textures use empty alt or `aria-hidden`.
- Label carousel controls and announce slide changes sparingly.
- Pause or disable continuous movement where appropriate.
- Form errors must be associated with fields using `aria-describedby`.
- Dialogs require focus trapping, Escape support, labelled titles, and focus restoration.
- Target size should be at least 44×44px.
- Never animate layout in a way that causes unexpected content reflow.

## 25. Performance requirements

- Serve AVIF/WebP with responsive `srcset`.
- Prioritise only the hero's first visible imagery; lazy-load below-the-fold media.
- Reserve aspect ratios to prevent layout shift.
- Subset and preload only the essential display font weights.
- Use CSS animation for marquees and ambient glows; avoid per-frame React state.
- Use `transform` and `opacity` for animated properties.
- Apply `will-change` only during active animation.
- Defer non-essential cursor and scroll libraries.
- Target Core Web Vitals: LCP under 2.5s, CLS under .1, INP under 200ms on representative mobile hardware.
- Avoid autoplay background video unless it materially improves a featured case study; provide poster and reduced-data fallback.

## 26. Implementation guidance

### Recommended stack

- Next.js with React Server Components for page/content rendering.
- Tailwind CSS for tokens and layout.
- Motion/Framer Motion for stateful reveals and dialogs.
- Lenis only if smooth scrolling is essential; preserve native keyboard and anchor behaviour.
- Embla for an accessible testimonial carousel.
- CMS-driven content for projects, services, testimonials, and metrics.

### Animation boundary

Build the entire page to work without JavaScript first. Add motion as enhancement:

1. semantic content and links;
2. responsive Tailwind layout;
3. accessible interactive states;
4. Intersection Observer reveals;
5. scroll-linked effects;
6. custom cursor and ambient polish last.

### Avoid

- excessive rounded cards around ordinary text;
- gradients across every section;
- more than one accent colour in interface chrome;
- heavy drop shadows;
- bouncy spring motion;
- tiny body copy used merely to appear premium;
- autoplay sliders that make long quotes unreadable;
- cloning Bluestone98's logo, case-study assets, or copy for a different brand.

## 27. Quality assurance checklist

### Visual

- [ ] Desktop page retains the narrow dark outer frame.
- [ ] Display line breaks match the intended art direction.
- [ ] Portfolio media supplies most of the page colour.
- [ ] Section spacing creates alternating compression and release.
- [ ] Lime is reserved for meaningful emphasis.
- [ ] Cards align to the grid despite intentional height variation.

### Interaction

- [ ] Header condenses cleanly and never covers anchored content.
- [ ] Rolling labels work with keyboard focus as well as hover.
- [ ] Marquees loop without a visible seam.
- [ ] Reveals play once and do not flash on hydration.
- [ ] Modal retains field data and restores focus.
- [ ] Touch interactions never depend on hover.

### Responsive

- [ ] No horizontal document overflow at 320px.
- [ ] Hero CTAs wrap without becoming cramped.
- [ ] Horizontal image rails expose the next card as a scroll cue.
- [ ] Sticky sections revert to natural flow on tablet/mobile.
- [ ] Footer and form remain usable with the on-screen keyboard open.

### Accessibility and performance

- [ ] Reduced-motion mode is static and complete.
- [ ] Focus order follows visual order.
- [ ] Images have stable dimensions and correct alt text.
- [ ] No text appears only on image hover.
- [ ] Lighthouse and real-device performance are tested before launch.

## 28. Final design test

The result is successful when it feels established without feeling conservative, expressive without becoming noisy, and highly designed without slowing the buyer down. The page should communicate, in order: **we know what we are doing, here is the proof, here is how we work, and here is the simplest next step.**
