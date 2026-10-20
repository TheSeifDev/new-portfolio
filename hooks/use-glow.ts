"use client"

import { useRef, useEffect } from "react"
import { gsap } from "@/lib/gsap"
import { GLOW_MOTION_TOKENS } from "@/lib/tokens"

interface UseGlowOptions {
  type?: "box" | "drop"
  duration?: number
  minBlur?: number
  maxBlur?: number
  minOpacity?: number
  maxOpacity?: number
  colorRgb?: string // e.g. "198, 148, 65"
  paused?: boolean
}

export function useGlow<T extends HTMLElement = HTMLDivElement>(
  options: UseGlowOptions = {}
) {
  const elementRef = useRef<T>(null)

  const {
    type = "box",
    duration = GLOW_MOTION_TOKENS.duration,
    minBlur = GLOW_MOTION_TOKENS.minBlur,
    maxBlur = GLOW_MOTION_TOKENS.maxBlur,
    minOpacity = GLOW_MOTION_TOKENS.minOpacity,
    maxOpacity = GLOW_MOTION_TOKENS.maxOpacity,
    colorRgb = "198, 148, 65",
    paused = false,
  } = options

  useEffect(() => {
    const el = elementRef.current
    if (!el || paused) return

    const proxy = {
      blur: minBlur,
      opacity: minOpacity,
    }

    const tween = gsap.to(proxy, {
      blur: maxBlur,
      opacity: maxOpacity,
      duration,
      ease: GLOW_MOTION_TOKENS.ease,
      repeat: -1,
      yoyo: true,
      onUpdate: () => {
        if (!el) return
        if (type === "box") {
          el.style.boxShadow = `0 0 ${proxy.blur}px rgba(${colorRgb}, ${proxy.opacity})`
        } else {
          el.style.filter = `drop-shadow(0 0 ${proxy.blur}px rgba(${colorRgb}, ${proxy.opacity}))`
        }
      },
    })

    return () => {
      tween.kill()
      if (el) {
        if (type === "box") {
          el.style.boxShadow = ""
        } else {
          el.style.filter = ""
        }
      }
    }
  }, [type, duration, minBlur, maxBlur, minOpacity, maxOpacity, colorRgb, paused])

  return elementRef
}
