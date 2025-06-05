import Link from 'next/link'
import navigationData from '@/data/navigation.json'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 mb-8'>
        <div className='grid md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center mb-4'>
              <Image
                src='/logo.png'
                alt='Trần Gia Phát logo'
                width={50}
                height={50}
                sizes='(max-width: 768px) 50px, 50px'
              />
              <span className='ml-2 text-xl font-bold text-primary'>
                Trần Gia Phát
              </span>
            </div>
            <p className='text-gray-300'>
              Đối tác tin cậy trong lĩnh vực Chống cháy tại Việt Nam.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Sản phẩm</h4>
            <ul className='space-y-2 text-gray-300'>
              {navigationData.footerMenu.products.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='hover:text-white'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Công ty</h4>
            <ul className='space-y-2 text-gray-300'>
              {navigationData.footerMenu.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='hover:text-white'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Tài nguyên</h4>
            <ul className='space-y-2 text-gray-300'>
              {navigationData.footerMenu.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className='hover:text-white'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-700 pt-6'>
        <div className='max-w-7xl mx-auto'>
          <p className='text-gray-400 text-sm'>
            &copy; {new Date().getFullYear()} Trần Gia Phát. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
