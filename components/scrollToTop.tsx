'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () =>
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

  return (
    <button
      aria-label='Lên đầu trang'
      onClick={handleClick}
      className={`group fixed cursor-pointer bottom-5 right-5 z-50 rounded-xl bg-[#164f72] p-1 text-white shadow-lg transition-all flex flex-col justify-center items-center font-bold hover:opacity-90 ${
        show ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{ width: 55, height: 55 }}
    >
      <ArrowUp
        size={16}
        strokeWidth={3}
        className='mb-1 group-hover:animate-bounce'
      />
      <span className='text-center leading-[12px]' style={{ fontSize: 9 }}>
        ĐẦU
        <br />
        TRANG
      </span>
    </button>
  )
}
