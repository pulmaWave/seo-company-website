import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface ArticleHeaderProps {
  title: string
  subtitle: string
  breadcrumbItems: BreadcrumbItem[]
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  subtitle,
  breadcrumbItems
}) => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className='bg-gray-800 text-white py-4'>
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
              {breadcrumbItems.map((item, index) => (
                <li
                  key={index}
                  itemProp='itemListElement'
                  itemScope
                  itemType='https://schema.org/ListItem'
                  className='flex items-center'
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className='hover:underline'
                      itemProp='item'
                    >
                      <span itemProp='name'>{item.label}</span>
                    </Link>
                  ) : (
                    <span itemProp='name'>{item.label}</span>
                  )}
                  <meta itemProp='position' content={String(index + 1)} />
                  {index < breadcrumbItems.length - 1 && (
                    <ChevronRight className='w-4 h-4 mx-1 mt-1' />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
      {/* Article Header */}
      <div className='bg-secondary text-white py-12'>
        <div className='max-w-7xl mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-8 leading-tight'>
            {title}
          </h1>
          <div className='flex flex-wrap items-center gap-6 text-sm'>
            <div className='flex items-center gap-2'>
              <span>{subtitle}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleHeader
