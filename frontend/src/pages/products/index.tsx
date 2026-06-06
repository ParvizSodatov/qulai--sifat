import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/shared/ui/card'
import { Button } from '@/shared/ui/button'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 1,
    name: 'Профиль ПП-1',
    desc: 'Универсальный настенный профиль для одноуровневых натяжных потолков.',
    specs: 'Длина: 2-6 м | Материал: ПВХ | Нагрузка: до 25 кг/м²',
  },
  {
    id: 2,
    name: 'Профиль ПП-2',
    desc: 'Профиль для двухуровневых потолков с усиленной конструкцией.',
    specs: 'Длина: 2-6 м | Материал: ПВХ | Нагрузка: до 35 кг/м²',
  },
  {
    id: 3,
    name: 'Профиль AL-100',
    desc: 'Алюминиевый профиль повышенной прочности для коммерческих помещений.',
    specs: 'Длина: 3-6 м | Материал: Алюминий | Нагрузка: до 50 кг/м²',
  },
  {
    id: 4,
    name: 'Профиль AL-200',
    desc: 'Алюминиевый профиль для криволинейных потолков любой формы.',
    specs: 'Длина: 2-4 м | Материал: Алюминий | Нагрузка: до 45 кг/м²',
  },
  {
    id: 5,
    name: 'Профиль ПТ-Арка',
    desc: 'Специальный гибкий профиль для арочных и нестандартных конструкций.',
    specs: 'Длина: 2-3 м | Материал: ПВХ гибкий | Радиус: от 30 см',
  },
  {
    id: 6,
    name: 'Стартовый профиль',
    desc: 'Профиль для монтажа натяжного полотна по периметру помещения.',
    specs: 'Длина: 2-6 м | Материал: ПВХ | Универсальный',
  },
]

export const ProductsPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Наша продукция</h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Производим широкий ассортимент профилей для любых задач и помещений
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <Card key={p.id} className="flex flex-col hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 rounded-t-lg flex items-center justify-center text-gray-400 text-sm">
              Фото профиля
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <CardDescription>{p.desc}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <p className="text-xs text-muted-foreground border-t pt-3">{p.specs}</p>
              <Button className="mt-4 w-full" variant="outline" asChild>
                <Link to="/contacts">Запросить цену</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
