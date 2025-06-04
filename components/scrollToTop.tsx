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
      className={`fixed cursor-pointer bottom-6 right-6 z-50 rounded-full bg-[#164f72] p-3 text-white shadow-lg transition-all
        hover:opacity-90 ${
          show ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  )
}
