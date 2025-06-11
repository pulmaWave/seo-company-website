import Link from 'next/link'
import { Metadata } from 'next'
import ArticleHeader from '@/components/breadcrumb'
import RelatedProducts from '@/components/relatedProducts'

export const metadata: Metadata = {
  title: 'Vách chống cháy - Giải pháp an toàn cho công trình',
  description:
    'Tìm hiểu về Vách chống cháy và các giải pháp an toàn cho công trình.',
  openGraph: {
    title: 'Vách chống cháy - Giải pháp an toàn cho công trình',
    description:
      'Tìm hiểu về Vách chống cháy và các giải pháp an toàn cho công trình.',
    url: '/san-pham/cua-cuon-chong-chay',
    images: [
      {
        url: '/vach-chong-chay/vach-chong-chay.jpg',
        width: 1200,
        height: 630,
        alt: 'Vách chống cháy - Giải pháp an toàn cho công trình'
      }
    ]
  },
  twitter: {
    title: 'Giới thiệu | Trần Gia Phát',
    description: 'Giới thiệu về công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát'
  },
  icons: {
    icon: 'https://www.trangiaphat.com.vn/favicon.ico'
  },
  keywords: [
    'vách chống cháy',
    'vách thạch cao chống cháy',
    'thạch cao chống cháy',
    'Trần Gia Phát'
  ],
  authors: [
    {
      name: 'Trần Gia Phát',
      url: 'https://www.trangiaphat.com.vn/'
    }
  ],
  creator: 'Trần Gia Phát',
  alternates: {
    canonical: 'https://www.trangiaphat.com.vn/vach-chong-chay'
  }
}
export default function ArticlePage() {
  return (
    <div>
      <ArticleHeader
        title='VÁCH CHỐNG CHÁY - GIẢI PHÁP AN TOÀN CHO CÔNG TRÌNH'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Sản phẩm', href: '/san-pham' },
          { label: 'Vách chống cháy' }
        ]}
      />

      {/* Article Content */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid lg:grid-cols-4 gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-3'>
            <article className='prose prose-lg max-w-none'>
              <p className='text-lg leading-relaxed mb-6'></p>

              <p className='mb-6'>Tham khảo bài viết liên quan:</p>

              <ul className='list-disc pl-6 mb-8 space-y-2'>
                <li>
                  <Link href='#' className='text-red-600 hover:underline'>
                    Thành công trong lĩnh vực du lịch APAC với 3 insight định
                    hình chiến lược Marketing
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-red-600 hover:underline'>
                    5 chiêu thức Marketing mùa lễ hội khiến video quảng cáo trở
                    nên nổi bật
                  </Link>
                </li>
                <li>
                  <Link href='#' className='text-red-600 hover:underline'>
                    Google | Tối ưu lợi nhuận và giành chiến thắng trong mùa mua
                    sắm lớn trong năm
                  </Link>
                </li>
              </ul>

              <h2 id='top-5-ha-noi' className='text-2xl font-bold mb-6'>
                1. Top 5 công ty Digital Marketing ở Hà Nội
              </h2>

              <h3 id='seongon' className='text-xl font-semibold mb-4'>
                1.1. SEONGON
              </h3>

              <p className='mb-6'>
                SEONGON là một trong những công ty Digital Marketing hàng đầu
                tại Việt Nam với hơn 13 năm kinh nghiệm trong lĩnh vực. Công ty
                chuyên cung cấp các dịch vụ SEO, Google Ads, Social Media
                Marketing và Content Marketing cho hơn 5000 doanh nghiệp.
              </p>

              <div className='bg-gray-50 p-6 rounded-lg mb-8'>
                <h4 id='dich-vu-chinh-seongon' className='font-semibold mb-3'>
                  Dịch vụ chính của SEONGON:
                </h4>
                <ul className='list-disc pl-6 space-y-1'>
                  <li>Tối ưu hóa công cụ tìm kiếm (SEO)</li>
                  <li>Quảng cáo Google Ads</li>
                  <li>Marketing trên mạng xã hội</li>
                  <li>Thiết kế và phát triển website</li>
                  <li>Content Marketing</li>
                </ul>
              </div>

              <h3
                id='cong-ty-abc-digital'
                className='text-xl font-semibold mb-4'
              >
                1.2. Công ty ABC Digital
              </h3>
              <p className='mb-6'>
                Mô tả về công ty ABC Digital và các dịch vụ của họ...
              </p>

              <h3 id='xyz-marketing' className='text-xl font-semibold mb-4'>
                1.3. Công ty XYZ Marketing
              </h3>
              <p className='mb-6'>
                Mô tả về công ty XYZ Marketing và các dịch vụ của họ...
              </p>

              <h2 id='top-5-hcm' className='text-2xl font-bold mb-6'>
                2. Top 5 công ty Digital Marketing ở TP.HCM
              </h2>
              <p className='mb-6'>
                Nội dung về các công ty Digital Marketing hàng đầu tại TP.HCM...
              </p>

              <h2 id='tieu-chi-danh-gia' className='text-2xl font-bold mb-6'>
                3. Tiêu chí đánh giá công ty Digital Marketing
              </h2>
              <p className='mb-6'>
                Khi lựa chọn công ty Digital Marketing, bạn cần xem xét các tiêu
                chí sau...
              </p>
            </article>
          </div>

          {/* Table of Contents Sidebar */}
          <div className='lg:col-span-1'>
            <div className='sticky top-[var(--header-h)]'>
              <div className='bg-gray-50 rounded-lg p-6'>
                <h3 className='font-semibold mb-4 flex items-center'>
                  📋 Nội dung chính
                </h3>
                <nav className='space-y-2'>
                  <Link
                    href='#top-5-ha-noi'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    1. Top 5 công ty Digital Marketing ở Hà Nội
                  </Link>
                  <div className='pl-4 space-y-1'>
                    <Link
                      href='#seongon'
                      className='block text-sm text-gray-600 hover:text-blue-600 py-1'
                    >
                      1.1. SEONGON
                    </Link>
                    <Link
                      href='#abc-digital'
                      className='block text-sm text-gray-600 hover:text-blue-600 py-1'
                    >
                      1.2. Công ty ABC Digital
                    </Link>
                    <Link
                      href='#xyz-marketing'
                      className='block text-sm text-gray-600 hover:text-blue-600 py-1'
                    >
                      1.3. Công ty XYZ Marketing
                    </Link>
                  </div>
                  <Link
                    href='#top-5-hcm'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    2. Top 5 công ty Digital Marketing ở TP.HCM
                  </Link>
                  <Link
                    href='#tieu-chi-danh-gia'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    3. Tiêu chí đánh giá công ty Digital Marketing
                  </Link>
                  <Link
                    href='#ket-luan'
                    className='block text-sm text-gray-700 hover:text-blue-600 py-1'
                  >
                    4. Kết luận
                  </Link>
                </nav>
              </div>

              {/* Related Articles */}
              <div className='bg-white border rounded-lg p-6 mt-6'>
                <RelatedProducts recentHref='san-pham/vach-chong-chay' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
