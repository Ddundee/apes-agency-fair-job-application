"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider as NextThemesProvider } from "next-themes"


const inter = Inter({ subsets: ['latin'] })

export function ThemeProvider({children, ...props}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
}
