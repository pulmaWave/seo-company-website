import { useMemo } from 'react'
import products from '@/data/products.json'
import Image from 'next/image'
import { ProductCardProps } from './productCard'
import Link from 'next/link'

export default function RelatedProducts({
  recentHref
}: {
  recentHref: string
}) {
  function getRandomProducts(arr: ProductCardProps[], count: number) {
    recentHref = recentHref.replace('san-pham/', '')
    console.log(recentHref)
    const filtered = arr.filter((product) => product.href !== recentHref)
    const shuffled = filtered.slice().sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const relatedProducts = useMemo(() => getRandomProducts(products, 4), [])

  return (
    <div>
      <h3 className='font-semibold mb-4'>Sản phẩm liên quan</h3>
      <div className='space-y-4'>
        {relatedProducts.map((product: ProductCardProps) => (
          <Link
            href={`/san-pham/${product.href}`}
            className='block group'
            key={product.href}
          >
            <div className='flex gap-3'>
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={60}
                className='rounded object-cover'
              />
              <div>
                <h4 className='text-sm font-medium group-hover:text-blue-600 line-clamp-2'>
                  {product.name}
                </h4>
                <p className='text-xs text-gray-500 mt-1'>{'Trần Gia Phát'}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
