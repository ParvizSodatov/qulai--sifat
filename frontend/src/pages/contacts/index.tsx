import { useState } from 'react'
import { Button } from '@/shared/ui/button'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Адрес', value: 'г. Ташкент, ул. Производственная, 15' },
  { icon: Phone, label: 'Телефон', value: '+998 (71) 000-00-00' },
  { icon: Mail, label: 'Email', value: 'info@qullaisifat.uz' },
  { icon: Clock, label: 'Режим работы', value: 'Пн–Пт: 9:00–18:00' },
]

export const ContactsPage = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Контакты</h1>
        <p className="mt-4 text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Contact info */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Наши контакты</h2>
          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="rounded-full bg-primary/10 p-2.5 mt-0.5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <p className="font-medium text-gray-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Оставить заявку</h2>
          {sent ? (
            <div className="text-center py-8">
              <p className="text-lg font-semibold text-gray-900">Заявка отправлена!</p>
              <p className="mt-2 text-muted-foreground">Мы свяжемся с вами в течение рабочего дня.</p>
              <Button className="mt-6" onClick={() => setSent(false)}>Отправить ещё</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Иван Иванов"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+998 90 000-00-00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Опишите ваш запрос..."
                />
              </div>
              <Button type="submit" className="w-full">Отправить заявку</Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
