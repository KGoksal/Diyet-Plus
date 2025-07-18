import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DiyetPlus - Sağlıklı Yaşam Rehberi",
  description:
    "BMI hesaplayıcı, kalori hesaplayıcı ve sağlıklı yaşam rehberi. Kilo verme ve sağlıklı beslenme için profesyonel araçlar.",
  keywords: "BMI hesaplayıcı, kalori hesaplayıcı, diyet, sağlıklı beslenme, kilo verme",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
