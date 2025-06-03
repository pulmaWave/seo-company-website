'use client'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      alert('Đã gửi thành công!')
      console.log('📨 Liên hệ mới:', formData)
      setFormData({ name: '', phone: '', email: '', message: '' })
    } else {
      alert('Gửi thất bại!')
    }
  }

  return (
    <div>
      <div className='bg-teal-800 text-white py-4'>
        <div className='max-w-7xl mx-auto px-4'>
          <nav className='flex items-center space-x-2 text-sm'>
            <Link href='/' className='hover:underline'>
              Trang chủ
            </Link>
            <ChevronRight className='w-4 h-4' />
            <Link href='#' className='hover:underline'>
              Liên hệ
            </Link>
          </nav>
        </div>
      </div>
      <div className='bg-teal-800 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-8'>
            LIÊN HỆ | TRẦN GIA PHÁT
          </h1>
          <div className='flex flex-wrap items-center gap-6 text-sm'>
            <div className='flex items-center gap-2'>
              <span>CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex grid-cols-2 mx-auto max-w-7xl px-4 py-12 gap-4'>
        <div className='flex-1/2 px-4 py-12'>Địa chỉ văn phòng</div>
        <div className='flex-1/2 px-4 py-12'>
          <p className='mb-4 text-2xl font-bold'>Nhận tư vấn từ chúng tôi</p>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              name='name'
              placeholder='Họ và tên'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full border p-2 rounded'
            />
            <input
              type='tel'
              name='phone'
              placeholder='Số điện thoại'
              value={formData.phone}
              onChange={handleChange}
              required
              className='w-full border p-2 rounded'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
              className='w-full border p-2 rounded'
            />
            <textarea
              name='message'
              placeholder='Nội dung liên hệ'
              value={formData.message}
              onChange={handleChange}
              required
              className='w-full border p-2 rounded h-32'
            />
            <button
              type='submit'
              className='cursor-pointer bg-primary text-white px-4 py-2 rounded'
            >
              Gửi
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
