import ArticleHeader from '@/components/breadcrumb'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hồ sơ năng lực',
  description: 'Tải xuống hồ sơ năng lực của công ty chúng tôi',
  openGraph: {
    title: 'Hồ sơ năng lực | Trần Gia Phát',
    description:
      'Hồ sơ năng lực của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    url: 'https://www.trangiaphat.com.vn/ho-so-nang-luc',
    images: [
      {
        url: 'https://www.trangiaphat.com.vn/logo.png',
        width: 130,
        height: 130,
        alt: 'Hồ sơ năng lực | Trần Gia Phát'
      }
    ]
  },
  twitter: {
    title: 'Hồ sơ năng lực | Trần Gia Phát',
    description:
      'Hồ sơ năng lực của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát'
  },
  icons: {
    icon: 'https://www.trangiaphat.com.vn/favicon.ico'
  },
  keywords: [
    'Hồ sơ năng lực',
    'Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    'Cơ khí xây dựng',
    'Giới thiệu công ty',
    'Hồ sơ năng lực Trần Gia Phát',
    'tran gia phat'
  ],
  authors: [
    {
      name: 'Trần Gia Phát',
      url: 'https://www.trangiaphat.com.vn/'
    }
  ],
  creator: 'Trần Gia Phát',
  alternates: {
    canonical: 'https://www.trangiaphat.com.vn/gioi-thieu'
  }
}
export default function CapabilityProfilePage() {
  return (
    <div>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT',
            url: 'https://www.trangiaphat.com.vn/',
            logo: 'https://www.trangiaphat.com.vn/logo.png',
            description:
              'Giới thiệu về công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
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
      <ArticleHeader
        title='HỒ SƠ NĂNG LỰC | CATALOGUE'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Hồ sơ năng lực' }
        ]}
      />
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='w-fit text-center mx-auto'>
          <a
            href='/Ho-so-nang-luc-Catalogue-Tran-Gia-Phat.pdf'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-block',
              width: 300,
              position: 'relative'
            }}
          >
            <Image
              src='/ho-so-nang-luc.jpg'
              alt='Hồ sơ năng lực'
              width={300}
              height={300}
              className='rounded-lg mb-6 cursor-auto'
              loading='lazy'
              style={{ width: '100%', height: 'auto' }}
            />
            <span className='absolute top-1/2 left-1/2 w-full h-[60px] -translate-x-1/2 -translate-y-1/2 bg-secondary opacity-80 hover:opacity-100 text-white px-5 py-2 font-medium text-base flex items-center justify-center '>
              Xem chi tiết
            </span>
          </a>
        </div>
        <div className='text-center'>
          <a
            href='/Ho-so-nang-luc-Catalogue-Tran-Gia-Phat.pdf'
            download
            className='bg-secondary text-white px-4 py-2 rounded hover:scale-105 transition-transform duration-200 font-semibold inline-block'
          >
            Tải xuống
          </a>
        </div>
      </div>
    </div>
  )
}
