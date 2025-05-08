// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Script from "next/script"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Creative Agency",
  description: "Apple-inspired design portfolio",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* 1) Load the GA4 library */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVRNC71CW2"
        strategy="afterInteractive"
      />
      {/* 2) Initialize gtag */}
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZVRNC71CW2', { page_path: window.location.pathname });
        `}
      </Script>

      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
