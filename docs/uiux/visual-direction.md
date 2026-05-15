# Visual Direction

Version: v0.2.0
Last Updated: 2026-05-14
Owner: Human project owner
Status: Draft

## Direction

The visual direction is Editorial Minimalism.

The site should feel like a high-signal English personal publication: restrained, readable, analytical, and quietly distinctive.

The selected direction combines:

- Muted Editorial Archive for homepage and listing structure.
- Color Chapters for article-level theme accents.

## Design System Stance

Use one coherent design system across the site.

Do not create separate light and dark styles in the first version. Page-level color variation is allowed, but it must come from the same restrained editorial palette and layout system.

## Color System

The color system should use low-saturation colors across multiple hue families. The site should not be dominated by a single blue, green, purple, beige, or dark palette.

Base tokens:

```text
paper:       #F4F0E8
ink:         #171717
muted-ink:   #6D6860
rule:        #D8D0C3
deep-ink:    #101522
```

Editorial accent candidates:

```text
olive:       #6F6A5C
dust-blue:   #6D7C86
clay:        #9A7664
pale-gold:   #C8B276
sage:        #7B8672
plum-gray:   #756A78
oxide:       #A0644A
slate-teal:  #607D7A
```

Rules:

- Each article may specify one primary `themeColor`.
- Theme colors must be low-saturation and pass readability checks when used with text.
- Theme color should support the content mood, hero image, or subject matter.
- Theme color should be used as accent, section background, rule color, or transition color, not as uncontrolled decoration.
- If no theme color is specified, use the default paper / ink system.

## Typography

Typography should carry most of the design quality.

Direction:

- Use a serious editorial serif for article titles and long-form reading moments.
- Use a precise sans-serif for navigation, metadata, dates, and interface labels.
- Keep letter spacing at `0`.
- Avoid viewport-based font scaling.
- Use generous line height for article body text.

Recommended feel:

- Titles: confident, literary, not oversized marketing type.
- Body: comfortable for long reading.
- Metadata: quiet, compact, and structured.

## Layout

Homepage:

- Begin with a concise about / identity section rather than a traditional navigation bar.
- Latest posts listed in reverse chronological order.
- Large date column on desktop.
- Title and summary column beside the date.
- Optional small badges such as featured status, but no heavy cards.
- No category grouping in the first version.
- External links such as GitHub or email may appear as icon-only controls if they have accessible labels.

Navigation:

- Avoid a traditional navbar.
- Do not use prominent button-like navigation for first-version page structure.
- Keep external icon links quiet, legible, and integrated into the editorial layout.

Article pages:

- Text-first layout.
- Narrow reading column with optional wide media breaks.
- Hero area may use theme color, hero image, or typographic masthead.
- Images, video, and audio should appear as editorial inserts inside the article flow.

## Motion

Motion should preserve continuity, not draw attention to itself.

Preferred motion:

- Homepage post link to article detail should support zoom-in and repositioning where feasible.
- Article theme color should transition smoothly during navigation when supported.
- Page transitions should feel like entering a publication spread, not loading a new app screen.
- Hover states should be subtle: color shift, underline, small date movement, or opacity change.

Rules:

- Respect `prefers-reduced-motion`.
- Avoid parallax-heavy effects.
- Avoid decorative particles, blobs, or animated backgrounds.
- Motion should not delay reading or navigation.

## Responsive Behavior

Desktop:

- Preserve the large date rhythm on the homepage.
- Use generous margins and a strong content column.

Tablet:

- Keep date and article summary aligned when space allows.
- Reduce date size before collapsing layout.

Mobile:

- Place date metadata above or beside the title in a compact form.
- Prioritize title, summary, and tap target clarity.
- Avoid forcing desktop columns onto small screens.

## Media Style

Images:

- Use images as evidence, illustration, or texture within the editorial flow.
- Avoid stock-like decorative hero images.

Video:

- Use embedded videos as supporting context.
- Keep surrounding text strong enough to stand alone.

Audio:

- Audio players should be visually quiet and integrated into the article.
- Podcast pages should foreground transcript readability.

## Accessibility

- Maintain strong text contrast.
- Preserve keyboard focus states.
- Avoid color-only meaning.
- Use stable dimensions for dates, embeds, and media blocks.
- Support reduced motion.

## Aesthetic Example

https://press.stripe.com/
