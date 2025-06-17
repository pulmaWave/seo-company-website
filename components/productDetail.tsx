'use client'

import { useState } from 'react'
import Image from 'next/image'
import ImageModal from '@/components/imageModal'
import Link from 'next/link'

interface ProductImage {
  src: string
  alt: string
}

interface ProductProps {
  title: string
  productCode: string
  price: string
  features: string[]
  images: ProductImage[]
}

export default function ProductDetail({ product }: { product: ProductProps }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const hasMultipleImages = product.images.length > 1

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-md'>
      <div className='grid md:grid-cols-2 gap-6'>
        {/* Image section */}
        <div className='relative'>
          {/* Main image */}
          <div className='relative bg-gray-100 h-[400px] md:h-[500px] overflow-hidden'>
            <div
              className='relative w-full h-full cursor-pointer'
              onClick={openModal}
              role='button'
              tabIndex={0}
              aria-label='Open image gallery'
            >
              <Image
                src={product.images[selectedImage].src || '/placeholder.svg'}
                alt={product.images[selectedImage].alt}
                fill
                className='object-contain'
                sizes='(max-width: 768px) 100vw, 50vw'
              />

              <div className='absolute inset-0 bg-black/5 hover:bg-black/10 transition-colors flex items-center justify-center'>
                <span className='text-white text-lg font-semibold bg-black/60 px-3 py-1 rounded shadow'>
                  Click to view larger image
                </span>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          {hasMultipleImages && (
            <div className='mt-4 flex gap-2 overflow-x-auto pb-2'>
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative min-w-[80px] h-[80px] border-2 ${
                    selectedImage === index
                      ? 'border-blue-900'
                      : 'border-gray-200'
                  } rounded overflow-hidden`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Select image ${index + 1}`}
                  aria-current={selectedImage === index}
                >
                  <Image
                    src={image.src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className='object-cover'
                    sizes='80px'
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Product details section */}
        <div className='p-6'>
          <h2 className='text-3xl font-bold text-primary mb-4'>
            {product.title}
          </h2>
          <div className='h-0.5 bg-gray-200 my-2'></div>
          <div className='space-y-3'>
            {product.features.map((feature, index) => (
              <div key={index} className='flex gap-2'>
                <span className='text-primary font-bold'>
                  {hasMultipleImages ? '-' : '•'}
                </span>
                <p className='text-gray-700'>{feature}</p>
              </div>
            ))}
          </div>

          <div className='mt-8'>
            <Link
              href='tel:0975 252 168'
              target='_blank'
              aria-label='Liên hệ ngay'
              className={`bg-primary py-3 px-6 transition`}
            >
              <span className='text-white font-bold '>Liên hệ ngay</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={product.images}
        initialIndex={selectedImage}
      />
    </div>
  )
}
