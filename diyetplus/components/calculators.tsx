"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calculator, Activity } from "lucide-react"

export function Calculators() {
  const [bmiResult, setBmiResult] = useState<any>(null)
  const [calorieResult, setCalorieResult] = useState<any>(null)
  const [bmiInputs, setBmiInputs] = useState({ height: "", weight: "" })
  const [calorieInputs, setCalorieInputs] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activity: "",
  })

  const calculateBMI = () => {
    const height = Number.parseFloat(bmiInputs.height)
    const weight = Number.parseFloat(bmiInputs.weight)

    if (!height || !weight || height <= 0 || weight <= 0) {
      alert("Lütfen geçerli boy ve kilo değerlerini girin!")
      return
    }

    if (height < 100 || height > 250) {
      alert("Boy değeri 100-250 cm arasında olmalıdır!")
      return
    }

    if (weight < 30 || weight > 300) {
      alert("Kilo değeri 30-300 kg arasında olmalıdır!")
      return
    }

    const heightInMeters = height / 100
    const bmi = weight / (heightInMeters * heightInMeters)

    let category = ""
    let color = ""
    let advice = ""

    if (bmi < 18.5) {
      category = "Zayıf"
      color = "text-blue-600"
      advice = "Sağlıklı kilo almanız önerilir. Bir diyetisyene danışın."
    } else if (bmi < 25) {
      category = "Normal"
      color = "text-green-600"
      advice = "Harika! İdeal kilo aralığındasınız. Bu kiloyu koruyun."
    } else if (bmi < 30) {
      category = "Fazla kilolu"
      color = "text-yellow-600"
      advice = "Dengeli beslenme ve egzersiz ile kilo vermeniz önerilir."
    } else if (bmi < 35) {
      category = "Obez (1. derece)"
      color = "text-orange-600"
      advice = "Sağlığınız için kilo vermeniz gerekiyor. Doktora danışın."
    } else if (bmi < 40) {
      category = "Obez (2. derece)"
      color = "text-red-600"
      advice = "Ciddi sağlık riski. Mutlaka doktor kontrolü gerekli."
    } else {
      category = "Obez (3. derece)"
      color = "text-red-800"
      advice = "Acil tıbbi müdahale gerekebilir. Hemen doktora başvurun."
    }

    const minIdealWeight = 18.5 * (heightInMeters * heightInMeters)
    const maxIdealWeight = 24.9 * (heightInMeters * heightInMeters)

    setBmiResult({
      bmi: bmi.toFixed(1),
      category,
      color,
      advice,
      idealRange: `${minIdealWeight.toFixed(1)} - ${maxIdealWeight.toFixed(1)} kg`,
    })
  }

  const calculateCalories = () => {
    const { age, gender, height, weight, activity } = calorieInputs

    if (!age || !height || !weight || !gender || !activity) {
      alert("Lütfen tüm alanları doldurun!")
      return
    }

    const ageNum = Number.parseFloat(age)
    const heightNum = Number.parseFloat(height)
    const weightNum = Number.parseFloat(weight)
    const activityNum = Number.parseFloat(activity)

    if (ageNum < 15 || ageNum > 100) {
      alert("Yaş 15-100 arasında olmalıdır!")
      return
    }

    if (heightNum < 100 || heightNum > 250) {
      alert("Boy değeri 100-250 cm arasında olmalıdır!")
      return
    }

    if (weightNum < 30 || weightNum > 300) {
      alert("Kilo değeri 30-300 kg arasında olmalıdır!")
      return
    }

    let bmr
    if (gender === "male") {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5
    } else {
      bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161
    }

    const totalCalories = bmr * activityNum

    setCalorieResult({
      bmr: bmr.toFixed(0),
      totalCalories: totalCalories.toFixed(0),
    })
  }

  return (
    <section id="calculators" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sağlık Hesaplayıcıları</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesyonel hesaplayıcılarımızla sağlık durumunuzu analiz edin
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* BMI Calculator */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Calculator className="w-6 h-6" />
                BMI Hesaplayıcı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="height" className="text-sm font-medium text-gray-700">
                    Boy (cm)
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="Örn: 175"
                    value={bmiInputs.height}
                    onChange={(e) => setBmiInputs({ ...bmiInputs, height: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="weight" className="text-sm font-medium text-gray-700">
                    Kilo (kg)
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="Örn: 70"
                    value={bmiInputs.weight}
                    onChange={(e) => setBmiInputs({ ...bmiInputs, weight: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <Button
                onClick={calculateBMI}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-6 text-lg rounded-lg"
              >
                BMI Hesapla
              </Button>

              {bmiResult && (
                <Alert className="border-emerald-200 bg-emerald-50">
                  <AlertDescription>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">{bmiResult.bmi}</div>
                        <div className={`text-lg font-semibold ${bmiResult.color}`}>{bmiResult.category}</div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>
                          <strong>İdeal Kilo Aralığı:</strong> {bmiResult.idealRange}
                        </p>
                        <p>
                          <strong>Öneri:</strong> {bmiResult.advice}
                        </p>
                        <p className="text-xs italic">
                          Bu hesaplama genel bir değerlendirmedir. Detaylı analiz için sağlık uzmanına danışın.
                        </p>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>

          {/* Calorie Calculator */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-xl">
                <Activity className="w-6 h-6" />
                Kalori Hesaplayıcı
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                      Yaş
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Örn: 25"
                      value={calorieInputs.age}
                      onChange={(e) => setCalorieInputs({ ...calorieInputs, age: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                      Cinsiyet
                    </Label>
                    <Select
                      value={calorieInputs.gender}
                      onValueChange={(value) => setCalorieInputs({ ...calorieInputs, gender: value })}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Seçin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Erkek</SelectItem>
                        <SelectItem value="female">Kadın</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="height-cal" className="text-sm font-medium text-gray-700">
                      Boy (cm)
                    </Label>
                    <Input
                      id="height-cal"
                      type="number"
                      placeholder="Örn: 175"
                      value={calorieInputs.height}
                      onChange={(e) => setCalorieInputs({ ...calorieInputs, height: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight-cal" className="text-sm font-medium text-gray-700">
                      Kilo (kg)
                    </Label>
                    <Input
                      id="weight-cal"
                      type="number"
                      placeholder="Örn: 70"
                      value={calorieInputs.weight}
                      onChange={(e) => setCalorieInputs({ ...calorieInputs, weight: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="activity" className="text-sm font-medium text-gray-700">
                    Aktivite Seviyesi
                  </Label>
                  <Select
                    value={calorieInputs.activity}
                    onValueChange={(value) => setCalorieInputs({ ...calorieInputs, activity: value })}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.2">Sedanter (Az aktivite)</SelectItem>
                      <SelectItem value="1.375">Hafif aktif (Hafif egzersiz)</SelectItem>
                      <SelectItem value="1.55">Orta aktif (Orta egzersiz)</SelectItem>
                      <SelectItem value="1.725">Çok aktif (Yoğun egzersiz)</SelectItem>
                      <SelectItem value="1.9">Süper aktif (Çok yoğun egzersiz)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={calculateCalories}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg rounded-lg"
              >
                Kalori Hesapla
              </Button>

              {calorieResult && (
                <Alert className="border-blue-200 bg-blue-50">
                  <AlertDescription>
                    <div className="space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">{calorieResult.totalCalories}</div>
                        <div className="text-lg font-semibold text-gray-700">kcal/gün</div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-2">
                        <p>
                          <strong>BMR (Bazal Metabolizma):</strong> {calorieResult.bmr} kcal/gün
                        </p>
                        <p className="text-xs italic">
                          Bu değer tahmini bir değerdir. Kişisel hedefleriniz için bir uzmana danışın.
                        </p>
                      </div>
                    </div>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
