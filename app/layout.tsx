import './globals.css'
import Navigation from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Phone, Mail } from 'lucide-react'

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='vi'>
      <head>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      </head>
      <body>
        <div className='min-h-screen'>
          <header className='bg-white shadow-2xl sticky top-0 z-50'>
            <div className='bg-gray-100 py-4 px-4'>
              <div className='max-w-7xl mx-auto flex flex-wrap items-center justify-between'>
                <div className='flex items-center gap-6'>
                  <span className='font-bold'>Liên hệ tư vấn:</span>
                  <div className='flex items-center gap-1'>
                    <Phone className='w-4 h-4 text-blue-600' />
                    <span>0975 252 168</span>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <span className='font-bold'>Email:</span>
                  <div className='flex items-center gap-1'>
                    <Mail className='w-4 h-4 text-blue-600' />
                    <span>trangiaphat.corp@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <Navigation />
          </header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
