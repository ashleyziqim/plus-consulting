export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 公司简介 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Plus Consulting</h3>
            <p className="text-gray-400">
              专业的咨询服务，助力企业发展
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">关于我们</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white">服务内容</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">联系我们</a></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="text-gray-400 space-y-2">
              <li>地址：上海市浦东新区XX路XX号</li>
              <li>电话：021-XXXXXXXX</li>
              <li>邮箱：info@plusconsulting.com</li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Plus Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}