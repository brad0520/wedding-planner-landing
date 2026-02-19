import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: '웨딩홀',
    subtitle: 'Wedding Venue',
    desc: '호텔, 채플, 하우스웨딩 등 커플의 취향에 맞는 최적의 공간을 엄선하여 추천합니다.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=800&fit=crop&q=80',
  },
  {
    title: '드레스 & 턱시도',
    subtitle: 'Dress & Tuxedo',
    desc: '국내외 디자이너 드레스부터 맞춤 제작까지, 완벽한 웨딩룩을 스타일링합니다.',
    image: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=600&h=800&fit=crop&q=80',
  },
  {
    title: '스튜디오 촬영',
    subtitle: 'Photo Studio',
    desc: '감성적인 웨딩 화보와 자연스러운 스냅으로 아름다운 추억을 남깁니다.',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop&q=80',
  },
  {
    title: '허니문',
    subtitle: 'Honeymoon',
    desc: '발리, 몰디브, 유럽 등 꿈꿔왔던 신혼여행을 맞춤 설계합니다.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=800&fit=crop&q=80',
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop&q=80', alt: '웨딩 세레모니' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop&q=80', alt: '웨딩 부케' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop&q=80', alt: '웨딩 드레스' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop&q=80', alt: '웨딩 링' },
  { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&h=600&fit=crop&q=80', alt: '리셉션 장식' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&q=80', alt: '웨딩 파티' },
];

const testimonials = [
  {
    name: '김지현 & 박준혁',
    date: '2025년 10월',
    text: '블라썸 웨딩 덕분에 꿈꾸던 웨딩을 할 수 있었어요. 세심한 케어와 전문적인 조언이 정말 큰 힘이 되었습니다. 주변 친구들에게도 강력히 추천하고 있어요.',
  },
  {
    name: '이수연 & 최동현',
    date: '2025년 8월',
    text: '결혼 준비가 막막했는데 블라썸 웨딩에서 A부터 Z까지 도와주셔서 스트레스 없이 준비할 수 있었어요. 허니문 플래닝도 최고였습니다!',
  },
  {
    name: '정예진 & 한승우',
    date: '2025년 5월',
    text: '웨딩홀부터 허니문까지 원스톱으로 준비하니까 정말 편했어요. 특히 드레스 추천이 완벽했습니다! 본식날 많은 분들이 칭찬해 주셨어요.',
  },
];

