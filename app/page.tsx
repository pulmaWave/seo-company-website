import Image from 'next/image'
import Link from 'next/link'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Trang chủ | Trần Gia Phát',
  description: 'Trang chủ của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
  openGraph: {
    title: 'Trang chủ | Trần Gia Phát',
    description: 'Trang chủ của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    url: 'https://seo-company-website-1fes.vercel.app/',
    images: [
      {
        url: 'https://seo-company-website-1fes.vercel.app//logo.png',
        width: 130,
        height: 130,
        alt: 'Trang chủ | Trần Gia Phát'
      }
    ]
  },
  twitter: {
    title: 'Trang chủ | Trần Gia Phát',
    description: 'Trang chủ của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát'
  },
  icons: {
    icon: 'https://seo-company-website-1fes.vercel.app//favicon.ico'
  },
  keywords: [
    'Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    'Cơ khí xây dựng',
    'Trần Gia Phát',
    'tran gia phat'
  ],
  authors: [
    {
      name: 'Trần Gia Phát',
      url: 'https://seo-company-website-1fes.vercel.app/'
    }
  ],
  creator: 'Trần Gia Phát',
  alternates: {
    canonical: 'https://seo-company-website-1fes.vercel.app/'
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT',
            url: 'https://seo-company-website-1fes.vercel.app/',
            logo: 'https://seo-company-website-1fes.vercel.app//logo.png',
            description:
              'Trang chủ của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+84-975-252-168',
              email: 'trangiaphat.corp@gmail.com',
              contactType: 'customer service',
              areaServed: 'VN',
              availableLanguage: ['Vietnamese', 'English']
            },
            sameAs: [
              'https://www.facebook.com/info.trangiaphat.vn',
              'https://www.youtube.com/@trangiaphatvn'
            ],
            additionalType: 'https://schema.org/Organization',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'Số 25, Đường 69, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',
              addressLocality: 'Thủ Đức',
              addressRegion: 'Hồ Chí Minh',
              postalCode: '700000',
              addressCountry: 'VN'
            },
            foundingDate: '2011-05-25',
            foundingYear: 2011,
            foundingLocation:
              'Số 25, Đường 69, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam'
          })
        }}
      />
      <section className='bg-gradient-to-b from-gray-100 to-gray-200'>
        <div className='relative w-full'>
          <div className='hidden md:block'>
            <div
              className='relative md:h-[450px] lg:h-[600px] bg-cover bg-center flex items-center'
              style={{
                backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), transparent), url('/banner.jpg')`
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent z-0' />
              <div className='absolute text-white max-w-7xl z-10 py-20 w-full left-1/2 -translate-x-1/2 px-4'>
                <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                  TRẦN GIA PHÁT{' '}
                  <span className='block text-lg md:text-xl'>
                    Công ty Cổ phần Cơ khí Xây dựng
                  </span>
                  <br />
                  SẢN PHẨM CHỐNG CHÁY
                </h1>
                <h2 className='mt-2 text-base md:text-lg'>
                  Đầy đủ giấy phép, chứng chỉ và hồ sơ năng lực <br />
                  Đảm bảo tiêu chuẩn chất lượng cao nhất cho sản phẩm và dịch
                  vụ.
                </h2>
                <div className='mt-6'>
                  <Link
                    href='/san-pham'
                    className='inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg shadow hover:scale-105 transition-transform duration-300 font-semibold'
                  >
                    Xem sản phẩm
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
            <div
              className='relative h-[300px] bg-cover bg-center flex items-center justify-center text-center'
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/banner.jpg')`
              }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-black to-transparent z-0' />
              <div className='text-white relative z-10 w-full'>
                <h1 className='text-2xl md:text-3xl font-bold leading-tight'>
                  TRẦN GIA PHÁT{' '}
                  <span className='block text-sm md:text-base'>
                    Công ty Cổ phần Cơ khí Xây dựng
                  </span>
                  <br />
                  SẢN PHẨM CHỐNG CHÁY
                </h1>
                <h2 className='mt-2 text-sm md:text-base px-4'>
                  Đầy đủ giấy phép, chứng chỉ và hồ sơ năng lực <br />
                  Đảm bảo tiêu chuẩn chất lượng cao nhất cho sản phẩm và dịch
                  vụ.
                </h2>
                <Link
                  href='/san-pham'
                  className='hover:scale-105 transition-transform duration-300 mt-4 bg-primary text-white py-2 px-4 rounded-md'
                >
                  Xem sản phẩm
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className='py-16 bg-gray-100'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-4xl font-bold text-primary mb-8 tracking-wider'>
            GIỚI THIỆU
          </h2>
          <div className=''>
            <div className='max-w-[1000px] mx-auto pt-6 px-2'>
              <p className='text-gray-600'>
                TRẦN GIA PHÁT luôn đặt UY TÍN - TRÁCH NHIỆM - AN TOÀN lên hàng
                đầu trong từng sản phẩm và công trình. Mỗi bộ cửa chống cháy,
                mỗi vách ngăn khói hay thiết bị PCCC đều là minh chứng cho cam
                kết vững chắc vì sự an toàn cộng đồng.
              </p>
              <Link
                href='/gioi-thieu'
                className='inline-block mt-4 px-4 py-2 bg-primary text-white rounded-lg shadow hover:scale-105 transition-transform duration-300 font-semibold'
              >
                Xem thêm
              </Link>
            </div>
            <div className='max-w-[1000px] mx-auto py-8 px-2'>
              <Image
                src='/gioi-thieu/thuong-hieu-tran-gia-phat.webp'
                alt='Giới thiệu Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát'
                width={1200}
                height={848}
              />
              <p className='text-center text-sm mt-2 italic'>
                Giới thiệu Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Articles */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12 text-primary'>
            SẢN PHẨM NỔI BẬT
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Link href='/san-pham/cua-cuon-chong-chay' className='group'>
              <div className='bg-gray-100 rounded-lg overflow-hidden'>
                <Image
                  src='/cua-cuon-chong-chay/cua-cuon-chong-chay.png'
                  alt='Dự án Cửa cuốn chống cháy tại nhà ga T3 - Sân bay Tân Sơn Nhất'
                  width={300}
                  height={200}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2 group-hover:text-blue-600'>
                    CỬA CUỐN CHỐNG CHÁY
                  </h3>
                  <p className='text-gray-600 text-sm'>Trần Gia Phát</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
