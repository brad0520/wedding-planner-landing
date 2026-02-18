import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  {
    title: '웨딩홀',
    desc: '로맨틱한 분위기의 최상급 웨딩홀을 엄선하여 추천해 드립니다.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
    ),
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
  },
  {
    title: '드레스',
    desc: '당신의 체형과 스타일에 맞는 드레스를 찾아 드립니다.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
    ),
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop',
  },
  {
    title: '스튜디오',
    desc: '감성적인 웨딩 촬영으로 아름다운 추억을 남겨보세요.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=400&fit=crop',
  },
  {
    title: '허니문',
    desc: '신혼여행의 모든 것, 맞춤형 허니문 플랜을 제안합니다.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    ),
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
  },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop', alt: '웨딩 세레모니' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop', alt: '웨딩 부케' },
  { src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop', alt: '리셉션' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop', alt: '웨딩 링' },
];

const testimonials = [
  {
    name: '김지현 & 박준혁',
    date: '2025년 10월',
    rating: 5,
    text: '블라썸 웨딩 덕분에 꿈꾸던 웨딩을 할 수 있었어요. 세심한 케어와 전문적인 조언이 정말 큰 힘이 되었습니다.',
  },
  {
    name: '이수연 & 최동현',
    date: '2025년 8월',
    rating: 5,
    text: '결혼 준비가 막막했는데 블라썸 웨딩에서 A부터 Z까지 도와주셔서 스트레스 없이 준비할 수 있었어요.',
  },
  {
    name: '정예진 & 한승우',
    date: '2025년 5월',
    rating: 5,
    text: '웨딩홀부터 허니문까지 원스톱으로 준비하니까 정말 편했어요. 특히 드레스 추천이 완벽했습니다!',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-rosegold' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[600px] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop"
            alt="웨딩 세레모니"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-white/80">
              Blossom Wedding
            </p>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              당신의 완벽한 순간을<br />설계합니다
            </h1>
            <p className="text-base md:text-lg text-white/80 mb-8 max-w-xl mx-auto">
              10년 이상의 경험을 바탕으로, 세상에 하나뿐인<br className="hidden md:block" />
              당신만의 웨딩을 만들어 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-rosegold text-white rounded-lg hover:bg-rosegold-dark transition-colors font-medium">
                무료 상담 예약하기
              </Link>
              <Link href="/services" className="px-8 py-4 border border-white/50 text-white rounded-lg hover:bg-white/10 transition-colors font-medium">
                서비스 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Our Services</p>
              <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl text-dark">
                원스톱 웨딩 서비스
              </h2>
              <p className="text-dark/50 mt-4 max-w-lg mx-auto">
                웨딩홀 선정부터 허니문까지, 결혼 준비의 모든 과정을 함께합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <div key={service.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-rosegold mb-3">{service.icon}</div>
                    <h3 className="font-serif text-xl mb-2">{service.title}</h3>
                    <p className="text-dark/50 text-sm">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="section bg-blush">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop"
                  alt="웨딩 플래너"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-rosegold text-sm tracking-widest uppercase mb-3">About Us</p>
                <h2 className="font-serif text-2xl md:text-4xl text-dark mb-6">
                  블라썸 웨딩,<br />사랑을 꽃피우다
                </h2>
                <p className="text-dark/60 leading-relaxed mb-6">
                  블라썸 웨딩은 2014년 설립 이래 500쌍 이상의 커플과 함께 특별한 날을 만들어 왔습니다.
                  저희는 단순한 웨딩 대행이 아닌, 커플의 이야기를 담은 맞춤형 웨딩을 설계합니다.
                </p>
                <p className="text-dark/60 leading-relaxed mb-8">
                  전문 플래너가 처음 상담부터 웨딩 당일까지 함께하며,
                  세심한 케어로 결혼 준비의 모든 스트레스를 덜어드립니다.
                </p>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <p className="font-serif text-3xl text-rosegold">500+</p>
                    <p className="text-dark/50 text-sm mt-1">성사 웨딩</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-3xl text-rosegold">10+</p>
                    <p className="text-dark/50 text-sm mt-1">경력 연수</p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-3xl text-rosegold">98%</p>
                    <p className="text-dark/50 text-sm mt-1">고객 만족도</p>
                  </div>
                </div>
                <Link href="/about" className="btn-secondary">
                  자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Gallery</p>
              <h2 className="font-serif text-2xl md:text-4xl text-dark">
                아름다운 순간들
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryImages.map((img) => (
                <div key={img.alt} className="relative h-48 md:h-64 rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/gallery" className="btn-secondary">
                갤러리 더 보기
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Testimonials</p>
              <h2 className="font-serif text-2xl md:text-4xl text-dark">
                고객 후기
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((review) => (
                <div key={review.name} className="bg-white rounded-2xl p-8 shadow-sm">
                  <StarRating rating={review.rating} />
                  <p className="text-dark/60 mt-4 mb-6 leading-relaxed text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-dark">{review.name}</p>
                    <p className="text-dark/40 text-sm">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-rosegold text-white">
          <div className="container-custom text-center">
            <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl mb-4">
              무료 상담 예약하기
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              블라썸 웨딩과 함께 당신의 특별한 날을 준비하세요.<br />
              전문 플래너가 맞춤 상담을 제공해 드립니다.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-rosegold font-medium rounded-lg hover:bg-cream transition-colors"
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
