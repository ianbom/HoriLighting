# HORI LIGHTING — Design System

## Overview

HORI LIGHTING uses a **modern, clean, warm-minimal e-commerce design system** based on the provided desktop product-listing reference. The experience should feel architectural, calm, premium, and product-focused rather than loud, promotional, or dashboard-like.

The visual language is inspired by contemporary lighting and interior brands: generous white space, deep navy typography, warm neutral photography, thin light-gray borders, restrained rounded corners, and almost no decorative color. The products and interior imagery provide most of the visual richness.

### Core visual identity

The design is built around four visual roles:

- **Warm white / white** for the global canvas, header, sidebar, cards, forms, and whitespace.
- **Deep navy** for the logo, hero headline, navigation, section headings, important product text, icons, and strong controls.
- **Soft warm neutrals** for image backgrounds, hero environments, badges, chips, subtle selected states, and secondary surfaces.
- **Cool muted gray-blue** for descriptions, metadata, placeholder text, counts, and low-emphasis UI.

The interface must **not** use a bright brand accent as the dominant action color. Primary actions are dark navy/charcoal, while small highlights use beige, ivory, stone, or warm gray.

### Reference-defining characteristics

- White header with a bold `HORI LIGHTING` wordmark on the left.
- Centered title-case navigation with generous spacing.
- Search, account, and shopping-bag icons on the right.
- Thin, pale divider under the header.
- Persistent left sidebar on desktop.
- Category section above a separate filter section.
- Wide editorial hero banner at the top of the product area.
- Large deep-navy hero headline with understated supporting copy.
- Dark rectangular CTA with a small arrow.
- Four-column product grid on desktop.
- Light product cards with restrained borders and 6–8px radius.
- Large photography-first product imagery.
- Small warm-beige `New` / `Best Seller` badges.
- Wishlist heart in a white circular icon button.
- Product category shown as subtle metadata above the product name.
- Product price in bold dark ink.
- Neutral color swatches below price.
- Sort dropdown and grid/list controls aligned above the products.
- A bottom `Discover More` strip with search and pill-shaped shortcut chips.
- Very limited shadows; separation comes from spacing, borders, photography, and typography.

### Non-negotiable visual rules

1. **Do not reintroduce orange, red, blue, neon, or saturated brand accents** into ordinary UI.
2. **Do not use a dark page theme.** Dark navy is for text, icons, and compact action surfaces only.
3. **Do not use glassmorphism, frosted blur, gradients, glowing effects, or heavy drop shadows.**
4. **Do not make every element pill-shaped.** Pills are reserved for discovery chips, compact tags, and a few utility controls.
5. **Do not make product cards look like SaaS cards.** Product images must dominate.
6. **Do not over-round containers.** Use 6–10px for cards/hero/forms and full rounding only for circular icons or intentional chips.
7. **Keep navigation and product names in title case**, not aggressive all-caps. Uppercase is reserved for small sidebar section labels and utility labels.
8. **Use photography and warm interior composition as the visual accent**, not UI color.
9. **Maintain a calm premium rhythm:** consistent gutters, subtle hierarchy, no clutter.
10. **Desktop collection pages should closely preserve the reference composition:** header → sidebar + hero → collection toolbar → four-column grid → discover-more strip.

---

## Colors

### Core Palette

- **Canvas White** (`{colors.canvas}` — `#FFFFFF`): primary page background, header, sidebar, cards, forms, modal surfaces.
- **Warm Canvas** (`{colors.canvas-warm}` — `#FAF9F7`): optional full-width section background, editorial sections, footer-neutral areas.
- **Deep Navy** (`{colors.ink}` — `#101B38`): logo, primary headings, main navigation, product names, icons, strong UI.
- **Body Blue Gray** (`{colors.body}` — `#536078`): supporting copy, descriptions, filter labels, secondary links.
- **Warm Stone** (`{colors.stone}` — `#EEE8DE`): badges, subtle selected states, warm chips, image accents.

### Brand & Action

HORI LIGHTING intentionally uses a restrained action system.

- **Primary Action** (`{colors.primary}` — `#151C28`): main CTA buttons such as `Shop Collection`, `Add to Cart`, `Checkout`.
- **Primary Hover** (`{colors.primary-hover}` — `#0D1320`): hover state for dark CTAs.
- **Primary Active** (`{colors.primary-active}` — `#080D16`): pressed state.
- **Primary Soft** (`{colors.primary-soft}` — `#F1F2F4`): subtle active background for view toggles, filters, or utility controls.
- **Warm Accent** (`{colors.accent}` — `#EDE2D1`): small status tags, selected editorial chip, `New`, `Best Seller`.
- **Warm Accent Strong** (`{colors.accent-strong}` — `#D7C4A6`): optional selected warm swatch or premium detail; use sparingly.

### Surface

- **Canvas** (`{colors.canvas}` — `#FFFFFF`): default global background.
- **Warm Canvas** (`{colors.canvas-warm}` — `#FAF9F7`): subtle large-area alternate background.
- **Surface** (`{colors.surface}` — `#FFFFFF`): product cards, forms, dropdowns, drawer content.
- **Surface Soft** (`{colors.surface-soft}` — `#F7F6F4`): product image stage, skeletons, subtle cards.
- **Surface Muted** (`{colors.surface-muted}` — `#F1F1EF`): disabled rows, empty states, inactive controls.
- **Surface Warm** (`{colors.surface-warm}` — `#F2EEE8`): warm editorial chips/badges.
- **Surface Dark** (`{colors.surface-dark}` — `#151C28`): compact CTA surfaces only; avoid large dark sections unless explicitly required.

### Borders & Dividers

- **Hairline** (`{colors.hairline}` — `#E2E4E8`): default card, header, sidebar, form, and product-grid borders.
- **Hairline Soft** (`{colors.hairline-soft}` — `#ECEDEF`): low-emphasis separators.
- **Hairline Strong** (`{colors.hairline-strong}` — `#D2D6DC`): focused or more visible structural divider.
- **Border Ink** (`{colors.border-ink}` — `#1C2638`): selected swatches, focused utility control, strong outline button.
- **Divider Warm** (`{colors.divider-warm}` — `#E9E4DC`): optional divider on warm editorial sections.

### Text

