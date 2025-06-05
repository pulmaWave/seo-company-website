// introduce company page
import { Metadata } from 'next'
import ArticleHeader from '@/components/breadcrumb'

export const metadata: Metadata = {
  title: 'Dự án',
  description: 'Danh sách các dự án của công ty',
  openGraph: {
    title: 'Dự án | Trần Gia Phát',
    description:
      'Danh sách các dự án của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    url: 'https://seo-company-website-1fes.vercel.app/du-an',
    images: [
      {
        url: 'https://seo-company-website-1fes.vercel.app/logo.png',
        width: 130,
        height: 130,
        alt: 'Dự án | Trần Gia Phát'
      }
    ]
  },
  twitter: {
    title: 'Dự án | Trần Gia Phát',
    description:
      'Danh sách các dự án của công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát'
  },
  icons: {
    icon: 'https://seo-company-website-1fes.vercel.app/favicon.ico'
  },
  keywords: [
    'Dự án',
    'Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    'Cơ khí xây dựng',
    'Giới thiệu công ty',
    'Dự án của Trần Gia Phát',
    'tran gia phat'
  ],
  authors: [
    {
      name: 'Trần Gia Phát',
      url: 'https://seo-company-website-1fes.vercel.app/'
    }
  ],
  creator: 'Trần Gia Phát',
  alternates: {
    canonical: 'https://seo-company-website-1fes.vercel.app/gioi-thieu'
  }
}

export default function IntroducePage() {
  return (
    <div className='min-h-screen'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT',
            url: 'https://seo-company-website-1fes.vercel.app/',
            logo: 'https://seo-company-website-1fes.vercel.app/logo.png',
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
        title='DỰ ÁN CÔNG TY'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Dự án' }
        ]}
      />
      {/* Article Content */}
      <div className='max-w-7xl mx-auto px-4 py-12'>DỰ ÁN</div>
    </div>
  )
}
