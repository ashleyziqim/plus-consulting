'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('')

  useEffect(() => {
    setCurrentPath(window.location.pathname)
  }, [])

  const isActive = (path: string) => currentPath === path

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="/" 
              className="text-xl font-bold text-blue-600 hover:scale-105 transition-transform"
            >
              Plus Consulting
            </a>
          </div>

          {/* 桌面端菜单 */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="/about" 
              className={`px-3 py-2 transition-all duration-300 ${
                isActive('/about')
                  ? 'text-blue-600 font-medium scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:scale-105'
              }`}
            >
              关于我们
            </a>
            <a 
              href="/services"
              className={`px-3 py-2 transition-all duration-300 ${
                isActive('/services')
                  ? 'text-blue-600 font-medium scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:scale-105'
              }`}
            >
              服务内容
            </a>
            <a 
              href="/contact"
              className={`px-3 py-2 transition-all duration-300 ${
                isActive('/contact')
                  ? 'text-blue-600 font-medium scale-105'
                  : 'text-gray-700 hover:text-blue-600 hover:scale-105'
              }`}
            >
              联系我们
            </a>
            <a 
              href="/contact" 
              className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              立即咨询
            </a>
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
            <a 
              href="/about" 
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive('/about')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              关于我们
            </a>
            <a 
              href="/services"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive('/services')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              服务内容
            </a>
            <a 
              href="/contact"
              className={`block px-3 py-2 rounded-md transition-colors duration-300 ${
                isActive('/contact')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              联系我们
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}