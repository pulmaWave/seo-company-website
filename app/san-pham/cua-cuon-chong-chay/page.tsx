import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import ArticleHeader from '@/components/breadcrumb'
import ContactInfoBox from '@/components/contactBox'

export const metadata: Metadata = {
  title: 'Cửa cuốn chống cháy - Giải pháp an toàn cho công trình',
  description:
    'Tìm hiểu về cửa cuốn chống cháy và các giải pháp an toàn cho công trình.',
  openGraph: {
    title: 'Cửa cuốn chống cháy - Giải pháp an toàn cho công trình',
    description:
      'Tìm hiểu về cửa cuốn chống cháy và các giải pháp an toàn cho công trình.',
    url: '/san-pham/cua-cuon-chong-chay',
    images: [
      {
        url: '/cua-cuon-chong-chay/cua-cuon-chong-chay.png',
        width: 1200,
        height: 630,
        alt: 'Cửa cuốn chống cháy - Giải pháp an toàn cho công trình'
      }
    ]
  },
  icons: {
    icon: 'https://seo-company-website-1fes.vercel.app/favicon.ico'
  },
  keywords: [
    'cửa cuốn chống cháy',
    'cửa cuốn chống cháy ei 60',
    'cửa cuốn chống cháy ei60',
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
    canonical:
      'https://seo-company-website-1fes.vercel.app/san-pham/cua-cuon-chong-chay'
  }
}
export default function ArticlePage() {
  return (
    <div>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'cửa cuốn chống cháy',
            url: 'https://seo-company-website-1fes.vercel.app/san-pham/cua-cuon-chong-chay',
            logo: 'https://seo-company-website-1fes.vercel.app/logo.png',
            description: '',
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
        title='CỬA CUỐN CHỐNG CHÁY - GIẢI PHÁP AN TOÀN CHO CÔNG TRÌNH'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Sản phẩm', href: '/san-pham' },
          { label: 'Cửa cuốn chống cháy' }
        ]}
      />

      {/* Article Content */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-3'>
            <article className='prose prose-lg max-w-none'>
              <h2
                id='tran-chong-chay-la-gi'
                className='text-2xl font-bold mb-6'
              >
                1. Cửa cuốn chống cháy là gì?
              </h2>
              <p className='mb-6'>
                Cửa cuốn chống cháy là hệ thống trần được thiết kế đặc biệt để
                ngăn cản sự lan truyền của lửa trong một khoảng thời gian nhất
                định (thường là 60 phút, 90 phút, hoặc 120 phút). Trần có thể
                làm từ các vật liệu như thạch cao chống cháy, tấm xi măng, tấm
                panel chống cháy có lớp lõi cách nhiệt,…
              </p>

              <h2
                id='vai-tro-tran-chong-chay'
                className='text-2xl font-bold mb-6'
              >
                2. Vai trò của cửa cuốn chống cháy
              </h2>
              <ul className='list-disc pl-6 mb-6 space-y-2'>
                <li>
                  <strong>Ngăn ngừa lửa lan rộng:</strong> giúp cô lập đám cháy
                  trong khu vực nhỏ hơn.
                </li>
                <li>
                  <strong>Tăng thời gian sơ tán:</strong> giúp người trong công
                  trình có thêm thời gian để thoát hiểm.
                </li>
                <li>
                  <strong>Bảo vệ kết cấu công trình:</strong> hạn chế thiệt hại
                  đến hệ thống điện, ống dẫn và thiết bị phía trên trần.
                </li>
                <li>
                  <strong>Tuân thủ quy chuẩn PCCC:</strong> nhiều công trình yêu
                  cầu bắt buộc có hệ thống trần, vách chống cháy theo quy định
                  pháp luật.
                </li>
              </ul>

              <h2
                id='cac-loai-tran-chong-chay'
                className='text-2xl font-bold mb-6'
              >
                3. Các loại cửa cuốn chống cháy tại Trần Gia Phát
              </h2>
              <p className='mb-4'>
                Chúng tôi cung cấp đa dạng sản phẩm cửa cuốn chống cháy theo
                từng nhu cầu cụ thể:
              </p>
              <div className='overflow-x-auto mb-6'>
                <table className='min-w-full border border-gray-300'>
                  <thead>
                    <tr>
                      <th className='border px-4 py-2'>Loại trần</th>
                      <th className='border px-4 py-2'>Thời gian chịu lửa</th>
                      <th className='border px-4 py-2'>Ứng dụng phổ biến</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='border px-4 py-2'>Thạch cao chống cháy</td>
                      <td className='border px-4 py-2'>EI60 – EI90</td>
                      <td className='border px-4 py-2'>
                        Nhà ở, văn phòng, chung cư
                      </td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>Tấm panel chống cháy</td>
                      <td className='border px-4 py-2'>EI90 – EI120</td>
                      <td className='border px-4 py-2'>
                        Nhà xưởng, kho bãi, trung tâm dữ liệu
                      </td>
                    </tr>
                    <tr>
                      <td className='border px-4 py-2'>Trần thép chịu nhiệt</td>
                      <td className='border px-4 py-2'>EI120 trở lên</td>
                      <td className='border px-4 py-2'>
                        Hầm đỗ xe, trung tâm thương mại lớn
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='mb-6'>
                Tất cả sản phẩm đều đi kèm chứng nhận kiểm định PCCC và thi công
                bởi đội ngũ kỹ thuật lành nghề.
              </p>

              <h2
                id='tai-sao-chon-tran-chong-chay'
                className='text-2xl font-bold mb-6'
              >
                4. Tại sao chọn Trần Gia Phát?
              </h2>
              <div className='bg-gray-100 shadow rounded p-4 mb-6'>
                <ul className='list-disc pl-6 mb-2 space-y-2'>
                  <li>
                    Kinh nghiệm hơn 10 năm trong lĩnh vực cơ khí – xây dựng và
                    PCCC.
                  </li>
                  <li>
                    Cam kết chất lượng: sản phẩm đạt tiêu chuẩn EI60 – EI120.
                  </li>
                  <li>Chứng nhận kiểm định theo PCCC</li>
                  <li>Tư vấn và thiết kế miễn phí theo yêu cầu công trình.</li>
                  <li>Thi công nhanh, đúng tiến độ với giá cả cạnh tranh.</li>
                </ul>
              </div>

              <h2
                id='lien-he-bao-gia-tran-chong-chay'
                className='text-2xl font-bold mb-6'
              >
                5. Liên hệ báo giá cửa cuốn chống cháy
              </h2>
              <p>
                Bạn đang tìm kiếm giải pháp cửa cuốn chống cháy đạt chuẩn cho
                công trình của mình? Đừng ngần ngại liên hệ{' '}
                <strong>Trần Gia Phát</strong> để được tư vấn và báo giá nhanh
                chóng!
              </p>
            </article>
            <ContactInfoBox />
          </div>

          {/* Table of Contents Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-[var(--header-h)]'>
              <div className='bg-gray-100 rounded-lg p-6'>
                <h3 className='font-semibold mb-4 flex items-center'>
                  📋 Nội dung chính
                </h3>
                <nav className='space-y-2'>
                  <Link
                    href='#tran-chong-chay-la-gi'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    1. Cửa cuốn chống cháy là gì?
                  </Link>
                  <Link
                    href='#vai-tro-cua-tran-chong-chay'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    2. Vai trò của cửa cuốn chống cháy
                  </Link>
                  <Link
                    href='#cac-loai-tran-chong-chay'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    3. Các loại cửa cuốn chống cháy
                  </Link>
                  <Link
                    href='#tai-sao-chon-tran-gia-phat'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    4. Tại sao chọn Trần Gia Phát?
                  </Link>
                  <Link
                    href='#lien-he-bao-gia-tran-chong-chay'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    5. Liên hệ báo giá cửa cuốn chống cháy
                  </Link>
                </nav>
              </div>

              {/* Related Articles */}
              <div className='bg-white border rounded-lg p-6 mt-6'>
                <h3 className='font-semibold mb-4'>Bài viết liên quan</h3>
                <div className='space-y-4'>
                  <Link href='#' className='block group'>
                    <div className='flex gap-3'>
                      <Image
                        src='/placeholder.svg?height=60&width=80'
                        alt='Related article'
                        width={80}
                        height={60}
                        className='rounded object-cover'
                      />
                      <div>
                        <h4 className='text-sm font-medium group-hover:text-blue-600 line-clamp-2'>
                          Cách tối ưu hóa SEO cho website doanh nghiệp
                        </h4>
                        <p className='text-xs text-gray-500 mt-1'>
                          Trần Gia Phát
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href='#' className='block group'>
                    <div className='flex gap-3'>
                      <Image
                        src='/placeholder.svg?height=60&width=80'
                        alt='Related article'
                        width={80}
                        height={60}
                        className='rounded object-cover'
                      />
                      <div>
                        <h4 className='text-sm font-medium group-hover:text-blue-600 line-clamp-2'>
                          Xu hướng Digital Marketing 2024
                        </h4>
                        <p className='text-xs text-gray-500 mt-1'>
                          Trần Gia Phát
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