const processSteps = [
  {
    step: '01',
    title: '무료 상담',
    desc: '전문 플래너와의 첫 만남. 원하시는 웨딩 스타일과 예산을 상담합니다.',
  },
  {
    step: '02',
    title: '맞춤 설계',
    desc: '상담 내용을 바탕으로 커플만의 웨딩 플랜을 설계합니다.',
  },
  {
    step: '03',
    title: '준비 & 리허설',
    desc: '웨딩홀, 드레스, 촬영 등 모든 준비 과정을 함께합니다.',
  },
  {
    step: '04',
    title: '완벽한 웨딩',
    desc: '당일 전담 코디네이터가 완벽한 진행을 책임집니다.',
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop&q=80"
            alt="웨딩 세레모니"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <div className="w-16 h-px bg-champagne mx-auto mb-8" />
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase mb-6 text-white/70 font-light">
              Premium Wedding Planner
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight tracking-wide">
              당신의 완벽한<br />순간을 설계합니다
            </h1>
            <p className="text-sm md:text-base text-white/70 mb-10 max-w-lg mx-auto leading-relaxed font-light">
              10년 이상의 경험과 500쌍 이상의 성공적인 웨딩.<br />
              블라썸 웨딩이 세상에 하나뿐인 당신의 이야기를 만듭니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-champagne text-white text-sm tracking-widest uppercase hover:bg-champagne-dark transition-all duration-300"
              >
                무료 상담 예약
              </Link>
              <Link
                href="/gallery"
                className="px-8 py-4 border border-white/40 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300"
              >
                갤러리 보기
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-white/30" />
          </div>
        </section>

        {/* About Preview */}
        <section className="section bg-ivory">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <div className="relative h-[450px] md:h-[550px] rounded-sm overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop&q=80"
                    alt="블라썸 웨딩 플래너"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 md:w-40 md:h-40 bg-champagne/10 rounded-sm hidden lg:block" />
              </div>
              <div>
                <p className="section-label">About Blossom</p>
                <h2 className="section-title mb-6">
                  사랑을 꽃피우는<br />웨딩 파트너
                </h2>
                <div className="divider-gold !mx-0 !my-6" />
                <p className="text-warm-500 leading-relaxed mb-5">
                  블라썸 웨딩은 2014년 설립 이래 500쌍 이상의 커플과 함께 특별한 날을 만들어 왔습니다.
                  저희는 단순한 웨딩 대행이 아닌, 커플의 이야기를 담은 맞춤형 웨딩을 설계합니다.
                </p>
                <p className="text-warm-500 leading-relaxed mb-8">
                  전문 플래너가 처음 상담부터 웨딩 당일까지 동행하며,
                  세심한 케어로 결혼 준비의 스트레스를 모두 덜어드립니다.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div>
                    <p className="font-serif text-3xl md:text-4xl text-champagne">500+</p>
                    <p className="text-warm-400 text-xs mt-1 tracking-wide">성사 웨딩</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl md:text-4xl text-champagne">10+</p>
                    <p className="text-warm-400 text-xs mt-1 tracking-wide">경력 연수</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl md:text-4xl text-champagne">98%</p>
                    <p className="text-warm-400 text-xs mt-1 tracking-wide">고객 만족도</p>
                  </div>
                </div>
                <Link href="/about" className="btn-secondary text-sm">
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-warm-50">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Our Services</p>
              <h2 className="section-title">원스톱 웨딩 서비스</h2>
              <div className="divider-gold" />
              <p className="text-warm-400 mt-4 max-w-md mx-auto text-sm">
                웨딩홀 선정부터 허니문까지, 결혼 준비의 모든 과정을 함께합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-sm bg-white"
                >
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-champagne-light text-[10px] tracking-[0.2em] uppercase mb-1">
                        {service.subtitle}
                      </p>
                      <h3 className="font-serif text-xl text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/services" className="btn-secondary text-sm">
                서비스 상세 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-warm-800 text-white">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="text-champagne text-xs tracking-[0.25em] uppercase mb-3 font-medium">
                How It Works
              </p>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white">
                웨딩 준비 과정
              </h2>
              <div className="w-12 h-px bg-champagne mx-auto my-6" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className="text-center relative">
                  <p className="font-serif text-5xl text-champagne/20 mb-4">{item.step}</p>
                  <h3 className="font-serif text-lg text-white mb-3">{item.title}</h3>
                  <p className="text-warm-400 text-sm leading-relaxed">{item.desc}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-warm-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section bg-ivory">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Gallery</p>
              <h2 className="section-title">아름다운 순간들</h2>
              <div className="divider-gold" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((img, index) => (
                <div
                  key={img.alt}
                  className={`relative overflow-hidden rounded-sm group ${
                    index === 0 || index === 4 ? 'md:col-span-2 h-56 md:h-72' : 'h-56 md:h-72'
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <span className="text-white text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {img.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/gallery" className="btn-secondary text-sm">
                갤러리 더 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-blush-light">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Testimonials</p>
              <h2 className="section-title">고객 후기</h2>
              <div className="divider-gold" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((review) => (
                <div
                  key={review.name}
                  className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-champagne" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-warm-500 text-sm leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="border-t border-warm-100 pt-4">
                    <p className="font-medium text-warm-700 text-sm">{review.name}</p>
                    <p className="text-warm-400 text-xs mt-0.5">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/reviews" className="btn-secondary text-sm">
                후기 더 보기
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1920&h=800&fit=crop&q=80"
            alt="웨딩 장식"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container-custom text-center text-white">
            <p className="text-champagne-light text-xs tracking-[0.25em] uppercase mb-3">
              Reservation
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 tracking-wide">
              무료 상담 예약하기
            </h2>
            <div className="w-12 h-px bg-champagne mx-auto my-6" />
            <p className="text-white/70 mb-10 max-w-md mx-auto text-sm leading-relaxed">
              블라썸 웨딩과 함께 당신만의 특별한 날을 준비하세요.
              전문 플래너가 맞춤 상담을 제공합니다.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-champagne text-white text-sm tracking-widest uppercase hover:bg-champagne-dark transition-all duration-300"
            >
              상담 신청하기
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
