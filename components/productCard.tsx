//card showing product details
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ProductCard(product: {
  name: string
  href: string
  image: string
  alt: string
}) {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300'>
      <Link href={`/san-pham/${product.href}`} className='block'>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className='w-full h-full object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300'
          loading='lazy'
        />
        <h3 className='text-lg font-semibold mb-2'>{product.name}</h3>
      </Link>
      <a
        href={`/san-pham/${product.href}`}
        className='text-primary flex items-center hover:font-semibold transition-transform duration-300'
      >
        Xem chi tiết
        <ChevronRight className='ml-1' />
      </a>
    </div>
  )
}
