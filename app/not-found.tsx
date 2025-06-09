import Link from 'next/link'

export default function Custom404() {
  return (
    <div className='flex items-center justify-center px-8 mb-32 mt-20'>
      <div className='text-center mt-8'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-primary tracking-widest animate-pulse'>
          404
        </h1>
        <h2 className='text-3xl md:text-4xl font-bold text-primary mt-4'>
          Đang cập nhật
        </h2>
        <Link
          href='/'
          className='inline-block mt-8 px-6 py-3 bg-primary text-white rounded-lg shadow hover:scale-105 transition-transform duration-300 font-semibold'
        >
          Quay lại trang chủ
        </Link>
      </div>
    </div>
  )
}
