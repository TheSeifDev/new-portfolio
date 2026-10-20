# Japanese Minimalist Design System & Token Specification

Sampled directly from **Image 1** (Reference Portfolio Single Source of Truth) and **Image 3** (Brand Logo).

---

## 1. Color Palette (Sampled True HEX Values)

| Semantic Token | Variable | Sampled HEX / Value | Role / Usage |
|---|---|---|---|
| **Background** | `--background` | `#F9F6F0` (also `#FAF8F5`) | Warm off-white washi paper tone |
| **Surface / Card** | `--card` | `rgba(255, 255, 255, 0.75)` | Translucent white card surface with backdrop blur |
| **Foreground** | `--foreground` | `#12161F` | Deep sumi ink black for primary headings |
| **Muted Text** | `--muted-foreground`| `#6B7280` / `#8C929D` | Balanced neutral for body copy & subtitles |
| **Primary Gold** | `--gold` / `--primary` | `#C69441` | Radiant gold from sun and logo emblem |
| **Gold Light** | `--gold-light` | `#D8B273` | Shimmer highlights and floral branch accents |
| **Gold Dark** | `--gold-dark` | `#93682B` | Base shadows and deep metallic borders |
| **Gold Gradient** | `--gold-gradient` | `linear-gradient(180deg, #D4AF77 0%, #C59A5A 32%, #BA8D54 55%, #9A6E32 82%, #8D6328 100%)` | Exact vertical gradient for "LET'S BUILD →" button |
| **Navy Indigo** | `--navy` | `#091B2E` | Deep indigo/navy from the logo brush stroke |
| **Hairline Border** | `--hairline` / `--border`| `rgba(197, 148, 65, 0.28)` / `#E2D6C5` | Subtle 1px gold hairline borders |
| **Accent Red** | `--hanko` / `--destructive`| `#DE5B35` | Traditional cinnabar Hanko seal stamp |

---

## 2. Typography

All fonts loaded via `next/font/google`:

- **Display Serif Heading**: `Cinzel` (`var(--font-cinzel)`)
  - **Weights**: 600, 700
  - **Transform**: `uppercase`
  - **Letter Spacing**: `tracking-[0.08em]` to `tracking-[0.14em]`
  - **Usage**: Main headline (*"I BUILD DIGITAL EXPERIENCES THAT MATTER."*), section titles (*"MY TECH STACK"*, *"FEATURED PROJECTS"*, *"MY EXPERTISE"*, etc.)
- **Navigation & UI Labels**: `Inter` (`var(--font-inter)`)
  - **Weights**: 400, 500, 600
  - **Transform**: `uppercase`
  - **Letter Spacing**: `tracking-[0.14em]` to `tracking-[0.20em]`
  - **Font Size**: `text-[11px]` - `text-xs`
  - **Usage**: Navbar links (*"HOME"*, *"ABOUT"*, *"SKILLS"*), buttons (*"LET'S BUILD →"*), stat counters, tech badges
- **Traditional Japanese Typography**: `Noto Serif JP` (`var(--font-noto-serif-jp)`)
  - **Weights**: 400, 500, 700
  - **Writing Mode**: `writing-mode: vertical-rl; text-orientation: upright;`
  - **Letter Spacing**: `0.20em` - `0.25em`
  - **Usage**: Vertical margin slogan (*"コードで未来を創る"*), subtitle (*"私のスキルセット"*), Kimono inscription (*"改善"*), footer kanji (*"道"* / *"THE PATH OF CREATION"*)

---

## 3. Shapes & Clipping Paths

- **Hexagon (`.clip-hex`)**:
  - `clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`
  - Applied to the central navbar logo badge, tech stack icon badges, and the central `集中` (Focus) expertise node.
- **Chamfered Ends (`.clip-chamfer-left`, `.clip-chamfer-right`)**:
  - Pointed diamond ends on the outer navbar container with 1px gold hairline border and decorative diamond pins (`w-1.5 h-1.5 rotate-45`).

---

## 4. Glow Tokens & GSAP Motion Tokens

### CSS Glow Tokens
- **Soft Glow**: `box-shadow: 0 0 15px rgba(198, 148, 65, 0.25)`
- **Medium Glow**: `box-shadow: 0 0 25px rgba(198, 148, 65, 0.45)`
- **Intense Glow**: `box-shadow: 0 0 45px rgba(198, 148, 65, 0.65)`
- **Drop-Shadow Glow**: `filter: drop-shadow(0 0 12px rgba(198, 148, 65, 0.4))`

### GSAP Motion Tokens (`GLOW_MOTION_TOKENS`)
- **Duration**: `2.4s`
- **Easing**: `"sine.inOut"`
- **Min Opacity**: `0.28`
- **Max Opacity**: `0.72`
- **Min Blur**: `8px`
- **Max Blur**: `24px`
- **Repeat**: `-1` (infinite), `yoyo: true`
- **Helper Hook**: `useGlow` in `@/hooks/use-glow`

---

## 5. Shadcn Button Variants (`components/ui/button.tsx`)

1. **`gold` (Filled CTA)**:
   - Matches *"LET'S BUILD →"* in navbar and footer.
   - Background: `bg-[linear-gradient(180deg,#D4AF77_0%,#C59A5A_32%,#BA8D54_55%,#9A6E32_82%,#8D6328_100%)]`
   - Border: `border border-[#E9D7B7]/40`
   - Shadow: `shadow-[0_2px_10px_rgba(154,110,50,0.28)]`
   - Text: `#FBF9F5`, uppercase, `tracking-[0.14em]`
   - Hover: `brightness-105 shadow-[0_4px_16px_rgba(154,110,50,0.42)]`
2. **`outlineGold` (Outlined Button)**:
   - Matches *"SEE MY WORK →"* in hero section.
   - Border: `border border-[#C69441]/60`
   - Background: `bg-white/40 backdrop-blur-[2px]`
   - Text: `#272E3B`
   - Hover: `border-[#C69441] bg-[#C69441]/10 text-[#12161F]`
3. **`ghostText` (Text Ghost)**:
   - Matches *"DOWNLOAD CV ↓"* in hero section.
   - Border: `border-none`
   - Text: `#272E3B`, `tracking-[0.14em]`
   - Hover: `text-gold underline underline-offset-4`
