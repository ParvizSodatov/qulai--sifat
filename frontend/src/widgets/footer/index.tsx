import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="border-t bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">QullaiSifat</p>
            <p className="mt-2 text-sm">Производство профилей для натяжных потолков</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider">Навигация</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Продукция</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-wider">Контакты</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>+7 (000) 000-00-00</li>
              <li>info@qullaisifat.uz</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-xs">
          © {new Date().getFullYear()} QullaiSifat. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
