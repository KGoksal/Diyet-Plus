import { Card, CardContent } from "@/components/ui/card"
import { Calculator, BarChart3, Dumbbell, Apple } from "lucide-react"

const features = [
  {
    icon: Calculator,
    title: "Kalori Hesaplayıcı",
    description: "Günlük kalori ihtiyacınızı hesaplayın ve hedeflerinize uygun beslenme planı oluşturun.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "BMI Hesaplayıcı",
    description: "Vücut kitle indeksinizi hesaplayın ve ideal kilo aralığınızı öğrenin.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Dumbbell,
    title: "Egzersiz Rehberi",
    description: "Farklı egzersiz türleri ve kalori yakım miktarları hakkında bilgi alın.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Apple,
    title: "Diyet Listeleri",
    description: "Farklı diyet türleri ve sağlıklı beslenme önerileri keşfedin.",
    color: "from-orange-500 to-red-500",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Özelliklerimiz</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sağlıklı yaşam hedeflerinize ulaşmanız için tasarlanmış profesyonel araçlar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
