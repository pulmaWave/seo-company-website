// introduce company page
import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dự án',
  description: 'Danh sách các dự án của công ty'
}

export default function IntroducePage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className='bg-teal-800 text-white py-4'>
        <div className='max-w-7xl mx-auto px-4'>
          <nav className='flex items-center space-x-2 text-sm'>
            <Link href='/' className='hover:underline'>
              Trang chủ
            </Link>
            <ChevronRight className='w-4 h-4' />
            <span>Dự án</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className='bg-teal-800 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-8'>DỰ ÁN CÔNG TY</h1>
          <div className='flex flex-wrap items-center gap-6 text-sm'>
            <div className='flex items-center gap-2'>
              <span>CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className='max-w-7xl mx-auto px-4 py-12'>DỰ ÁN</div>
    </div>
  )
}
