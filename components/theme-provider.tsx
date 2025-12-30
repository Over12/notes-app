"use client"

import { initializeStyle } from '@/lib/StyleChanger'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useLayoutEffect } from 'react'

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  useLayoutEffect(() => {
    initializeStyle()
  }, [])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