- **Ink** (`{colors.ink}` — `#101B38`): page title, hero heading, logo, navigation, product names, primary icons.
- **Ink Soft** (`{colors.ink-soft}` — `#27344E`): secondary strong text, toolbar labels, filter items.
- **Body** (`{colors.body}` — `#536078`): body copy and supporting descriptions.
- **Muted** (`{colors.muted}` — `#7A8496`): product category, counts, helper text, breadcrumbs.
- **Muted Soft** (`{colors.muted-soft}` — `#A2A8B3`): placeholder text, disabled text, old price.
- **On Dark** (`{colors.on-dark}` — `#FFFFFF`): text/icons on dark CTA buttons.
- **Price** (`{colors.price}` — `#0E1524`): regular and prominent product pricing.

### Product Status

Status colors should remain editorial and neutral whenever possible.

- **New**: background `#F0E7D9`, text `#1E2634`.
- **Best Seller**: background `#EEE1CF`, text `#1E2634`.
- **Sale**: background `#ECE7DE`, text `#1E2634`; use old-price strikethrough instead of bright red.
- **In Stock**: text `#334155`.
- **Low Stock**: text `#8B6C3E`; optional soft beige background.
- **Out of Stock**: text `#8D94A1`; disabled gray surface.
- **Success** (`{colors.success}` — `#2F6B4F`): only for transactional success messages.
- **Warning** (`{colors.warning}` — `#8B6C3E`): only for real warnings.
- **Error** (`{colors.error}` — `#B54747`): only for errors, not product promotion.

### Scrim

- **Scrim** (`{colors.scrim}` — `#0B1020` at 42% opacity): menu backdrop, modal backdrop, filter drawer overlay.

### Color Usage Ratio

Recommended overall page balance:

- White / warm white: **78–86%**
- Deep navy / dark ink: **8–14%**
- Gray-blue text and borders: **5–10%**
- Warm beige accents: **2–5%**

Warm beige is a supporting tone, not a CTA color.

---

## Typography

### Font Family

The typography should feel contemporary, architectural, understated, and highly legible.

Recommended stack:

```css
font-family: Inter, "Helvetica Neue", Helvetica, Arial, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

Alternative if available:

```css
font-family: "Plus Jakarta Sans", Inter, "Helvetica Neue", Arial, sans-serif;
```

Rules:

- Use **Inter** or **Plus Jakarta Sans** consistently throughout the product UI.
- Do not mix in condensed sport fonts.
- Do not use decorative serif fonts for the core commerce interface.
- Logo treatment may be a heavier uppercase sans-serif wordmark.
- Navigation should use title case.
- Small section labels such as `SHOP BY CATEGORY`, `FILTER BY`, and `DISCOVER MORE` may use uppercase with moderate tracking.
- Hero typography should feel bold but not aggressive.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---:|---:|---:|---:|---|
| `{typography.hero-xl}` | 54px | 750 | 1.02 | -1.4px | Desktop hero headline |
| `{typography.hero-lg}` | 46px | 750 | 1.05 | -1.0px | Smaller collection hero |
| `{typography.display-xl}` | 36px | 700 | 1.12 | -0.6px | Page title |
| `{typography.display-lg}` | 30px | 700 | 1.15 | -0.4px | Product detail title |
| `{typography.display-md}` | 24px | 700 | 1.2 | -0.2px | Major section heading |
| `{typography.title-lg}` | 22px | 700 | 1.25 | -0.15px | Collection title e.g. `Featured Lighting` |
| `{typography.title-md}` | 16px | 600 | 1.35 | 0 | Product name |
| `{typography.title-sm}` | 14px | 700 | 1.3 | 0.6px | Sidebar section label, footer heading |
| `{typography.nav}` | 14px | 500 | 1.2 | -0.1px | Main navigation |
| `{typography.body-lg}` | 18px | 400 | 1.55 | 0 | Hero supporting copy / long intro |
| `{typography.body-md}` | 16px | 400 | 1.55 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.45 | 0 | Filter labels, form help |
| `{typography.caption}` | 12px | 500 | 1.35 | 0 | Product category, result count |
| `{typography.caption-bold}` | 12px | 650 | 1.3 | 0.2px | Status badge |
| `{typography.price}` | 15px | 700 | 1.35 | -0.1px | Product card price |
| `{typography.price-lg}` | 26px | 700 | 1.25 | -0.3px | Product-detail price |
| `{typography.button-md}` | 14px | 550 | 1.2 | 0 | Main CTA |
| `{typography.button-sm}` | 13px | 500 | 1.2 | 0 | Chips and utility controls |

### Typography Principles

- Primary headings use deep navy, not pure black.
- Product names should be easy to scan and generally fit within one or two lines.
- Product categories are small and muted.
- Prices are bold but visually smaller than product names and hero headings.
- Hero support copy should be lighter and more spacious than card copy.
- Avoid extensive uppercase body text.
- Avoid overly heavy 800–900 weights except possibly the logo.
- Use compact but natural letter spacing; this interface should feel premium, not industrial.

### Product Naming Pattern

Use natural title-case names that fit a contemporary lighting catalog.

```txt
{Collection / Model Name} {Product Type}
```

Examples:

- `Astra Pendant Light`
- `Niko Wall Sconce`
- `Luma Recessed Light`
- `Rhea Table Lamp`
- `Orion Ring Pendant`
- `Milo Floor Lamp`

Do not force product names into uppercase.

---

## Layout

### Spacing System

Use a 4px base system.

- `{spacing.xs}` = 4px
- `{spacing.sm}` = 8px
- `{spacing.md}` = 12px
- `{spacing.base}` = 16px
- `{spacing.lg}` = 20px
- `{spacing.xl}` = 24px
- `{spacing.2xl}` = 32px
- `{spacing.3xl}` = 40px
- `{spacing.section}` = 56px
- `{spacing.hero}` = 72px

Reference proportions:

- Desktop header height: **72px**.
- Desktop sidebar width: **276px**.
- Main content left/right padding: **30–36px**.
- Gap between sidebar and main content: established by sidebar border + main padding, not a floating gutter card.
- Hero top margin: **28px**.
- Hero height: approximately **330–350px** on a 1536px desktop canvas.
- Hero bottom margin to toolbar: **22–26px**.
- Product grid gap: **16–20px**.
- Product card inner content padding: **12–14px**.
- Bottom discover strip height: approximately **86–96px** desktop.

### Desktop Container Strategy

The reference is a full-width retail layout rather than a centered narrow marketing container.

- Header spans full viewport width.
- Sidebar begins directly under header and extends vertically along the left edge.
- Main product area uses the remaining width.
- Content can cap around **1600px–1720px** on ultra-wide screens, but should preserve the sidebar/main proportions.
- Do not put the entire page into one rounded container.

### Main Collection Layout

Desktop structure:

```txt
┌──────────────────────────────────────────────────────────────┐
│ Header                                                       │
├───────────────┬──────────────────────────────────────────────┤
│ Sidebar       │ Main Content                                 │
│               │ ┌──────────────────────────────────────────┐ │
│ Categories    │ │ Hero Banner                              │ │
│               │ └──────────────────────────────────────────┘ │
│ Filters       │ Collection title + sort/view                 │
│               │ Product grid 4 columns                       │
│               │                                              │
├───────────────┴──────────────────────────────────────────────┤
│ Discover More strip                                         │
└──────────────────────────────────────────────────────────────┘
```

### Header Layout

Desktop:

- Left: `HORI LIGHTING` wordmark.
- Center: `Home`, `Lighting`, `Collections`, `Inspiration`, `About`.
- Right: search, account, shopping-bag/cart.
- Cart badge sits on the shopping-bag icon and uses a dark circle with white text.
- Header uses a 1px pale border at the bottom.
- No announcement bar unless explicitly required.
- No black header strip.

Suggested measurements:

- Header horizontal padding: 40–44px desktop.
- Logo width: visually around 220px depending font.
- Nav gap: 34–42px.
- Utility icon gap: 24–28px.
- Icon size: 22–25px.

### Sidebar Layout

Desktop sidebar:

- Width: 276px.
- Background: white.
- Right border: 1px `#E2E4E8`.
- Internal padding: 40px left/right, 32–36px top.
- Sidebar is structurally integrated with the page; do not float it as a rounded card.

