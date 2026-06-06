import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import { Card, CardContent } from '@/shared/ui/card'
import { Shield, Truck, Wrench, Award } from 'lucide-react'

const advantages = [
  { icon: Shield, title: 'Высокое качество', desc: 'Все профили проходят строгий контроль качества на производстве.' },
  { icon: Truck, title: 'Быстрая доставка', desc: 'Доставляем продукцию по всей стране в кратчайшие сроки.' },
  { icon: Wrench, title: 'Собственное производство', desc: 'Полный цикл производства — от сырья до готового профиля.' },
  { icon: Award, title: 'Опыт 15+ лет', desc: 'Многолетний опыт в производстве профилей для натяжных потолков.' },
]

export const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Профили для натяжных потолков
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Производим качественные профили любых конфигураций. Надёжность, точность и многолетний опыт.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/products">Наша продукция</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white text-gray-900" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Почему выбирают нас</h2>
            <p className="mt-4 text-muted-foreground">Мы производим профили с заботой о качестве и клиенте</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="pt-8 pb-6 flex flex-col items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Готовы к сотрудничеству?</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Оставьте заявку и наш менеджер свяжется с вами в течение рабочего дня.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link to="/contacts">Оставить заявку</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
