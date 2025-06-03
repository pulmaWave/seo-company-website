// introduce company page
import { Metadata } from 'next'
import ArticleHeader from '@/components/breadcrum'

export const metadata: Metadata = {
  title: 'Dự án',
  description: 'Danh sách các dự án của công ty'
}

export default function IntroducePage() {
  return (
    <div>
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