Sections:

1. `SHOP BY CATEGORY`
2. Category list
3. Thin divider
4. `FILTER BY`
5. Accordion groups

Category rows:

- Minimum height: 44px.
- Label on left, small chevron on right.
- No filled row background by default.
- Hover may slightly darken text or add a very subtle warm-gray surface.

Filter rows:

- Minimum height: 55px.
- Thin bottom divider.
- Label left, chevron right.
- Open filter expands inline with checkboxes/swatches below.

### Hero Banner Layout

The hero is one of the defining visual elements.

- Wide landscape card.
- Approx ratio: **3.45:1 to 3.7:1** on desktop.
- Radius: **6–8px**.
- Overflow hidden.
- No visible border if the image naturally defines the card; optional 1px warm-gray border.
- Image should depict a calm, contemporary interior using warm whites, taupe, stone, black lamp fixtures, cream textiles, and natural greenery.

Text block:

- Position left-center.
- Content width: approximately 38–44% of hero.
- Left offset: 110–140px depending viewport.
- Headline example:

```txt
Illuminate
Your Space
```

- Supporting copy: `Thoughtful lighting for every moment.`
- CTA: dark rectangular button `Shop Collection` with right arrow.
- CTA height: 44–46px.
- Do not use a giant pill CTA.

Image composition:

- Keep text area visually quiet and bright.
- Concentrate lamp fixtures and furniture more heavily on the right side.
- Allow soft natural window light and warm lamp glow.
- Avoid overly dark rooms or high-contrast cinematic grading.

### Collection Toolbar

Directly below the hero:

Left cluster:

- Collection heading, e.g. `Featured Lighting`.
- Product count immediately to the right in muted small text, e.g. `32 products`.

Right cluster:

- Sort dropdown: `Sort by: Featured`.
- Grid view control.
- List view control.

Rules:

- Toolbar is horizontally aligned.
- Controls use white surface + light-gray border.
- Grid active state uses dark ink, not bright accent.
- List inactive state uses muted gray.
- Dropdown radius: 6–8px.

### Product Grid

- Desktop reference: **4 columns**.
- Wide desktop: remain 4 columns unless cards become excessively wide; 5 columns only on significantly wider screens.
- Tablet: 3 columns.
- Mobile: 2 columns where possible; 1 column under very narrow screens if content becomes cramped.
- Gap: 16–20px.
- Align top edges exactly.

### Product Card Layout

Each card has four visual zones:

1. Product image stage.
2. Optional badge + wishlist overlay.
3. Product text and price.
4. Color swatches.

Card rules:

- Background: white.
- Border: 1px `#E2E4E8`.
- Radius: 6px.
- No default drop shadow.
- Overflow hidden.
- Product image area occupies roughly 68–72% of card height in a collection view.
- Info area uses compact 10–14px padding.

Card should feel light and editorial, not boxed and heavy.

### Discover More Strip

The reference includes a full-width bottom utility strip.

Desktop layout:

- Left fixed label: `DISCOVER MORE`.
- Large search field.
- Horizontal quick chips.

Suggested chips:

- `New Arrivals`
- `Best Sellers`
- `Collections`
- `Pendant Lights`
- `Smart Lighting`

Rules:

- Background white.
- Top border `#E2E4E8`.
- Search input radius: 12–14px.
- Chips use full pill radius.
- Chip border: light gray.
- Chip background: white.
- Hover: warm off-white.
- No saturated chip colors.

This can be a normal page section or sticky utility region only if usability testing supports it.

### Whitespace Philosophy

The page should feel **spacious but not empty**.

- Let the hero and product photography create visual interest.
- Keep card information concise.
- Use white space around the toolbar and products.
- Sidebar remains compact and functional.
- Avoid unnecessary decorative blocks between product rows.
- Avoid oversized marketing sections inside the catalog page.

---

## Radius

HORI LIGHTING uses controlled rounding.

- `{radius.xs}` = 4px — small controls, compact tags.
- `{radius.sm}` = 6px — product cards, buttons, dropdowns.
- `{radius.md}` = 8px — hero, form fields, larger utility controls.
- `{radius.lg}` = 12px — search field, editorial panels.
- `{radius.xl}` = 16px — rare large editorial section only.
- `{radius.full}` = 9999px — circular icon buttons, swatches, discovery chips.

