import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/home'
import { ProductsPage } from '@/pages/products'
import { AboutPage } from '@/pages/about'
import { ContactsPage } from '@/pages/contacts'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
