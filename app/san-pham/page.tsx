// page này sẽ được sử dụng để hiển thị danh sách sản phẩm
import products from '@/data/products.json'
import ProductCard from '@/components/productCard'
import { Metadata } from 'next'
import ArticleHeader from '@/components/breadcrumb'
import ScrollToTop from '@/components/scrollToTop'

export const metadata: Metadata = {
  title: 'Sản phẩm',
  description: 'Danh sách các sản phẩm'
}

export default async function ProductPage() {
  return (
    <div>
      <ArticleHeader
        title='SẢN PHẨM | TRẦN GIA PHÁT'
        subtitle='CÔNG TY CỔ PHẦN CƠ KHÍ XÂY DỰNG TRẦN GIA PHÁT'
        breadcrumbItems={[
          { label: 'Trang chủ', href: '/' },
          { label: 'Sản phẩm' }
        ]}
      />
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <ProductCard
              key={product.href}
              name={product.name}
              href={product.href}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}