Rules:

- Product cards: 6px.
- Hero: 6–8px.
- CTA buttons: 6px.
- Wishlist button: full circle.
- Discovery chips: full pill.
- Avoid 20–32px radius on ordinary cards.

---

## Elevation

The interface should remain mostly flat.

### Shadow Tokens

- **Flat** (`{shadow.none}`): default product cards, header, sidebar, hero, discover strip.
- **Subtle** (`{shadow.subtle}`): `0 1px 2px rgba(16,27,56,0.05)` — sticky header, focused floating utility.
- **Dropdown** (`{shadow.dropdown}`): `0 10px 28px rgba(16,27,56,0.10)` — dropdown menus, account popovers.
- **Drawer** (`{shadow.drawer}`): `0 16px 48px rgba(16,27,56,0.14)` — cart drawer/filter drawer.
- **Modal** (`{shadow.modal}`): `0 24px 64px rgba(16,27,56,0.18)` — modal overlays.

### Elevation Rules

- Do not apply shadows to every card.
- Product hover uses a slightly stronger border and optional image motion rather than lift.
- Header separation comes from a 1px border.
- Sidebar separation comes from its right border.
- Buttons are solid, not glowing.
- Dropdown/modal elevation is allowed because layering needs to be clear.

---

## Components

### Site Header

**`site-header`**

- Background: `#FFFFFF`.
- Height: 72px desktop.
- Border-bottom: 1px `#E2E4E8`.
- Logo: deep navy, uppercase, heavy weight.
- Navigation: title case, deep navy, medium weight.
- Utility icons: deep navy.
- Cart badge: `#101827` background + white text.
- No blur, no glass effect.

Behavior:

- Can become sticky after scroll.
- Sticky state may use `{shadow.subtle}`.
- Keep background opaque white.

### Wordmark

**`brand-wordmark`**

- Text: `HORI LIGHTING`.
- Color: `#101B38`.
- Weight: 750–800.
- Size: 28–30px desktop.
- Letter spacing: approximately `0.3px`.
- Keep shape simple and architectural.

### Navigation Link

**`nav-link`**

- Font: `{typography.nav}`.
- Color: `#17213A`.
- Case: title case.
- Hover: slightly darker and/or subtle underline.
- Active: weight 600; optional 1–2px underline in deep navy.
- Do not use bright active color.

### Utility Icon Button

**`icon-button`**

- Default icon: `#101B38`.
- Size: 40–42px target.
- Visual icon: 22–24px.
- Background: transparent.
- Radius: full only when a background state is shown.
- Hover: `#F5F5F3` background.
- Active: `#ECEEF1` background.

Used for:

- Search
- Account
- Cart
- Wishlist
- View toggle
- Close

### Category Sidebar

**`category-sidebar`**

- Width: 276px.
- Background: white.
- Right border: 1px `#E2E4E8`.
- Section label: uppercase 13–14px, 700, deep navy.
- Category row: 14px, `#4C5C77`.
- Row chevron: dark navy, 16px.
- Divider after category section.

Categories based on the reference:

- Indoor Lighting
- Outdoor Lighting
- Decorative Lighting
- Smart Lighting
- Accessories

### Filter Sidebar

**`filter-sidebar`**

Filter groups:

- Product Type
- Room
- Style
- Material
- Color
- Price

Visual rules:

- Heading: `FILTER BY`, uppercase, 13–14px, 700.
- Group row: 14px, `#536078`.
- Chevron: `#1C2638`.
- Divider: `#E5E7EA`.
- No large filled background.
- Expanded content should align with row label and remain calm.

### Filter Checkbox

**`filter-checkbox`**

- Size: 18px.
- Border: `#C9CDD4`.
- Radius: 4px.
- Checked background: `#17213A`.
- Check icon: white.
- Label: `#536078`.
- Count: `#949BA7`.

### Color Filter Swatch

**`filter-color-swatch`**

- Outer size: 24–28px.
- Inner fill: product color.
- Shape: circle.
- Selected: 1.5–2px deep-navy outer ring with 2px white gap.
- Do not use bright UI accent ring.

### Hero Banner

**`collection-hero`**

- Radius: 6–8px.
- Min height desktop: 330px.
- Background: photographic.
- Text color: deep navy.
- Supporting copy: blue-gray.
- CTA: dark charcoal/navy.

Content example:

```txt
Illuminate
Your Space

Thoughtful lighting for every moment.

[ Shop Collection  → ]
```

### Primary Button

**`button-primary`**

- Background: `#151C28`.
- Hover: `#0D1320`.
- Active: `#080D16`.
- Text: white.
- Height: 44–48px.
- Horizontal padding: 22–26px.
- Radius: 6px.
- Font: 14px / 550.
- Icon gap: 10–12px.

Use for:

- Shop Collection
- Add to Cart
- Checkout
- Buy Now
- Apply Filters
- Save

### Secondary Button

**`button-secondary`**

- Background: white.
- Border: 1px `#CCD1D8`.
- Text: `#1C2638`.
- Hover background: `#F7F7F5`.
- Height: 44–48px.
- Radius: 6px.

Use for lower-priority actions.

### Text / Outline Button

**`button-ghost`**

- Background: transparent.
- Text: `#536078`.
- Hover text: `#101B38`.
- Hover background: `#F6F6F4`.
- Radius: 6px.

### Collection Toolbar

**`collection-toolbar`**

- Display flex, align center, justify between.
- Left: section heading + result count.
- Right: sort + view.
- Padding: 0 or minimal; do not wrap in a large card.
- Bottom margin: 18–22px.

### Sort Dropdown

**`sort-select`**

- Background: white.
- Border: 1px `#DDE0E5`.
- Text: `#5B667A`.
- Height: 44px.
- Radius: 7px.
- Horizontal padding: 16px.
- Chevron: deep navy.

### View Toggle

**`view-toggle`**

- Two adjacent square controls.
- Each: 44px height.
- Border: `#DDE0E5`.
- Active grid icon: `#0C111B`.
- Inactive list icon: `#8E96A3`.
- Active background can stay white or use `#F6F6F4`.
- Radius on group edges: 7px.

### Product Card

**`product-card`**

- Background: `#FFFFFF`.
- Border: 1px `#E1E3E7`.
- Radius: 6px.
- No default shadow.
- Image stage at top.
- Content at bottom.

Hover:

- Border becomes `#CCD1D8`.
- Image may scale to 1.015–1.025 or crossfade to a secondary image.
- Wishlist can slightly darken.
- Do not lift card dramatically.

### Product Image Stage

**`product-image-stage`**

- Background: `#F4F3F1` / warm near-white.
- Aspect ratio: approximately 1:1.
- Overflow hidden.
- Product imagery can be:
  - clean isolated fixture photography,
  - architectural wall/ceiling installation,
  - tasteful lifestyle crop.
- Keep all cards visually coherent through neutral lighting and warm grading.

Image rendering:

- Isolated lamp: `object-fit: contain` with 18–28px breathing room.
- Lifestyle image: `object-fit: cover`.
- Preserve consistent visual scale across the row.

### Product Badge

**`product-badge`**

- Examples: `New`, `Best Seller`, `Sale`.
- Position: top-left of image stage.
- Background: `#EFE4D4`.
- Text: `#222A38`.
- Font: 11–12px, 600.
- Padding: 5px 10px.
- Radius: 6px.
- Do not use bright red/orange.

### Wishlist Button

**`wishlist-button`**

- Position: top-right of image stage.
- Size: 36–38px.
- Background: rgba(255,255,255,0.92).
- Border: optional `1px solid rgba(221,224,229,0.8)`.
- Icon: outline heart in `#1C2638`.
- Radius: full.
- Shadow: none or extremely subtle.
- Hover: white background + slightly darker icon.
- Selected: deep-navy filled heart; keep background neutral.

### Product Meta

**`product-category`**

- Font: 12px / 500.
- Color: `#7A8496`.
- Margin-bottom: 3–5px.

Examples:

- Pendant Lights
- Wall Lighting
- Ceiling Lights
- Table Lamps

### Product Title

**`product-title`**

- Font: 15–16px / 600.
- Color: `#101B38`.
- Line height: 1.35.
- Title case.
- Maximum 2 lines.

### Product Price

**`product-price`**

- Current price: 15px / 700 / `#0E1524`.
- Old price: 13px / 400 / `#858D99` / strikethrough.
- Price row gap: 8–10px.
- Do not highlight sale price in red/orange.

### Product Swatches

**`product-swatches`**

- Size: 14–16px.
- Circle.
- Gap: 7px.
- Neutral tones should match real fixture finishes:
  - matte black,
  - warm white,
  - brushed nickel,
  - brass,
  - stone,
  - taupe.
- Add a 1px border to light swatches.
- Selected swatch may use a subtle 1px navy outer ring.

### Quick Add

**`quick-add`**

Optional; do not make it visible by default if it crowds the reference-style card.

When used:

- Reveal on desktop hover below image or as subtle overlay.
- Background: `#151C28`.
- Text: white.
- Height: 40–44px.
- Radius: 5px.
- No bright accent.

### Discovery Search

**`discover-search`**

- Background: white.
- Border: 1px `#DDE0E5`.
- Height: 48–50px.
- Radius: 13px.
- Search icon left.
- Placeholder: `Search products, collections, or inspiration`.
- Text/placeholder in gray-blue.
- Focus border: `#AFB6C1`; optional subtle ring.

### Discovery Chip

**`discover-chip`**

- Background: white.
- Border: 1px `#DDE0E5`.
- Text: `#344158`.
- Height: 46–48px.
- Padding: 0 24px.
- Radius: full.
- Hover: `#F6F5F2`.
- Active: `#EEEAE3` with `#1C2638` text.

### Inputs

**`text-input`**

- Background: white.
- Border: 1px `#D6DAE0`.
- Text: `#152039`.
- Placeholder: `#939BA8`.
- Height: 48px.
- Radius: 8px.
- Focus border: `#6B7587`.
- Focus ring: `0 0 0 3px rgba(16,27,56,0.07)`.

**`select-input`** uses the same visual system.

### Quantity Stepper

**`quantity-stepper`**

- Border: 1px `#DDE0E5`.
- Background: white.
- Radius: 7px.
- Height: 44–46px.
- Minus/plus icon: deep navy.
- Center quantity: 14px / 600.

### Product Detail Gallery

**`product-gallery`**

- Main image uses warm neutral stage.
- Radius: 8px.
- Thumbnail gap: 10–12px.
- Thumbnail border: `#E1E3E7`.
- Selected thumbnail border: 1.5–2px `#17213A`.
- No heavy thumbnail shadow.
- Zoom icon uses circular white utility control.

### Product Purchase Panel

**`product-purchase-panel`**

- Background: white.
- Product category: muted gray-blue.
- Title: deep navy.
- Price: near-black/navy.
- Description: body gray-blue.
- Finish/material selectors: neutral chips or image swatches.
- Add to Cart: dark primary button.
- Secondary action: white outlined button.
- Delivery / warranty notes separated by thin borders.

### Variant Selector

**`variant-selector`**

- Background: white.
- Border: `#D8DCE2`.
- Text: `#38465E`.
- Radius: 6–8px.
- Selected border: 1.5–2px `#17213A`.
- Selected background: `#F7F7F5`.
- Disabled: gray, reduced opacity, optional line-through.

### Cart Drawer

**`cart-drawer`**

- Background: white.
- Width desktop: 420–460px.
- Header: deep navy.
- Item dividers: `#E5E7EA`.
- Checkout button: dark primary.
- Product thumbnail: warm neutral stage.
- Price: near-black.
- Remove action: muted gray-blue with underline on hover.

### Checkout

**`checkout-layout`**

- Overall background: `#FAF9F7` or white.
- Form surface: white.
- Border: `#E1E3E7`.
- Radius: 8px.
- Form labels: deep navy / ink-soft.
- Main action: dark primary.
- Order summary can use `#F7F6F4` surface.
- Avoid strong promotional color during checkout.

### Rich Product Description

**`rich-description`**

- Background: white.
- Text: `#536078`.
- Max content width: 760–880px.
- Body: 16px / 1.7.
- H2: 26px / 700 / deep navy.
- H3: 20px / 650 / deep navy.
- Paragraph spacing: 14–18px.
- Table border: `#E1E3E7`.
- Table header: `#F5F5F3`.
- Link: deep navy + underline, not bright accent.
- Strong: deep navy / 650.

