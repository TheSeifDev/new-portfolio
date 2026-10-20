"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useGlow } from "@/hooks/use-glow"
import { COLOR_TOKENS, GLOW_MOTION_TOKENS } from "@/lib/tokens"
import { ArrowRight, Download, Sparkles, Hexagon } from "lucide-react"

export default function DesignSystemPage() {
  // GSAP animated glow hooks for interactive demo
  const softGlowRef = useGlow<HTMLDivElement>({
    type: "box",
    minBlur: 8,
    maxBlur: 22,
    minOpacity: 0.25,
    maxOpacity: 0.65,
  })

  const intenseGlowRef = useGlow<HTMLDivElement>({
    type: "box",
    minBlur: 14,
    maxBlur: 38,
    minOpacity: 0.4,
    maxOpacity: 0.85,
  })

  const colorCategories = [
    {
      title: "Core Background & Surface",
      items: [
        { name: "Background (Washi Paper)", hex: COLOR_TOKENS.background, note: "Warm off-white base paper canvas" },
        { name: "Surface / Glass Card", hex: COLOR_TOKENS.surface, note: "Translucent white glassmorphism card (75% opacity)" },
        { name: "Foreground (Sumi Ink)", hex: COLOR_TOKENS.foreground, note: "Deep sumi ink black for primary headings" },
        { name: "Muted Text", hex: COLOR_TOKENS.mutedText, note: "Balanced cool gray for secondary copy & descriptions" },
      ],
    },
    {
      title: "Gold & Brand Accents",
      items: [
        { name: "Primary Gold (Sun / Brand)", hex: COLOR_TOKENS.gold, note: "Sampled directly from the Mt. Fuji sun & logo" },
        { name: "Gold Light (Bevel Shimmer)", hex: COLOR_TOKENS.goldLight, note: "Top gradient highlight & floral accents" },
        { name: "Gold Dark (Base Shadow)", hex: COLOR_TOKENS.goldDark, note: "Bottom gradient shade & deep metallic edge" },
        { name: "Navy Indigo (Logo Brush)", hex: COLOR_TOKENS.navy, note: "Deep ink navy from the 'S' calligraphy brush stroke" },
        { name: "Hanko Stamp Red", hex: COLOR_TOKENS.hanko, note: "Traditional cinnabar seal vermilion stamp" },
        { name: "Hairline Border (Gold)", hex: COLOR_TOKENS.hairline, note: "Sampled 1px low-opacity gold boundary" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12 md:px-16 lg:px-24 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <header className="border-b border-border pb-8 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rotate-45 bg-gold inline-block" />
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold">
            Design Specification
          </p>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-[0.08em] uppercase font-heading text-foreground">
          Design System &amp; Tokens
        </h1>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Pixel-accurate design tokens sampled directly from Image 1 (Reference Portfolio) and Image 3 (Brand Logo).
          Japanese minimalist aesthetic featuring warm washi tones, sumi ink, brushed gold gradients, and cinnabar red accents.
        </p>
      </header>

      {/* 1. Color Palette */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rotate-45 bg-gold inline-block" />
          <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase font-heading">
            1. Sampled Color Palette
          </h2>
        </div>

        <div className="space-y-8">
          {colorCategories.map((cat) => (
            <div key={cat.title} className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-muted-foreground">
                {cat.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-lg border border-border bg-card backdrop-blur-sm shadow-sm flex items-start gap-4"
                  >
                    <div
                      className="w-14 h-14 rounded-md border border-black/10 shrink-0 shadow-inner"
                      style={{ background: item.hex }}
                    />
                    <div className="space-y-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{item.name}</p>
                      <p className="text-xs font-mono text-gold font-bold">{item.hex}</p>
                      <p className="text-[11px] text-muted-foreground leading-snug">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Gold Gradient Showcase */}
          <div className="p-5 rounded-lg border border-border bg-card backdrop-blur-sm space-y-3">
            <h3 className="text-xs uppercase tracking-[0.16em] font-semibold text-muted-foreground">
              Button Gold Gradient Specification
            </h3>
            <div className="h-12 w-full rounded-md bg-gold-gradient shadow-[0_2px_12px_rgba(154,110,50,0.3)] flex items-center justify-center">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white drop-shadow-sm">
                linear-gradient(180deg, #D4AF77 0%, #C59A5A 32%, #BA8D54 55%, #9A6E32 82%, #8D6328 100%)
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Typography */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rotate-45 bg-gold inline-block" />
          <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase font-heading">
            2. Typography &amp; Hierarchies
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Display Serif */}
          <div className="p-6 rounded-lg border border-border bg-card backdrop-blur-sm space-y-4">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold block">
              Display Heading Serif (Cinzel)
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-[0.08em] uppercase leading-tight font-heading">
                I BUILD DIGITAL <br />
                <span className="text-gold-gradient">EXPERIENCES</span> <br />
                THAT MATTER.
              </h1>
              <p className="text-xs text-muted-foreground pt-2">
                Font: Cinzel (Google Fonts) • Weights: 600, 700 • Tracking: 0.08em • Line Height: 1.15
              </p>
            </div>
          </div>

          {/* Navigation & UI Sans */}
          <div className="p-6 rounded-lg border border-border bg-card backdrop-blur-sm space-y-4">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold block">
              Nav &amp; Label Sans (Inter / Tracked Sans)
            </span>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-foreground">
                <span className="px-2 py-1 bg-secondary rounded">HOME</span>
                <span className="px-2 py-1 bg-secondary rounded">ABOUT</span>
                <span className="px-2 py-1 bg-secondary rounded">SKILLS</span>
                <span className="px-2 py-1 bg-gold/15 text-gold border border-gold/30 rounded">CONTACT</span>
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold pt-2">
                SOFTWARE DEVELOPER
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Transforming ideas into powerful web, mobile and software solutions with clean code, scalable architecture and strategic thinking.
              </p>
              <p className="text-xs text-muted-foreground pt-2">
                Font: Inter • Weights: 400, 500, 600 • Tracking: 0.14em - 0.20em
              </p>
            </div>
          </div>

          {/* Japanese Vertical Calligraphy */}
          <div className="p-6 rounded-lg border border-border bg-card backdrop-blur-sm flex flex-col justify-between">
            <div>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-gold block mb-4">
                Japanese Serif &amp; Hanko (Noto Serif JP)
              </span>
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center gap-3">
                  <span className="writing-vertical-rl font-serif text-lg tracking-[0.22em] text-[#272E3B] select-none">
                    コードで未来を創る
                  </span>
                  {/* Hanko Stamp */}
                  <div className="w-6 h-6 border-2 border-hanko text-hanko rounded-[3px] flex items-center justify-center text-[10px] font-bold select-none shadow-sm">
                    経
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <span className="writing-vertical-rl font-serif text-base tracking-[0.22em] text-gold select-none">
                    技術は力なり
                  </span>
                  <div className="w-5 h-5 bg-hanko text-white rounded-[2px] flex items-center justify-center text-[9px] font-bold select-none">
                    印
                  </div>
                </div>

                <div className="text-xs text-muted-foreground space-y-2">
                  <p className="font-semibold text-foreground">Vertical Japanese Typesetting:</p>
                  <p>• Margin Slogan: &quot;Creating future with code&quot;</p>
                  <p>• Kimono Kanji: 改善 (Kaizen)</p>
                  <p>• Hanko Stamp: Cinnabar Vermilion (#DE5B35)</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground pt-4">
              Font: Noto Serif JP • Traditional Mincho Styling
            </p>
          </div>
        </div>
      </section>

      {/* 3. Shadcn Buttons */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rotate-45 bg-gold inline-block" />
          <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase font-heading">
            3. Shadcn Button Restyling
          </h2>
        </div>

        <div className="p-8 rounded-lg border border-border bg-card backdrop-blur-sm space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Primary Gold CTA */}
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
                Variant: gold (Filled CTA)
              </span>
              <Button variant="gold" size="default">
                LET&apos;S BUILD <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              <p className="text-[11px] text-muted-foreground">
                Matches &quot;LET&apos;S BUILD →&quot; in Navbar and Footer
              </p>
            </div>

            {/* Outlined Gold */}
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
                Variant: outlineGold
              </span>
              <Button variant="outlineGold" size="default">
                SEE MY WORK <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              <p className="text-[11px] text-muted-foreground">
                Matches &quot;SEE MY WORK →&quot; in Hero Section
              </p>
            </div>

            {/* Ghost Text */}
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground block">
                Variant: ghostText
              </span>
              <Button variant="ghostText" size="default">
                DOWNLOAD CV <Download className="w-3.5 h-3.5 ml-1" />
              </Button>
              <p className="text-[11px] text-muted-foreground">
                Matches &quot;DOWNLOAD CV ↓&quot; in Hero Section
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Interactive States:</span>
            <span className="px-2.5 py-1 bg-secondary rounded">Default</span>
            <span className="px-2.5 py-1 bg-secondary rounded">Hover (+Glow / Scale)</span>
            <span className="px-2.5 py-1 bg-secondary rounded">Active (scale 0.98)</span>
            <span className="px-2.5 py-1 bg-secondary rounded opacity-50">Disabled</span>
          </div>
        </div>
      </section>

      {/* 4. Shapes, Borders & GSAP Glow Motion Tokens */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rotate-45 bg-gold inline-block" />
          <h2 className="text-xl md:text-2xl font-bold tracking-wider uppercase font-heading">
            4. Shapes, Hairlines &amp; GSAP Pulsing Glow
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hexagonal Clip Path */}
          <div className="p-6 rounded-lg border border-border bg-card backdrop-blur-sm space-y-4 flex flex-col items-center text-center">
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">
              Hexagonal Clip-Path (.clip-hex)
            </span>
            <div className="relative w-24 h-24 flex items-center justify-center">
              <div className="w-24 h-24 bg-gold-gradient clip-hex p-[1.5px] flex items-center justify-center shadow-gold-soft">
                <div className="w-full h-full bg-[#FAF8F5] clip-hex flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-foreground">S</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Used in the central navbar brand medallion, expertise matrix, and tech badges.
            </p>
          </div>

          {/* Chamfered Pill Ends */}
          <div className="p-6 rounded-lg border border-border bg-card backdrop-blur-sm space-y-4 flex flex-col items-center text-center">
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">
              Chamfered Navbar Outer Shell
            </span>
            <div className="w-full flex items-center justify-center py-4">
              <div className="relative flex items-center h-10 px-6 border border-hairline-gold bg-white/70 backdrop-blur-md rounded-sm">
                <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-l border-b border-gold bg-[#FAF8F5]" />
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-foreground">
                  NAVBAR SHELL
                </span>
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 border-r border-t border-gold bg-[#FAF8F5]" />
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Pointed diamond ends with delicate hairline gold perimeter and corner ornaments.
            </p>
          </div>

          {/* GSAP Pulsing Glow Hook */}
          <div className="p-6 rounded-lg border border-border bg-card backdrop-blur-sm space-y-4 flex flex-col items-center text-center">
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">
              GSAP useGlow Hook (Live)
            </span>
            <div className="py-2 flex items-center gap-4">
              <div
                ref={softGlowRef}
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center border border-gold/40 text-gold"
              >
                <Sparkles className="w-6 h-6" />
              </div>
              <div
                ref={intenseGlowRef}
                className="w-16 h-16 rounded-md bg-gold-gradient flex items-center justify-center text-white font-bold"
              >
                GLOW
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Dynamic sine-wave gold glow loop ({GLOW_MOTION_TOKENS.duration}s cycle) powered by GSAP.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
