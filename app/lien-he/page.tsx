'use client'
import ArticleHeader from '@/components/breadcrumb'
import ContactInfoBox from '@/components/contactBox'
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
      <ArticleHeader
        title='LIÊN HỆ | TRẦN GIA PHÁT'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Liên hệ' }
        ]}
      />
      <div className='mx-auto max-w-7xl px-4 py-12 gap-4 grid grid-cols-1 md:grid-cols-2'>
        <div className='px-4 py-4'>
          <p className='mb-4 text-2xl font-bold'>THÔNG TIN LIÊN HỆ</p>
          <ContactInfoBox />
        </div>
        <div className='px-4 py-4'>
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
