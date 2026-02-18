import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const packages = [
  {
    name: '베이직 패키지',
    price: '3,000,000',
    desc: '합리적인 비용으로 알찬 웨딩 준비',
    features: [
      '웨딩홀 추천 및 예약 대행',
      '드레스 피팅 2회',
      '스튜디오 촬영 1회',
      '메이크업 & 헤어',
      '청첩장 제작',
      '웨딩 당일 코디네이션',
    ],
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
    popular: false,
  },
  {
    name: '프리미엄 패키지',
    price: '5,000,000',
    desc: '인기 No.1, 완벽한 밸런스의 웨딩',
    features: [
      '베이직 패키지 전체 포함',
      '웨딩홀 3곳 비교 투어',
      '드레스 피팅 4회 (본식+촬영)',
      '프리미엄 스튜디오 촬영',
      '본식 스냅 촬영',
      '부케 & 꽃 장식',
      '하객 관리 서비스',
      '전담 플래너 배정',
    ],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    popular: true,
  },
  {
    name: '럭셔리 패키지',
    price: '8,000,000',
    desc: '프리미엄 웨딩의 모든 것',
    features: [
      '프리미엄 패키지 전체 포함',
      '프리미엄 웨딩홀 VIP 예약',
      '해외 디자이너 드레스 대여',
      '야외 촬영 + 스튜디오 촬영',
      '영상 촬영 & 편집',
      '하객 답례품 큐레이션',
      '허니문 플래닝',
      '웨딩 전 과정 VIP 케어',
    ],
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop',
    popular: false,
  },
];

const individualServices = [
  {
    title: '웨딩홀',
    desc: '호텔, 하우스웨딩, 야외웨딩 등 다양한 스타일의 웨딩홀을 엄선하여 추천합니다. 직접 방문 투어로 최적의 장소를 찾아드립니다.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
  },
  {
    title: '드레스',
    desc: '국내외 유명 디자이너 드레스부터 합리적인 렌탈 드레스까지. 체형과 스타일에 맞는 완벽한 드레스를 찾아드립니다.',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop',
  },
  {
    title: '스튜디오',
    desc: '감성적인 웨딩 화보부터 자연스러운 스냅 촬영까지. 최고의 포토그래퍼와 함께 아름다운 추억을 남겨보세요.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop',
  },
  {
    title: '허니문',
    desc: '발리, 몰디브, 유럽 등 인기 허니문 여행지부터 이색적인 신혼여행까지. 맞춤 허니문 플랜을 제안합니다.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="section bg-blush">
          <div className="container-custom text-center">
            <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Services</p>
            <h1 className="font-serif text-3xl md:text-5xl text-dark mb-6">
              웨딩 서비스
            </h1>
            <p className="text-dark/60 max-w-2xl mx-auto">
              블라썸 웨딩의 전문 플래너가 결혼 준비의 모든 과정을 함께합니다.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Packages</p>
              <h2 className="font-serif text-2xl md:text-4xl text-dark">
                웨딩 패키지
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-2xl overflow-hidden border ${
                    pkg.popular ? 'border-rosegold shadow-lg scale-[1.02]' : 'border-gray-100 shadow-sm'
                  } relative`}
                >
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10 bg-rosegold text-white text-xs px-3 py-1 rounded-full">
                      인기
                    </div>
                  )}
                  <div className="relative h-48">
                    <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-6 text-white">
                      <h3 className="font-serif text-xl">{pkg.name}</h3>
                      <p className="text-white/80 text-sm">{pkg.desc}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-center mb-6">
                      <span className="font-serif text-3xl text-rosegold">{pkg.price}</span>
                      <span className="text-dark/40 text-sm">원~</span>
                    </p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-dark/60">
                          <svg className="w-4 h-4 text-rosegold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 rounded-lg font-medium transition-colors ${
                        pkg.popular
                          ? 'bg-rosegold text-white hover:bg-rosegold-dark'
                          : 'border border-rosegold text-rosegold hover:bg-rosegold hover:text-white'
                      }`}
                    >
                      상담 신청
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Services */}
        <section className="section bg-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Individual Services</p>
              <h2 className="font-serif text-2xl md:text-4xl text-dark">
                개별 서비스
              </h2>
              <p className="text-dark/50 mt-4 max-w-lg mx-auto">
                필요한 서비스만 선택하여 이용하실 수도 있습니다.
              </p>
            </div>
            <div className="space-y-12">
              {individualServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 className="font-serif text-2xl md:text-3xl text-dark mb-4">{service.title}</h3>
                    <p className="text-dark/60 leading-relaxed mb-6">{service.desc}</p>
                    <Link href="/contact" className="btn-primary">
                      상담 문의
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-rosegold text-white">
          <div className="container-custom text-center">
            <h2 className="font-serif text-2xl md:text-4xl mb-4">
              맞춤 상담을 받아보세요
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              어떤 서비스가 필요한지 잘 모르겠다면, 무료 상담을 통해 알아보세요.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-rosegold font-medium rounded-lg hover:bg-cream transition-colors"
            >
              무료 상담 예약
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
