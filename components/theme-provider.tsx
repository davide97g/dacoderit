"use client"

import { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Ensure theme is only applied after client-side hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div style={{ visibility: "hidden" }}>{children}</div>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
