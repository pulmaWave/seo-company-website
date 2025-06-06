// app/components/SocialWidget.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

const items = [
  {
    href: 'https://zalo.me/0334581525',
    label: 'Zalo',
    icon: '/zalo.svg',
    bg: 'bg-[#0084FF]'
  },
  {
    href: 'https://www.facebook.com/info.trangiaphat.vn',
    label: 'Facebook',
    icon: '/facebook.svg',
    bg: 'bg-[#0084FF]'
  },
  {
    href: 'tel:0975252168',
    label: 'Hotline',
    icon: '/phone.png',
    bg: 'bg-[#FF0000]'
  }
]

export default function SocialWidget() {
  return (
    <div className='fixed right-4 top-1/3 flex flex-col gap-8 z-[60]'>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          target='_blank'
          aria-label={item.label}
          className={`group relative inline-flex h-14 w-14 items-center justify-center rounded-full ${item.bg}
                 ring-pulse transition hover:scale-105`}
        >
          <span className='absolute inset-0 flex items-center justify-center'>
            <Image
              src={item.icon}
              alt={item.label}
              width={24}
              height={24}
              className='h-[50px] w-[50px] text-white'
            />
          </span>
        </Link>
      ))}
    </div>
  )
}
