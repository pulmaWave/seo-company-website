// page này sẽ được sử dụng để hiển thị danh sách sản phẩm
import products from '@/data/products.json'
import ProductCard from '@/components/productCard'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Sản phẩm',
  description: 'Danh sách các sản phẩm'
}

export default async function ProductPage() {
  return (
    <div>
      <div className='bg-secondary text-white py-4'>
        <div className='max-w-7xl mx-auto px-4'>
          <nav
            aria-label='breadcrumb'
            className='flex items-center space-x-2 text-sm'
          >
            <ol
              className='flex items-center text-sm'
              itemScope
              itemType='https://schema.org/BreadcrumbList'
            >
              <li
                itemProp='itemListElement'
                itemScope
                itemType='https://schema.org/ListItem'
                className='flex items-center'
              >
                <Link href='/' className='hover:underline' itemProp='item'>
                  <span itemProp='name'>Trang chủ</span>
                </Link>
                <meta itemProp='position' content='1' />
                <ChevronRight className='w-4 h-4 mx-1' />
              </li>
              <li
                itemProp='itemListElement'
                itemScope
                itemType='https://schema.org/ListItem'
              >
                <span itemProp='name'>Sản phẩm</span>
                <meta itemProp='position' content='2' />
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className='bg-secondary text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-8'>
            TẤT CẢ SẢN PHẨM
          </h1>
          <h2>CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT</h2>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              name={product.name}
              slug={product.slug}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
