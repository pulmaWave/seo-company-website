'use client'
import ArticleHeader from '@/components/breadcrumb'
import { useState } from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Liên hệ với Cổ phần Cơ khí Xây dựng Trần Gia Phát',
  openGraph: {
    title: 'Liên hệ | Trần Gia Phát',
    description: 'Liên hệ với Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    url: 'https://seo-company-website-1fes.vercel.app/lien-he',
    images: [
      {
        url: 'https://seo-company-website-1fes.vercel.app/logo.png',
        width: 130,
        height: 130,
        alt: 'Liên hệ | Trần Gia Phát'
      }
    ]
  },
  twitter: {
    title: 'Liên hệ | Trần Gia Phát',
    description: 'Liên hệ với Cổ phần Cơ khí Xây dựng Trần Gia Phát'
  },
  icons: {
    icon: 'https://seo-company-website-1fes.vercel.app/favicon.ico'
  },
  keywords: [
    'Liên hệ',
    'Công ty Cổ phần Cơ khí Xây dựng Trần Gia Phát',
    'Cơ khí xây dựng',
    'Liên hệ công ty Trần Gia Phát',
    'Trần Gia Phát',
    'tran gia phat'
  ],
  authors: [
    {
      name: 'Trần Gia Phát',
      url: 'https://seo-company-website-1fes.vercel.app/'
    }
  ],
  creator: 'Trần Gia Phát',
  alternates: {
    canonical: 'https://seo-company-website-1fes.vercel.app/gioi-thieu'
  }
}

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
      <ArticleHeader
        title='LIÊN HỆ | TRẦN GIA PHÁT'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Liên hệ' }
        ]}
      />
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
