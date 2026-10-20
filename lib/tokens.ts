/**
 * Design System Tokens
 * Sampled directly from Image 1 (Reference Portfolio) and Image 3 (Brand Logo)
 */

export const COLOR_TOKENS = {
  // Background: Warm off-white washi paper tone
  background: "#F9F6F0",
  backgroundSecondary: "#FAF7F2",

  // Surface: Translucent white card/glass surface
  surface: "rgba(255, 255, 255, 0.75)",
  surfaceSolid: "#FFFFFF",

  // Foreground: Sumi ink black for high contrast headings
  foreground: "#12161F",
  foregroundMuted: "#272E3B",

  // Muted body text
  mutedText: "#6B7280",
  mutedLight: "#8C929D",

  // Primary gold palette
  gold: "#C69441",
  goldLight: "#D8B273",
  goldDark: "#93682B",
  goldGradient:
    "linear-gradient(180deg, #D4AF77 0%, #C59A5A 32%, #BA8D54 55%, #9A6E32 82%, #8D6328 100%)",

  // Navy: Deep indigo/sumi navy from the logo brush stroke
  navy: "#091B2E",

  // Hairline border: Low-opacity gold
  hairline: "rgba(197, 148, 65, 0.28)",
  hairlineSolid: "#E2D6C5",

  // Accent: Traditional cinnabar red Hanko seal stamp
  hanko: "#DE5B35",
} as const

export const SHAPE_TOKENS = {
  // Hexagon clip path for central logo badge, tech stack badges & expertise matrix
  clipHexagon: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  // Chamfered navbar end caps
  clipChamferLeft: "polygon(14px 0%, 100% 0%, 100% 100%, 14px 100%, 0% 50%)",
  clipChamferRight: "polygon(0% 0%, calc(100% - 14px) 0%, 100% 50%, calc(100% - 14px) 100%, 0% 100%)",
} as const

export const GLOW_TOKENS = {
  soft: "0 0 15px rgba(198, 148, 65, 0.25)",
  medium: "0 0 25px rgba(198, 148, 65, 0.45)",
  intense: "0 0 45px rgba(198, 148, 65, 0.65)",
  dropSoft: "drop-shadow(0 0 10px rgba(198, 148, 65, 0.35))",
  dropMedium: "drop-shadow(0 0 18px rgba(198, 148, 65, 0.55))",
} as const

export const GLOW_MOTION_TOKENS = {
  duration: 2.4,
  ease: "sine.inOut",
  minOpacity: 0.28,
  maxOpacity: 0.72,
  minBlur: 8,
  maxBlur: 24,
  color: "rgba(198, 148, 65, 0.4)",
} as const