Recommended content sections:

- Product Overview
- Design & Materials
- Dimensions
- Light Source / Bulb
- Color Temperature
- Installation
- Care Instructions
- Warranty & Returns

### Footer

The reference does not show a dark footer. The default footer should continue the same warm-minimal system.

**`site-footer`**

- Background: `#F7F5F1` or `#FAF9F7`.
- Top border: 1px `#E4E1DB`.
- Primary text: deep navy.
- Secondary text: gray-blue.
- Link hover: deep navy + underline.
- Newsletter input: white with gray border.
- Newsletter CTA: dark primary.
- Avoid a large pure-black footer unless a campaign specifically calls for it.

Suggested columns:

- Lighting
- Customer Care
- About HORI
- Inspiration
- Newsletter

---

## Responsive Behavior

| Name | Width | Key Changes |
|---|---:|---|
| Small Mobile | < 480px | Single-column hero/content, 1–2 column products depending card width, filter drawer, compact header. |
| Mobile | 480–767px | Header becomes logo + utilities + menu button; sidebar becomes drawer; 2-column products; discover chips horizontally scroll. |
| Tablet | 768–1023px | Sidebar hidden behind filter button; 2–3 column products; hero copy scales down; nav may collapse. |
| Desktop | 1024–1439px | Full header, persistent sidebar, 3–4 column products depending available width. |
| Reference Desktop | 1440–1720px | Persistent 276px sidebar, wide hero, 4-column products, full discover strip. |
| Ultra Wide | > 1720px | Preserve proportions; cap content if cards become too wide; optional 5th column only if visually balanced. |

### Mobile Header

- Height: 60–64px.
- Logo left or centered depending space.
- Search and cart remain visible.
- Account can move into menu.
- Navigation becomes drawer.
- Use white background and thin bottom border.

### Mobile Sidebar / Filter Drawer

- Full-height right or left drawer.
- White surface.
- Categories and filters use the same hierarchy as desktop.
- Sticky drawer footer can contain `Apply Filters` dark button and `Clear` secondary action.

### Mobile Hero

- Ratio changes to approximately 4:5, 3:4, or 1:1 depending art direction.
- Keep a quiet area for text.
- Headline: 36–42px.
- CTA remains rectangular dark button.
- Avoid placing text directly over busy lamps.

### Mobile Product Grid

- Default: 2 columns for ≥ 390px widths.
- Gap: 10–12px.
- Product title: 14px.
- Image stage remains square.
- Wishlist target remains at least 36px.
- On very narrow screens (< 360px), use 1 column if readability suffers.

### Mobile Discover More

- Label occupies full row.
- Search full width below label.
- Chips horizontally scroll with no wrapping or wrap to two clean lines.

### Touch Targets

- Primary CTA: minimum 44px high; prefer 48px.
- Header icons: 40×40px target.
- Filter rows: minimum 48px.
- Chips: minimum 42px high.
- Wishlist: minimum 36×36px visual, 40×40px clickable area.
- Swatches: minimum 28×28px clickable area even if visual dot is 14–16px.

---

## Interaction States

### Hover

- Navigation: darker text and optional subtle underline.
- Category/filter row: text deepens; optional `#FAFAF8` background.
- Product card: border darkens slightly.
- Product image: subtle scale or secondary-image crossfade.
- Wishlist: background becomes solid white, icon darkens.
- Buttons: darken one step.
- Discovery chip: warm off-white background.
- Footer link: underline.

### Active

- Active navigation: medium-bold deep navy + optional underline.
- Active grid/list control: dark icon + subtle light background.
- Selected filter: dark checkmark or dark selected border.
- Selected swatch: deep-navy outer ring.
- Selected discovery chip: warm neutral surface.

### Focus

Keyboard focus must be visible without introducing bright brand colors.

- Inputs: gray-navy border + subtle navy translucent ring.
- Buttons: 2px outer ring using `rgba(16,27,56,0.25)`.
- Links: underline + visible focus outline.
- Icon buttons: subtle `#F1F2F4` background + outline.
- Modal/drawer focus must be trapped.

### Disabled

- Background: `#F1F2F3`.
- Text: `#A0A6B0`.
- Border: `#E3E5E8`.
- Cursor: not-allowed.
- Do not use opacity so low that content becomes unreadable.

### Loading

- Skeleton base: `#F0F0EE`.
- Skeleton highlight: `#F7F7F5`.
- No colorful shimmer.
- Preserve card dimensions to prevent layout shift.

### Empty States

Keep empty states restrained.

Examples:

- `No lighting products found.`
- Supporting text in muted blue-gray.
- Primary recovery action: dark button.
- Secondary action: text/outline button.
- Optional simple line icon; avoid large cartoon illustrations unless the project explicitly asks for them.

---

## Imagery

### Overall Photography Direction

Photography is critical to this design system.

Use:

- modern residential interiors,
- architectural lighting installations,
- warm daylight,
- soft cream/taupe walls,
- stone, linen, ceramic, brushed metal, black metal,
- subtle plants and natural materials,
- uncluttered styling,
- restrained Scandinavian / contemporary / Japandi influence.

Avoid:

- saturated colored walls,
- neon lighting,
- dark nightclub scenes,
- overly luxurious gold-heavy interiors,
- busy catalog collages,
- inconsistent white balance,
- dramatic HDR.

### Hero Photography

Hero should visually resemble the reference:

- bright warm interior,
- large quiet negative space behind headline,
- black pendant lamp,
- circular/ring pendant,
- table lamp with cream shade,
- warm sunlight,
- decor concentrated toward right side,
- muted beige/stone/cream palette.

### Product Photography

Product grid can mix isolated and installation images, but maintain consistency.

Recommended rules:

- Neutral warm background.
- Soft shadow, never harsh studio shadow.
- Black fixtures should retain visible detail.
- White fixtures should remain distinguishable from background.
- Lifestyle crops should remain calm and minimal.
- Keep consistent image horizon, temperature, and contrast across a collection.

### Image Ratios

