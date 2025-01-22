'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里可以添加发送表单的逻辑
    console.log('表单数据：', formData)
    alert('消息已发送！')
    setFormData({ name: '', email: '', message: '' }) // 重置表单
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-16"> {/* 添加 mt-16 来避免被导航栏遮挡 */}
      <h1 className="text-3xl font-bold mb-6">联系我们</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 联系信息 */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">联系方式</h2>
          <div className="space-y-3">
            <p className="text-gray-600">地址：上海市浦东新区XX路XX号</p>
            <p className="text-gray-600">电话：021-XXXXXXXX</p>
            <p className="text-gray-600">邮箱：info@plusconsulting.com</p>
          </div>
        </div>

        {/* 联系表单 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">发送消息</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">姓名</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">邮箱</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">消息</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              发送消息
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}