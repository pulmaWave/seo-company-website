import { ChevronRight } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hồ sơ năng lực',
  description: 'Tải xuống hồ sơ năng lực của công ty chúng tôi'
}
export default function CapabilityProfilePage() {
  return (
    <div>
      {/* Breadcrumb */}
      <div className='bg-secondary text-white py-4'>
        <div className='max-w-7xl mx-auto px-4'>
          <nav className='flex items-center space-x-2 text-sm'>
            <Link href='/' className='hover:underline'>
              Trang chủ
            </Link>
            <ChevronRight className='w-4 h-4' />
            <span>Hồ sơ năng lực</span>
          </nav>
        </div>
      </div>
      {/* Article Header */}
      <div className='bg-secondary text-white py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-8 text-center'>
            HỒ SƠ NĂNG LỰC | CATALOGUE
          </h1>
          <h2 className='text-center'>
            CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT
          </h2>
        </div>
      </div>
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
            className='bg-secondary text-white px-4 py-2 rounded transition-colors'
          >
            Tải xuống
          </a>
        </div>
      </div>
    </div>
  )
}
