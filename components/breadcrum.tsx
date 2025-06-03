import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import React from 'react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <div className='bg-secondary text-white py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex items-center space-x-2 text-sm'>
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <Link href={item.href} className='hover:underline'>
                  {item.label}
                </Link>
              ) : (
                <span>{item.label}</span>
              )}
              {index < items.length - 1 && <ChevronRight className='w-4 h-4' />}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default Breadcrumb
