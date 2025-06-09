import { Metadata } from 'next'
import ArticleHeader from '@/components/breadcrumb'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: 'Giới thiệu về công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
  openGraph: {
    title: 'Giới thiệu | Trần Gia Phát',
    description: 'Giới thiệu về công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    url: 'https://www.trangiaphat.com.vn/gioi-thieu',
    images: [
      {
        url: 'https://www.trangiaphat.com.vn/gioi-thieu/thuong-hieu-tran-gia-phat.webp',
        width: 12080,
        height: 848,
        alt: 'Giới thiệu | Trần Gia Phát'
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
    'Giới thiệu',
    'Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    'Cơ khí xây dựng',
    'Giới thiệu công ty',
    'Trần Gia Phát',
    'tran gia phat'
  ],
  authors: [
    {
      name: 'Trần Gia Phát',
      url: 'https://www.trangiaphat.com.vn/'
    }
  ],
  creator: 'Trần Gia Phát',
  alternates: {
    canonical: 'https://www.trangiaphat.com.vn/gioi-thieu'
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
        title='GIỚI THIỆU CÔNG TY'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Giới thiệu' }
        ]}
      />

      {/* Article Content */}
      <section
        className='max-w-7xl mx-auto px-4 py-12'
        itemScope
        itemType='https://schema.org/AboutPage'
      >
        <meta
          itemProp='name'
          content='Giới thiệu công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát'
        />
        <meta
          itemProp='description'
          content='Giới thiệu về công ty, lịch sử phát triển, lĩnh vực hoạt động và cam kết của Trần Gia Phát.'
        />
        <h2 className='text-2xl font-bold mb-4' itemProp='headline'>
          LỊCH SỬ PHÁT TRIỂN
        </h2>
        <p className='mb-6' itemProp='about'>
          TRẦN GIA PHÁT – Từ một công ty TNHH hoạt động trong lĩnh vực Điện –
          Điện tử với sản phẩm chính là bộ lưu điện cửa cuốn và motor cửa cuốn.
          Với sự quyết liệt không ngừng nỗ lực phát triển, Trần Gia Phát đã tham
          gia và đầu tư phát triển thêm nhiều lĩnh vực sản xuất và kinh doanh
          như: Cơ khí chế tạo, gia công kéo thép, nhà thép tiền chế, gia công
          nhôm kính và đầu tư qua lĩnh vực y tế.
        </p>
        <h2 className='text-2xl font-bold mb-4'>ĐỘT PHÁ</h2>
        <p>
          Qua ngần ấy năm tìm tòi và nghiên cứu, TRẦN GIA PHÁT từng bước chuyển
          mình vươn lên thành một thương hiệu uy tín trong ngành cơ khí và phòng
          cháy chữa cháy. Sau hơn 13 năm phát triển không ngừng nghỉ, ngày
          12/04/2022 công ty đã chính thức chuyển đổi thành Công ty Cổ phần Cơ
          khí xây dựng Trần Gia Phát – mở ra một chặng đường mới chuyên nghiệp
          và quy mô hơn.
        </p>
        <div className='max-w-[1000px] mx-auto text-center bg-gray-100 rounded-lg shadow-md p-2 my-4 md:my-8 hover:shadow-lg transition-shadow duration-300'>
          <Image
            src='/gioi-thieu/thuong-hieu-tran-gia-phat.webp'
            alt='Giới thiệu Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát'
            width={1000}
            height={707}
          />
          <p className='text-sm mt-2 italic'>
            Giới thiệu Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát
          </p>
        </div>
        <h2 className='text-2xl font-bold mb-4'>LĨNH VỰC HOẠT ĐỘNG</h2>
        <p className='mb-6'>
          Chúng tôi tự hào là đơn vị tiên phong trong sản xuất và gia công sản
          phẩm liên quan đến phòng cháy chữa cháy (PCCC) như cửa cuốn chống
          cháy, kính chống cháy, trần chống cháy, màn ngăn cháy, màn ngăn khói
          và nhiều sản phẩm cơ khí khác phục vụ cho các công trình lớn nhỏ trên
          toàn quốc.
        </p>

        <h2 className='text-2xl font-bold mb-4'>CAM KẾT CỦA CHÚNG TÔI</h2>
        <p className='mb-6'>
          TRẦN GIA PHÁT luôn đặt <strong>UY TÍN - TRÁCH NHIỆM - AN TOÀN</strong>{' '}
          lên hàng đầu trong từng sản phẩm và công trình. Mỗi bộ cửa chống cháy,
          mỗi vách ngăn khói hay thiết bị PCCC đều là minh chứng cho cam kết
          vững chắc vì sự an toàn cộng đồng.
        </p>

        <h2 className='text-2xl font-bold mb-4'>GIÁ TRỊ CỐT LÕI</h2>
        <strong>
          TRẦN GIA PHÁT – SẢN XUẤT DỰA TRÊN CHỮ TÂM – KINH DOANH DỰA TRÊN CHỮ
          TÍN.
        </strong>
      </section>
    </div>
  )
}
