// introduce company page
import { Metadata } from 'next'
import Link from 'next/link'
import ArticleHeader from '@/components/breadcrum'

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: 'Giới thiệu về công ty'
}

export default function IntroducePage() {
  return (
    <div>
      <ArticleHeader
        title='GIỚI THIỆU CÔNG TY'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Giới thiệu' }
        ]}
      />

      {/* Article Content */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <Link href='/lien-he' className='text-blue-600 hover:underline'>
          Liên hệ với chúng tôi
        </Link>
      </div>
    </div>
  )
}
