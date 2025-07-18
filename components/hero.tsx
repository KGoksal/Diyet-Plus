"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import { useState } from "react"

export function Hero() {
  // Array of motivational/health-related quotes
  const phrases = [
    "Kilo verme, sağlıklı beslenme ve yaşam tarzı değişikliği için ihtiyacınız olan profesyonel araçlar ve rehberlik burada!",
    "Her gün küçük adımlar, büyük değişimlere yol açar.",
    "Sağlıklı yaşam, doğru beslenme ve hareketle başlar.",
    "Kendinize iyi bakmak, en değerli yatırımdır.",
    "Dengeli beslen, aktif yaşa, mutlu ol!",
    "Bugün attığın adım, yarının sağlığıdır.",
    "Sağlık, zenginlikten daha değerlidir.",
    "Vücudun sana emanet, ona iyi davran.",
    "Her öğün bir fırsat, sağlığını seç!",
    "Motivasyonunu kaybetme, hedefine odaklan!"
  ];
  // Pick a random phrase on each render (refresh)
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  const [heartFilled, setHeartFilled] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="container px-4 py-16 mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium cursor-pointer select-none"
            onClick={() => setHeartFilled(f => !f)}
            title="Beğen / Kaldır"
          >
            <Heart className="w-4 h-4" fill={heartFilled ? "currentColor" : "none"} />
            Sağlıklı Yaşamın Rehberi
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Sağlıklı Yaşam
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Başlıyor
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {randomPhrase}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("calculators")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hesaplayıcıları Kullan
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg rounded-full border-2 hover:bg-gray-50 transition-all duration-300 bg-transparent"
              onClick={() => document.getElementById("articles")?.scrollIntoView({ behavior: "smooth" })}
            >
              Makaleleri İncele
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
