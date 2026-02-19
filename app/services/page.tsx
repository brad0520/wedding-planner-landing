import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const packages = [
  {
    name: '베이직',
    nameEn: 'Basic',
    price: '300',
    unit: '만원~',
    desc: '합리적인 비용으로 알찬 웨딩 준비',
    features: [
      '웨딩홀 추천 및 예약 대행',
      '드레스 피팅 2회',
      '스튜디오 촬영 1회',
      '메이크업 & 헤어',
      '청첩장 제작',
      '웨딩 당일 코디네이션',
    ],
    popular: false,
  },
  {
    name: '프리미엄',
    nameEn: 'Premium',
    price: '500',
    unit: '만원~',
    desc: '가장 인기 있는 완벽 밸런스 패키지',
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
    popular: true,
  },
  {
    name: '럭셔리',
    nameEn: 'Luxury',
    price: '800',
    unit: '만원~',
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
    popular: false,
  },
];

const individualServices = [
  {
    title: '웨딩홀 컨설팅',
    subtitle: 'Wedding Venue',
    desc: '호텔, 하우스웨딩, 야외웨딩 등 다양한 스타일의 웨딩홀을 엄선하여 추천합니다. 직접 방문 투어를 통해 분위기와 서비스를 꼼꼼히 비교하고, 커플에게 최적의 장소를 찾아드립니다.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&q=80',
  },
  {
    title: '드레스 & 턱시도',
    subtitle: 'Dress & Tuxedo',
    desc: '국내외 유명 디자이너 드레스부터 합리적인 렌탈 드레스까지. 체형과 피부톤, 웨딩 컨셉에 맞는 완벽한 웨딩룩을 스타일링합니다.',
    image: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&h=600&fit=crop&q=80',
  },
  {
    title: '웨딩 촬영',
    subtitle: 'Photography',
    desc: '감성적인 웨딩 화보부터 자연스러운 스냅 촬영까지. 유명 포토그래퍼와 함께 평생 간직할 아름다운 추억을 만들어 드립니다.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&q=80',
  },
  {
    title: '허니문 플래닝',
    subtitle: 'Honeymoon',
    desc: '발리, 몰디브, 유럽 등 인기 허니문 여행지부터 이색적인 신혼여행까지. 두 분의 취향에 맞는 맞춤 허니문 플랜을 제안합니다.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&q=80',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&h=800&fit=crop&q=80"
            alt="웨딩 서비스"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-champagne-light text-xs tracking-[0.3em] uppercase mb-4">Services</p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-wide">웨딩 서비스</h1>
            <div className="w-12 h-px bg-champagne mx-auto mt-6" />
          </div>
        </section>

        {/* Packages */}
        <section className="section bg-ivory">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Packages</p>
              <h2 className="section-title">웨딩 패키지</h2>
              <div className="divider-gold" />
              <p className="text-warm-400 mt-4 max-w-md mx-auto text-sm">
                커플의 예산과 니즈에 맞는 다양한 패키지를 준비했습니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-sm overflow-hidden bg-white relative transition-shadow ${
                    pkg.popular ? 'shadow-lg ring-1 ring-champagne' : 'shadow-sm hover:shadow-md'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-champagne text-white text-center text-xs py-2 tracking-wider uppercase z-10">
                      Most Popular
                    </div>
                  )}
                  <div className={`p-8 ${pkg.popular ? 'pt-12' : ''}`}>
                    <div className="text-center mb-6">
                      <p className="text-warm-400 text-xs tracking-[0.2em] uppercase mb-1">{pkg.nameEn}</p>
                      <h3 className="font-serif text-2xl text-warm-800 mb-2">{pkg.name}</h3>
                      <p className="text-warm-400 text-sm">{pkg.desc}</p>
                    </div>
                    <div className="text-center py-6 border-y border-warm-100">
                      <span className="font-serif text-4xl text-champagne">{pkg.price}</span>
                      <span className="text-warm-400 text-sm ml-1">{pkg.unit}</span>
                    </div>
                    <ul className="space-y-3 mt-6 mb-8">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-warm-500">
                          <svg className="w-4 h-4 text-champagne mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3.5 text-sm tracking-wide transition-all duration-300 ${
                        pkg.popular
                          ? 'bg-champagne text-white hover:bg-champagne-dark'
                          : 'border border-champagne text-champagne hover:bg-champagne hover:text-white'
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
        <section className="section bg-warm-50">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Individual Services</p>
              <h2 className="section-title">개별 서비스</h2>
              <div className="divider-gold" />
              <p className="text-warm-400 mt-4 max-w-md mx-auto text-sm">
                필요한 서비스만 선택하여 이용하실 수도 있습니다.
              </p>
            </div>
            <div className="space-y-16">
              {individualServices.map((service, index) => (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}
                >
                  <div className={`relative h-64 md:h-80 rounded-sm overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-champagne text-xs tracking-[0.2em] uppercase mb-2">{service.subtitle}</p>
                    <h3 className="font-serif text-2xl md:text-3xl text-warm-800 mb-4">{service.title}</h3>
                    <div className="w-8 h-px bg-champagne mb-5" />
                    <p className="text-warm-500 leading-relaxed mb-6 text-sm">{service.desc}</p>
                    <Link href="/contact" className="btn-primary text-sm">
                      상담 문의
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=800&fit=crop&q=80"
            alt="웨딩 부케"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container-custom text-center text-white">
            <h2 className="font-serif text-2xl md:text-4xl mb-4 tracking-wide">
              맞춤 상담을 받아보세요
            </h2>
            <div className="w-12 h-px bg-champagne mx-auto my-6" />
            <p className="text-white/70 mb-8 max-w-md mx-auto text-sm">
              어떤 서비스가 필요한지 잘 모르겠다면, 무료 상담을 통해 알아보세요.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-champagne text-white text-sm tracking-widest uppercase hover:bg-champagne-dark transition-all duration-300"
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
