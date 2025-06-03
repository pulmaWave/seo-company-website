'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

interface DropdownItem {
  id: string
  label: string
  href: string
  description?: string
}

interface MenuItem {
  id: string
  label: string
  href: string
  hasDropdown: boolean
  dropdownItems?: DropdownItem[]
}

export default function NavigationEnhancer({
  menuData
}: {
  menuData: MenuItem[]
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const isParentActive = (item: MenuItem): boolean => {
    if (pathname.startsWith(item.href)) return true
    if (item.dropdownItems) {
      return item.dropdownItems.some((sub) => pathname.startsWith(sub.href))
    }
    return false
  }

  return (
    <div className='relative overflow-visible z-50'>
      {/* Desktop Menu */}
      <div className='hidden lg:flex items-center'>
        {menuData.map((item) => (
          <div
            key={item.id}
            className='relative'
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className={`flex items-center px-5 py-2 font-medium uppercase transition-colors ${
                isParentActive(item)
                  ? 'bg-primary-dark text-white hover:text-white'
                  : 'text-gray-800 bg-primary-light'
              } hover:text-white`}
            >
              {item.label}
              {item.hasDropdown && (
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === item.id ? 'rotate-180' : ''
                  }`}
                />
              )}
            </Link>

            {item.hasDropdown &&
              activeDropdown === item.id &&
              item.dropdownItems && (
                <ul className='absolute top-full left-0 w-60 bg-white border border-gray-200 rounded-b-md shadow-lg z-50 py-2'>
                  {item.dropdownItems.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={sub.href}
                        className={`block px-4 py-2 text-sm hover:bg-blue-950 hover:text-white transition-colors ${
                          pathname.startsWith(sub.href)
                            ? 'bg-gray-100 font-medium text-primary'
                            : 'text-gray-800'
                        }`}
                      >
                        <div>{sub.label}</div>
                        {sub.description && (
                          <div className='text-xs text-gray-500'>
                            {sub.description}
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='lg:hidden'>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='p-2 border rounded'
        >
          {mobileMenuOpen ? (
            <X className='w-6 h-6' />
          ) : (
            <Menu className='w-6 h-6' />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='fixed inset-0 z-50 bg-black bg-opacity-50'>
          <div className='absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-lg overflow-y-auto p-4'>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className='absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300'
            >
              <X className='w-5 h-5' />
            </button>

            <nav className='mt-10 space-y-4'>
              {menuData.map((item) => (
                <div key={item.id}>
                  <Link
                    href={item.href}
                    className={`block font-medium hover:text-primary transition-colors ${
                      isParentActive(item) ? 'text-primary' : 'text-gray-700'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className='ml-4 mt-1 space-y-1'>
                      {item.dropdownItems.map((sub) => (
                        <Link
                          key={sub.id}
                          href={sub.href}
                          className={`block text-sm hover:text-blue-600 transition-colors ${
                            pathname.startsWith(sub.href)
                              ? 'text-primary'
                              : 'text-gray-600'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
