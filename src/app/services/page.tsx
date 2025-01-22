export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">服务内容</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">战略咨询</h2>
          <p className="text-gray-600">帮助企业制定发展战略，优化业务流程。</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">数字化转型</h2>
          <p className="text-gray-600">助力企业实现数字化升级和转型。</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">人才发展</h2>
          <p className="text-gray-600">提供专业的人才培养和团队建设方案。</p>
        </div>
      </div>
    </div>
  )
}