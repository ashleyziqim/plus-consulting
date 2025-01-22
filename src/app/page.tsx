export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* 背景视频 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
        {/* 暗色遮罩，使文字更清晰 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 内容 */}
      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Plus Consulting</span>
              <span className="block text-blue-400">引领企业创新与发展</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              专业的咨询服务，为您的企业提供全方位的解决方案
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
              >
                联系我们
              </a>
              <a
                href="/services"
                className="inline-block px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:scale-105"
              >
                了解更多
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}