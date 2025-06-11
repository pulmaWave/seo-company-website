// components/ProductCard.jsx

import Image from 'next/image'
import Link from 'next/link'

export interface ProductCardProps {
  name: string
  href: string
  image: string
  alt: string
  description: string
}

const ProductCard = (product: ProductCardProps) => {
  const { name, href, image, alt, description } = product
  return (
    <Link
      href={`/san-pham/${href}`}
      className='group block h-full' // block và h-full là quan trọng để Link hoạt động như một block và đảm bảo chiều cao card đồng đều
    >
      <div className='bg-gray-200 rounded-lg overflow-hidden flex flex-col h-full'>
        <div className='relative w-full h-48 overflow-hidden p-2'>
          <Image
            src={image}
            alt={alt}
            width={300} // Cung cấp kích thước gốc của ảnh để Next.js tối ưu
            height={300} //
            className='w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded'
          />
        </div>
        <div className='p-6 flex flex-col flex-grow'>
          <h3 className='text-xl font-semibold mb-2 group-hover:text-blue-600 uppercase'>
            {name}
          </h3>
          <p className='text-gray-600 text-sm flex-grow line-clamp-3'>
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
