import './globals.css'
import Navigation from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Phone, Mail } from 'lucide-react'
import ScrollToTop from '@/components/scrollToTop'
import SocialWidget from '@/components/socialWidget'

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
                  <a
                    href='tel:0975 252 168'
                    className='flex items-center gap-2'
                  >
                    <Phone
                      className='w-4 h-4 text-primary animate-phone-ring'
                      style={{ transformOrigin: 'center' }}
                    />
                    <span className='text-primary font-bold animate-pulse'>
                      0975 252 168
                    </span>
                  </a>
                </div>
                <div className='hidden sm:block'>
                  <div className='flex items-center gap-4'>
                    <span className='font-bold'>Email:</span>
                    <a
                      href='mailto:trangiaphat.corp@gmail.com'
                      className='flex items-center gap-2'
                    >
                      <Mail
                        className='w-4 h-4 text-primary animate-phone-ring'
                        style={{ transformOrigin: 'center' }}
                      />
                      <span>trangiaphat.corp@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Navigation />
          </header>
          {children}
          <Footer />
          <SocialWidget />
          <ScrollToTop />
        </div>
      </body>
    </html>
  )
}
