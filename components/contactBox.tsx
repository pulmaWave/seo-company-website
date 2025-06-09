import React from 'react'

export default function ContactInfoBox() {
  return (
    <div className='bg-gray-100 shadow rounded p-6 '>
      <h2 className='text-xl md:text-2xl font-bold text-sky-700 mb-3 uppercase'>
        CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT
      </h2>
      <div className='space-y-1 text-base'>
        <div>
          <span className='font-semibold text-sky-700'>Địa chỉ:</span> 25 Đ. Số
          69 - TML, Phường Thạnh Mỹ Lợi, Thủ Đức, Hồ Chí Minh
        </div>
        <div>
          <span className='font-semibold text-sky-700'>Chi nhánh Đà Nẵng:</span>{' '}
          353 Đ. Nguyễn Văn Linh, Thạc Gián, Thanh Khê, Đà Nẵng
        </div>
        <div>
          <span className='font-semibold text-sky-700'>Chi nhánh Hà Nội:</span>{' '}
          M02 - L07, KĐT Dương Nội, La Khê, Hà Đông, Hà Nội
        </div>
        <div>
          <span className='font-semibold text-sky-700'>Hotline:</span> (+84) 975
          252 168
        </div>
        <div>
          <span className='font-semibold text-sky-700'>Email:</span>{' '}
          <a
            href='mailto:trangiaphat.corp@gmail.com'
            className='italic text-gray-700 hover:underline'
          >
            trangiaphat.corp@gmail.com
          </a>
        </div>
        <div>
          <span className='font-semibold text-sky-700'>Website:</span>{' '}
          <a
            href='https://trangiaphat.vn'
            target='_blank'
            rel='noopener noreferrer'
            className='italic text-gray-700 hover:underline'
          >
            trangiaphat.vn
          </a>
        </div>
      </div>
    </div>
  )
}
