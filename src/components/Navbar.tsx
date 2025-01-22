'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold text-blue-600 hover:scale-105 transition-transform"
            >
              Plus Consulting
            </Link>
          </div>

          {/* 桌面端菜单 */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/about" 
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              关于我们
            </Link>
            <Link 
              href="/services"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              服务内容
            </Link>
            <Link 
              href="/contact"
              className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              联系我们
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              立即咨询
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        <div 
          className={`md:hidden transition-all duration-300 ${
            isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              关于我们
            </Link>
            <Link 
              href="/services"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              服务内容
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}