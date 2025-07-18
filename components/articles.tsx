import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Apple, Dumbbell, Droplets, ChefHat, ArrowRight } from "lucide-react"

const articles = [
  {
    icon: Apple,
    title: "Sağlıklı Beslenme Rehberi",
    description: "Dengeli beslenme için temel ilkeler ve günlük hayata uygulanabilir öneriler.",
    color: "from-green-500 to-emerald-500",
    readTime: "5 dk okuma",
  },
  {
    icon: Dumbbell,
    title: "Evde Egzersiz Programı",
    description: "Spor salonuna gitmeden evde yapabileceğiniz etkili egzersiz rutinleri.",
    color: "from-purple-500 to-pink-500",
    readTime: "8 dk okuma",
  },
  {
    icon: Droplets,
    title: "Su İçmenin Faydaları",
    description: "Günlük su tüketiminin metabolizma ve genel sağlık üzerindeki etkileri.",
    color: "from-blue-500 to-cyan-500",
    readTime: "4 dk okuma",
  },
  {
    icon: ChefHat,
    title: "Diyet Yemek Tarifleri",
    description: "Lezzetli ve sağlıklı, kalori kontrolü yapılmış pratik yemek tarifleri.",
    color: "from-orange-500 to-red-500",
    readTime: "10 dk okuma",
  },
]

export function Articles() {
  return (
    <section id="articles" className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popüler Makaleler</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sağlıklı yaşam için uzman tavsiyeleri ve pratik bilgiler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center`}>
                <article.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">{article.description}</p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  Devamını Oku
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
