import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blush">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="font-serif text-2xl text-rosegold mb-4">Blossom Wedding</h3>
            <p className="text-dark/60 text-sm leading-relaxed max-w-sm">
              블라썸 웨딩은 10년 이상의 경험으로 당신의 특별한 날을 완벽하게 만들어 드립니다.
              웨딩홀, 드레스, 스튜디오, 허니문까지 원스톱으로 준비하세요.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-rosegold/10 flex items-center justify-center text-rosegold hover:bg-rosegold hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-rosegold/10 flex items-center justify-center text-rosegold hover:bg-rosegold hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" aria-label="Blog" className="w-10 h-10 rounded-full bg-rosegold/10 flex items-center justify-center text-rosegold hover:bg-rosegold hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm-1 11H6V9h12v2zm0 4H6v-2h12v2zm-4 4H6v-2h8v2zm4-12H6V5h12v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-dark mb-4">바로가기</h4>
            <ul className="space-y-3 text-sm text-dark/60">
              <li><Link href="/about" className="hover:text-rosegold transition-colors">회사 소개</Link></li>
              <li><Link href="/services" className="hover:text-rosegold transition-colors">서비스</Link></li>
              <li><Link href="/gallery" className="hover:text-rosegold transition-colors">갤러리</Link></li>
              <li><Link href="/reviews" className="hover:text-rosegold transition-colors">고객 후기</Link></li>
              <li><Link href="/contact" className="hover:text-rosegold transition-colors">문의하기</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-dark mb-4">연락처</h4>
            <ul className="space-y-3 text-sm text-dark/60">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-rosegold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                서울시 강남구 압구정로 123, 블라썸빌딩 5층
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-rosegold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                02-1234-5678
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-rosegold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                hello@blossomwedding.kr
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-rosegold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                평일 10:00 ~ 19:00 / 주말 예약제
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-rosegold/10 mt-10 pt-8 text-sm text-center text-dark/40">
          <p>&copy; 2026 Blossom Wedding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
