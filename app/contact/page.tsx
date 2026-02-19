import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1525772764200-be829a350797?w=1920&h=800&fit=crop&q=80"
            alt="상담 문의"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-champagne-light text-xs tracking-[0.3em] uppercase mb-4">Contact</p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-wide">상담 문의</h1>
            <div className="w-12 h-px bg-champagne mx-auto mt-6" />
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section bg-ivory">
          <div className="container-custom">
            <div className="text-center mb-14">
              <p className="section-label">Reservation</p>
              <h2 className="section-title">무료 상담 예약</h2>
              <div className="divider-gold" />
              <p className="text-warm-400 mt-4 max-w-md mx-auto text-sm">
                아래 양식을 작성해 주시면 전문 플래너가 빠르게 연락드리겠습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
              {/* Form */}
              <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-sm shadow-sm">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-warm-500 mb-2 tracking-wide uppercase">
                        이름 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="홍길동"
                        className="w-full px-4 py-3.5 border border-warm-200 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors text-sm bg-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs text-warm-500 mb-2 tracking-wide uppercase">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3.5 border border-warm-200 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors text-sm bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs text-warm-500 mb-2 tracking-wide uppercase">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                        className="w-full px-4 py-3.5 border border-warm-200 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors text-sm bg-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-xs text-warm-500 mb-2 tracking-wide uppercase">
                        예상 웨딩 날짜
                      </label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-3.5 border border-warm-200 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors text-sm bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="package" className="block text-xs text-warm-500 mb-2 tracking-wide uppercase">
                      관심 패키지
                    </label>
                    <select
                      id="package"
                      className="w-full px-4 py-3.5 border border-warm-200 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors text-sm bg-transparent text-warm-700"
                    >
                      <option value="">선택해 주세요</option>
                      <option value="basic">베이직 패키지</option>
                      <option value="premium">프리미엄 패키지</option>
                      <option value="luxury">럭셔리 패키지</option>
                      <option value="individual">개별 서비스</option>
                      <option value="undecided">아직 미정</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-warm-500 mb-2 tracking-wide uppercase">
                      문의 내용
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="궁금하신 점이나 원하시는 웨딩 스타일을 자유롭게 작성해 주세요."
                      className="w-full px-4 py-3.5 border border-warm-200 focus:border-champagne focus:ring-1 focus:ring-champagne outline-none transition-colors text-sm bg-transparent resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-champagne text-white text-sm tracking-widest uppercase hover:bg-champagne-dark transition-all duration-300"
                  >
                    상담 신청하기
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h3 className="font-serif text-xl text-warm-800 mb-6">연락처 정보</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-champagne/30 flex items-center justify-center flex-shrink-0 text-champagne">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-warm-700 mb-1">주소</h4>
                        <p className="text-warm-400 text-sm">서울시 강남구 압구정로 123<br />블라썸빌딩 5층</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-champagne/30 flex items-center justify-center flex-shrink-0 text-champagne">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-warm-700 mb-1">전화</h4>
                        <p className="text-warm-400 text-sm">02-1234-5678</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-champagne/30 flex items-center justify-center flex-shrink-0 text-champagne">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-warm-700 mb-1">이메일</h4>
                        <p className="text-warm-400 text-sm">hello@blossomwedding.kr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-champagne/30 flex items-center justify-center flex-shrink-0 text-champagne">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-warm-700 mb-1">영업시간</h4>
                        <p className="text-warm-400 text-sm">
                          평일 10:00 - 19:00<br />
                          주말 예약제 운영
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-warm-100 h-48 flex items-center justify-center rounded-sm">
                  <div className="text-center">
                    <svg className="w-10 h-10 text-warm-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-warm-300 text-xs">서울시 강남구 압구정로 123</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
