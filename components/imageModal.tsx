'use client'

import type React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface ProductImage {
  src: string
  alt: string
}

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: ProductImage[]
  initialIndex: number
}

export default function ImageModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchEndX, setTouchEndX] = useState<number | null>(null)

  // Reset current index when modal opens or initialIndex changes
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? images.length - 1 : prevIndex - 1
    )
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - 1 ? 0 : prevIndex + 1
    )
  }

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX)
    setTouchEndX(null)
  }

  function handleTouchMove(e: React.TouchEvent) {
    setTouchEndX(e.touches[0].clientX)
  }

  function handleTouchEnd() {
    if (touchStartX === null || touchEndX === null) return

    const diffX = touchStartX - touchEndX

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext()
      } else {
        handlePrevious()
      }
    }

    setTouchStartX(null)
    setTouchEndX(null)
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-51 bg-black bg-opacity-90 flex items-center justify-center'>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 z-10 text-white bg-black/50 p-2 rounded-full hover:bg-black/70'
        aria-label='Close modal'
      >
        <X className='w-6 h-6' />
      </button>

      <div
        className='relative w-full h-full flex items-center justify-center'
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className='relative w-full h-full md:w-4/5 md:h-4/5'>
          <Image
            src={images[currentIndex].src || '/placeholder.svg'}
            alt={images[currentIndex].alt}
            fill
            className='object-contain'
            sizes='100vw'
            priority
          />
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className='absolute left-2 md:left-8 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 z-20'
            aria-label='Previous image'
            type='button'
          >
            <ChevronLeft className='w-6 h-6' />
          </button>

          <button
            onClick={handleNext}
            className='absolute right-2 md:right-8 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 z-20'
            aria-label='Next image'
            type='button'
          >
            <ChevronRight className='w-6 h-6' />
          </button>

          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm'>
            {currentIndex + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  )
}