| Use | Ratio |
|---|---|
| Product card | 1:1 |
| Product detail main image | 1:1 or 4:5 |
| Collection hero desktop | ~3.5:1 |
| Collection hero tablet | 16:6 to 16:7 |
| Mobile hero | 4:5 or 3:4 |
| Category tile | 4:3 |
| Inspiration editorial | 3:2 / 4:3 |
| Room-set banner | 16:7 |

### Image Cropping Rules

- For isolated products: contain, center, generous padding.
- For interior images: cover, preserve fixture as focal point.
- Never crop off the primary lamp body unless art-directed intentionally.
- Ensure hero text has sufficient contrast without adding a dark overlay where possible.

---

## Iconography

Use clean outline icons with consistent stroke weight.

Recommended style:

- 1.7–2px stroke.
- Rounded joins/caps where library supports it.
- Deep navy default.
- Minimal visual detail.

Core icons:

- Search
- User / account
- Shopping bag
- Heart
- Chevron down/right
- Grid
- List
- Arrow right
- Plus / minus
- Menu
- Close
- Filter

Do not mix outline and filled icon families randomly.

---

## Page-Level Guidelines

### Collection / Product Listing Page

This is the primary reference page and should match the supplied design most closely.

Required order:

1. Header
2. Left category/filter sidebar
3. Main hero banner
4. Collection toolbar
5. Four-column product grid
6. Discover More strip
7. Optional warm-minimal footer below the main content

Key rules:

- White-dominant canvas.
- 276px sidebar.
- Warm photographic hero.
- Deep navy headings.
- Dark CTA.
- 4 product columns at reference desktop size.
- Beige status tags.
- Circular wishlist controls.
- Subtle borders only.
- No saturated accent.

### Homepage

Homepage should extend the same language rather than turning into a separate visual style.

Recommended sections:

- Header
- Editorial hero
- Shop by Category
- Featured Lighting
- New Arrivals
- Shop by Room
- Designer / Collection spotlight
- Inspiration / editorial room sets
- Brand story
- Service benefits
- Newsletter
- Warm-neutral footer

Design rules:

- Mix white and warm-white sections.
- Use full-width interior photography sparingly.
- CTAs remain dark navy/charcoal.
- Category tiles use photography with clean captions.
- Avoid multiple dark sections stacked together.

### Category Landing Page

Examples: Indoor Lighting, Outdoor Lighting, Decorative Lighting.

- Use a wide room-set hero.
- Include short category description.
- Show subcategory shortcuts.
- Transition into the standard catalog toolbar/grid.
- Maintain the same sidebar/filter behavior when product browsing begins.

### Product Detail Page

Prioritize:

- Large warm-neutral product gallery.
- Small muted category label.
- Deep navy product title.
- Bold near-black price.
- Finish/color swatches.
- Quantity control.
- Dark `Add to Cart` button.
- Secondary outline action if needed.
- Delivery / installation / warranty information.
- Rich product details with technical specs.
- Related lighting products.
- Inspiration room-set section.

Do not use orange sale pricing or bright promotional CTA colors.

### Inspiration / Editorial Page

This page may be more photographic but should keep the same typography and palette.

- Large interior images.
- Deep navy headings.
- Warm editorial backgrounds.
- Thin separators.
- Minimal cards.
- Use text links and dark buttons.
- Allow more white space than the catalog page.

### Cart

- White canvas.
- Product image thumbnails on warm-neutral stage.
- Dark navy item titles.
- Clear price hierarchy.
- Thin dividers.
- Dark checkout CTA.
- Minimal promotional distractions.

### Checkout

- White / warm-white background.
- Two-column desktop: form + order summary.
- Calm typography.
- Gray borders.
- Dark primary CTA.
- Semantic colors used only for real validation/status.

### Account Pages

- White canvas.
- Sidebar or tabs use text-first navigation.
- Cards use subtle borders and 8px radius.
- No dashboard-style colorful widgets.
- Order history remains table/list based.

---

## Motion

Motion should feel quiet and premium.

### Timing

- Micro interactions: 140–180ms.
- Dropdowns: 160–220ms.
- Drawer: 220–280ms.
- Modal: 180–240ms.
- Product image crossfade: 220–300ms.

### Easing

Recommended:

```css
cubic-bezier(0.2, 0.8, 0.2, 1)
```

### Rules

- No bouncing buttons.
- No parallax by default.
- No exaggerated card lift.
- Product image zoom should stay below ~1.03.
- Respect `prefers-reduced-motion`.

---

## Tailwind Token Recommendation

```ts
colors: {
  canvas: "#FFFFFF",
  "canvas-warm": "#FAF9F7",

  ink: "#101B38",
  "ink-soft": "#27344E",
  body: "#536078",
  muted: "#7A8496",
  "muted-soft": "#A2A8B3",

  primary: "#151C28",
  "primary-hover": "#0D1320",
  "primary-active": "#080D16",
  "primary-soft": "#F1F2F4",

  accent: "#EDE2D1",
  "accent-strong": "#D7C4A6",
  stone: "#EEE8DE",

  surface: "#FFFFFF",
  "surface-soft": "#F7F6F4",
  "surface-muted": "#F1F1EF",
  "surface-warm": "#F2EEE8",
  "surface-dark": "#151C28",

  hairline: "#E2E4E8",
  "hairline-soft": "#ECEDEF",
  "hairline-strong": "#D2D6DC",
  "border-ink": "#1C2638",
  "divider-warm": "#E9E4DC",

  price: "#0E1524",
  success: "#2F6B4F",
  warning: "#8B6C3E",
  error: "#B54747"
}
```

Recommended radius extension:

```ts
borderRadius: {
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  full: "9999px"
}
```

Recommended shadow extension:

```ts
boxShadow: {
  subtle: "0 1px 2px rgba(16,27,56,0.05)",
  dropdown: "0 10px 28px rgba(16,27,56,0.10)",
  drawer: "0 16px 48px rgba(16,27,56,0.14)",
  modal: "0 24px 64px rgba(16,27,56,0.18)"
}
```

Recommended typography utility notes:

- Hero: `font-bold tracking-[-0.03em] text-ink`.
- Section title: `font-semibold text-ink`.
- Product title: `font-semibold text-ink`.
- Product category: `text-xs font-medium text-muted`.
- Price: `font-bold text-price`.
- Sidebar section label: `text-sm font-bold uppercase tracking-[0.04em] text-ink`.
- Nav: `text-sm font-medium text-ink`.
- Primary button: `bg-primary text-white hover:bg-primary-hover`.

