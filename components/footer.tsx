import { Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold">Renkli Diyetisyen</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Sağlıklı yaşam için güvenilir rehber. Profesyonel araçlar ve uzman tavsiyeleri ile hedeflerinize ulaşın.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">BMI Hesaplayıcı</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Kalori Hesaplayıcı</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Sağlık Makaleleri</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Diyet Rehberi</button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">Kategoriler</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Sağlıklı Beslenme</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Egzersiz Programları</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Kilo Yönetimi</button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">Yaşam Tarzı</button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-400">İletişim</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-400">info@renklidiyetisyen.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-400">0555 123 45 67</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-400">İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RenkliDiyetisyen. Tüm hakları saklıdır. |
            <span className="text-emerald-400"> Sağlıklı yaşam için tasarlandı</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
