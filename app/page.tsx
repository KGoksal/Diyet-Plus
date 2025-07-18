import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Calculators } from "@/components/calculators"
import { Articles } from "@/components/articles"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Calculators />
      <Articles />
    </main>
  )
}
