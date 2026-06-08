const stats = [
  { label: 'Лет на рынке', value: '15+' },
  { label: 'Клиентов', value: '500+' },
  { label: 'Видов профилей', value: '30+' },
  { label: 'Регионов поставки', value: '12' },
]

export const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">О нашей компании</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            QullaiSifat — производитель профилей для натяжных потолков с многолетним опытом
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            {stats.map(({ label, value }) => (
              <div key={label}>
                <p className="text-4xl font-bold">{value}</p>
                <p className="mt-1 text-sm opacity-80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About text */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">История компании</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Компания QullaiSifat основана в 2009 году. За эти годы мы стали одним из ведущих
                  производителей профилей для натяжных потолков в регионе.
                </p>
                <p>
                  Наше производство оснащено современным оборудованием, что позволяет выпускать
                  продукцию высочайшего качества с точными допусками и стабильными характеристиками.
                </p>
                <p>
                  Мы работаем напрямую с монтажными компаниями, дизайнерами и строительными организациями,
                  предлагая выгодные условия сотрудничества и оперативные поставки.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="/images/logo.jpg"
                alt="Производство QullaiSifat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
