import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="section bg-blush">
          <div className="container-custom text-center">
            <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Contact</p>
            <h1 className="font-serif text-3xl md:text-5xl text-dark mb-6">
              문의하기
            </h1>
            <p className="text-dark/60 max-w-2xl mx-auto">
              무료 상담을 통해 당신만의 웨딩 플랜을 확인해 보세요.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-cream/30 rounded-2xl p-6 md:p-8">
                <h2 className="font-serif text-2xl text-dark mb-6">상담 신청</h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm text-dark/60 mb-2">이름 *</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="홍길동"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rosegold focus:ring-1 focus:ring-rosegold outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-dark/60 mb-2">이메일 *</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rosegold focus:ring-1 focus:ring-rosegold outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-sm text-dark/60 mb-2">연락처 *</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rosegold focus:ring-1 focus:ring-rosegold outline-none transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="date" className="block text-sm text-dark/60 mb-2">예상 웨딩 날짜</label>
                      <input
                        type="date"
                        id="date"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rosegold focus:ring-1 focus:ring-rosegold outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm text-dark/60 mb-2">문의 내용</label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="궁금하신 점이나 원하시는 웨딩 스타일을 자유롭게 작성해 주세요."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-rosegold focus:ring-1 focus:ring-rosegold outline-none transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-4"
                  >
                    상담 신청하기
                  </button>
                </form>
              </div>

              {/* Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-dark mb-6">연락처 정보</h2>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-rosegold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-rosegold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-dark mb-1">주소</h3>
                        <p className="text-dark/50 text-sm">서울시 강남구 압구정로 123, 블라썸빌딩 5층</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-rosegold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-rosegold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-dark mb-1">전화</h3>
                        <p className="text-dark/50 text-sm">02-1234-5678</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-rosegold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-rosegold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-dark mb-1">이메일</h3>
                        <p className="text-dark/50 text-sm">hello@blossomwedding.kr</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-rosegold/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-rosegold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-dark mb-1">영업시간</h3>
                        <p className="text-dark/50 text-sm">평일 10:00 ~ 19:00</p>
                        <p className="text-dark/50 text-sm">주말 예약제 운영</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-300 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <p className="text-gray-400 text-sm">지도</p>
                    <p className="text-gray-300 text-xs mt-1">서울시 강남구 압구정로 123</p>
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
