import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const team = [
  {
    name: '김서연',
    role: '대표 플래너',
    desc: '10년 이상의 웨딩 플래닝 경력으로 커플의 이야기를 담은 맞춤형 웨딩을 설계합니다.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&q=80',
  },
  {
    name: '박지은',
    role: '시니어 플래너',
    desc: '디테일한 스타일링과 공간 연출의 전문가. 감각적인 웨딩 데코레이션을 담당합니다.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80',
  },
  {
    name: '이하늘',
    role: '코디네이터',
    desc: '웨딩 당일 현장 총괄 전문가. 완벽한 진행으로 잊을 수 없는 하루를 만듭니다.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop&q=80',
  },
];

const stats = [
  { number: '500+', label: '성사된 웨딩' },
  { number: '10+', label: '경력 연수' },
  { number: '98%', label: '고객 만족도' },
  { number: '50+', label: '제휴 업체' },
];

const values = [
  {
    title: '맞춤 설계',
    desc: '커플의 개성과 이야기를 담은 세상에 하나뿐인 웨딩을 설계합니다. 획일화된 웨딩이 아닌, 당신만의 특별함을 만듭니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: '신뢰와 품질',
    desc: '검증된 프리미엄 제휴업체만 추천하며, 최고의 품질과 합리적인 비용 모두를 보장합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: '함께하는 여정',
    desc: '첫 상담부터 웨딩 당일, 그리고 그 이후까지. 모든 과정을 함께 동행하는 진정한 파트너입니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&h=800&fit=crop&q=80"
            alt="블라썸 웨딩 소개"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-champagne-light text-xs tracking-[0.3em] uppercase mb-4">About Us</p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-wide">블라썸 웨딩 소개</h1>
            <div className="w-12 h-px bg-champagne mx-auto mt-6" />
          </div>
        </section>

        {/* Story Section */}
        <section className="section bg-ivory">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative h-[400px] md:h-[520px] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop&q=80"
                  alt="블라썸 웨딩 스토리"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="section-label">Our Story</p>
                <h2 className="section-title mb-4">
                  사랑의 시작,<br />블라썸의 약속
                </h2>
                <div className="divider-gold !mx-0 !my-5" />
                <p className="text-warm-500 leading-relaxed mb-4">
                  블라썸 웨딩은 &ldquo;모든 커플에게는 그들만의 이야기가 있다&rdquo;는 믿음에서 시작되었습니다.
                  획일화된 웨딩이 아닌, 커플의 개성과 사랑의 이야기를 담은 맞춤형 웨딩을 설계합니다.
                </p>
                <p className="text-warm-500 leading-relaxed mb-4">
                  저희는 단순한 웨딩 대행 서비스가 아닙니다. 첫 만남부터 웨딩 당일까지,
                  그리고 그 이후까지 커플과 함께하는 진정한 파트너입니다.
                </p>
                <p className="text-warm-500 leading-relaxed">
                  10년이 넘는 시간 동안 축적된 노하우와 50여 곳 이상의 프리미엄 제휴업체 네트워크로,
                  최고의 품질과 합리적인 비용 모두를 보장합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 md:py-20 bg-warm-800">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-4xl md:text-5xl text-champagne mb-2">{stat.number}</p>
                  <p className="text-warm-400 text-xs tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section bg-blush-light">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Our Philosophy</p>
              <h2 className="section-title">우리의 철학</h2>
              <div className="divider-gold" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center bg-white p-8 rounded-sm">
                  <div className="w-14 h-14 bg-champagne/10 rounded-full flex items-center justify-center mx-auto mb-5 text-champagne">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-lg text-warm-800 mb-3">{value.title}</h3>
                  <p className="text-warm-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section bg-ivory">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Our Team</p>
              <h2 className="section-title">전문 플래너</h2>
              <div className="divider-gold" />
              <p className="text-warm-400 mt-4 max-w-md mx-auto text-sm">
                경험 풍부한 전문 플래너가 당신의 웨딩을 완벽하게 설계합니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="relative w-56 h-64 mx-auto rounded-sm overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-warm-800 mb-1">{member.name}</h3>
                  <p className="text-champagne text-xs tracking-wider uppercase mb-3">{member.role}</p>
                  <p className="text-warm-400 text-sm max-w-xs mx-auto leading-relaxed">{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=800&fit=crop&q=80"
            alt="웨딩 세레모니"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container-custom text-center text-white">
            <h2 className="font-serif text-2xl md:text-4xl mb-4 tracking-wide">
              블라썸 웨딩과 함께하세요
            </h2>
            <div className="w-12 h-px bg-champagne mx-auto my-6" />
            <p className="text-white/70 mb-8 max-w-md mx-auto text-sm">
              무료 상담을 통해 당신만의 웨딩 플랜을 확인해 보세요.
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
