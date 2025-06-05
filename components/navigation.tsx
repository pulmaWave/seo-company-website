// ✅ Navigation.tsx - toàn bộ navigation dùng client để xử lý active + responsive
import navigationData from '@/data/navigation.json'
import NavigationEnhancer from './navigationEnhancer'
import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='py-4 px-4 relative'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <Link href='/' className='flex items-center'>
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
        </Link>
        <NavigationEnhancer menuData={navigationData.mainMenu} />
      </div>
    </nav>
  )
}
