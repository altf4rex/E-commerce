import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import CategoryMenu from '@/components/CategoryMenu'
import Footer from '@/components/Footer'
import CartProvider from '@/components/CartProvider'

export const metadata: Metadata = {
  title: 'E-commerce',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-primaryBg">
      <body className="max-width container shadow">
      <CartProvider>
        <Header /> 
        <CategoryMenu />
        {children}
      </CartProvider>
      <Footer />
      </body>
    </html>
  )
}
