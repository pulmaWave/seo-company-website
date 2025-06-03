// introduce company page
import { Metadata } from 'next'
import ArticleHeader from '@/components/breadcrum'

export const metadata: Metadata = {
  title: 'Tin tức',
  description: 'Danh sách các tin tức của công ty'
}

export default function IntroducePage() {
  return (
    <div>
      <ArticleHeader
        title='TIN TỨC'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Tin tức', href: '/tin-tuc' }
        ]}
      />
      {/* Article Content */}
      <div className='max-w-7xl mx-auto px-4 py-12'>TIN TỨC</div>
    </div>
  )
}