### Tailwind Layout Reference

```txt
header: h-[72px] border-b border-hairline bg-white
sidebar: w-[276px] border-r border-hairline bg-white
main: px-8 pt-7 pb-8
hero: rounded-md overflow-hidden min-h-[330px]
product-grid: grid grid-cols-4 gap-4
product-card: rounded-sm border border-hairline bg-white overflow-hidden
image-stage: aspect-square bg-surface-soft
wishlist: size-9 rounded-full bg-white/95
discover-strip: border-t border-hairline bg-white
```

Do not mechanically apply `rounded-xl`/`shadow-lg` to all components.

---

## CSS Variable Recommendation

```css
:root {
  --canvas: #ffffff;
  --canvas-warm: #faf9f7;
  --ink: #101b38;
  --ink-soft: #27344e;
  --body: #536078;
  --muted: #7a8496;
  --muted-soft: #a2a8b3;

  --primary: #151c28;
  --primary-hover: #0d1320;
  --primary-active: #080d16;
  --primary-soft: #f1f2f4;

  --accent: #ede2d1;
  --accent-strong: #d7c4a6;

  --surface: #ffffff;
  --surface-soft: #f7f6f4;
  --surface-muted: #f1f1ef;
  --surface-warm: #f2eee8;

  --hairline: #e2e4e8;
  --hairline-soft: #ecedef;
  --hairline-strong: #d2d6dc;

  --success: #2f6b4f;
  --warning: #8b6c3e;
  --error: #b54747;
}
```

---

## Accessibility

- Deep navy `#101B38` on white is the default high-contrast text pairing.
- Body gray-blue must maintain readable contrast for normal-size text; do not make metadata too pale.
- Do not communicate `New`, `Sale`, selected finish, or stock state through color alone; include text, shape, icon, or border state.
- Wishlist needs an accessible `aria-label` such as `Add Astra Pendant Light to wishlist`.
- Search/account/cart icons need accessible labels.
- Cart badge should expose the item count to assistive technology.
- Filter accordions must expose expanded/collapsed state.
- Keyboard users must be able to reach all category links, filters, sort controls, wishlist buttons, product links, and discovery chips.
- Focus states must remain visible against white backgrounds.
- Hero text must maintain contrast against photography; art-direct the image before resorting to overlays.
- Do not place essential text inside images.
- Product finish swatches need text labels in tooltips or accessible names.
- Minimum body text: 14px for utility UI; prefer 16px for long-form content.

---

## Implementation Priorities

When implementing or redesigning existing pages, apply these priorities in order:

1. Replace the previous high-contrast sporty palette with the HORI deep-navy + warm-neutral palette.
2. Replace aggressive uppercase navigation with title-case minimal navigation.
3. Remove bright promotional accent colors from CTAs, badges, sale prices, and active states.
4. Replace sharp dense catalog styling with warmer spacing, 6–8px corners, and photography-led cards.
5. Build the desktop collection page around the persistent left sidebar and wide hero.
6. Standardize product cards to the reference hierarchy: image → category → title → price → swatches.
7. Use warm beige badges and circular wishlist buttons.
8. Add the `Discover More` search/chip strip as a defining secondary navigation pattern.
9. Keep shadows minimal and rely on borders/spacing.
10. Extend the same visual system to product detail, cart, checkout, account, and editorial pages.

---

## Anti-Patterns

Do **not** introduce the following unless the user explicitly requests a different campaign style:

- Bright orange primary buttons.
- Orange sale prices.
- Orange navigation active states.
- Black full-page footer as the default.
- Heavy all-caps navigation.
- Motorsport / outdoor performance visual language.
- Square zero-radius catalog cards everywhere.
- Thick black borders.
- Dense black dividers.
- Strong card shadows.
- Gradient CTA buttons.
- Blue SaaS-style primary colors.
- Purple/pink accent gradients.
- Glass cards.
- Large floating chat buttons in bright colors.
- Excessive badges.
- Oversized pills for every control.
- Cartoon product illustrations.
- Busy patterned backgrounds.
- Dark-mode catalog pages.

---

## Reference Screen Specification

For a desktop viewport close to **1536 × 960**, target the following visual composition:

- Header: ~72px high.
- Sidebar: ~276px wide.
- Main content starts ~30px from sidebar border.
- Hero begins ~28px below header.
- Hero width fills main content minus ~38px right margin.
- Hero height ~334px.
- Hero headline begins around 11–13% into the hero width.
- Collection toolbar sits ~22px below hero.
- Product grid starts directly below toolbar.
- Four cards fill one row.
- Product images are approximately square.
- Sidebar extends through product area.
- Discover More strip spans full viewport width beneath the main page region.

The goal is not pixel-perfect copying of one screenshot at every breakpoint, but **preserving the same hierarchy, density, proportion, and calm premium character**.

---

## Known Gaps

- The provided image is a static desktop reference; hover, focus, mobile, modal, and checkout states are extrapolated from its visual language.
- Exact colors are visually approximated from the reference and should be calibrated against the actual implementation/screenshots if strict visual matching is required.
- The logo is represented as a typographic wordmark; if an official HORI LIGHTING logo asset exists, it should replace the text while preserving the same scale and alignment.
- Product photography needs consistent art direction; inconsistent source images can break the calm catalog appearance even when UI tokens are correct.
- The reference only shows the collection/listing experience, so footer, checkout, cart, account, and detail-page rules are derived extensions of the same visual system.

---

## Source Notes

Reference inputs:

- Uploaded HORI LIGHTING desktop product-listing image.
- Visual characteristics extracted from the reference:
  - white-dominant page,
  - deep navy typography,
  - warm neutral photography,
  - left category/filter sidebar,
  - wide editorial hero,
  - dark charcoal CTA,
  - four-column lighting product grid,
  - warm beige product badges,
  - circular wishlist controls,
  - subtle gray borders,
  - bottom discovery search and chip strip,
  - minimal shadows and restrained radius.

This document replaces the previous sporty black/orange commerce direction with the HORI LIGHTING warm-minimal architectural lighting direction.
