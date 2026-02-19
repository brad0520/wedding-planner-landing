import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const reviews = [
  {
    couple: '김지현 & 박준혁',
    date: '2025년 10월 결혼',
    rating: 5,
    text: '블라썸 웨딩 덕분에 꿈꾸던 웨딩을 할 수 있었어요. 김서연 플래너님이 처음 상담부터 웨딩 당일까지 세심하게 챙겨주셔서 하나도 걱정 없이 준비할 수 있었습니다. 웨딩홀도 제가 원하던 분위기 그대로였고, 드레스도 정말 예쁜 걸로 추천해 주셨어요.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=200&h=200&fit=crop&q=80',
    pkg: '프리미엄',
  },
  {
    couple: '이수연 & 최동현',
    date: '2025년 8월 결혼',
    rating: 5,
    text: '결혼 준비가 정말 막막했는데, 블라썸 웨딩에서 A부터 Z까지 다 도와주셔서 스트레스 없이 준비할 수 있었어요. 특히 허니문 플래닝이 정말 최고였어요! 저희가 원하는 스타일을 정확히 파악하시고 완벽한 여행 코스를 짜주셨습니다.',
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=200&h=200&fit=crop&q=80',
    pkg: '럭셔리',
  },
  {
    couple: '정예진 & 한승우',
    date: '2025년 5월 결혼',
    rating: 5,
    text: '웨딩홀부터 허니문까지 원스톱으로 준비하니까 정말 편했어요. 드레스 피팅 때 스타일링 조언도 정말 도움이 많이 되었고, 본식 당일에는 코디네이터님이 완벽하게 진행해 주셔서 정말 감사했습니다.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=200&h=200&fit=crop&q=80',
    pkg: '프리미엄',
  },
  {
    couple: '윤서아 & 강민재',
    date: '2025년 3월 결혼',
    rating: 5,
    text: '가성비가 정말 좋았어요. 베이직 패키지인데도 퀄리티가 높아서 놀랐습니다. 웨딩홀 추천도 딱 맞았고, 드레스도 예산 안에서 예쁜 걸로 찾아주셨어요. 결혼 준비하는 친구들한테 꼭 추천하고 있어요.',
    image: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=200&h=200&fit=crop&q=80',
    pkg: '베이직',
  },
  {
    couple: '장하은 & 서지훈',
    date: '2024년 12월 결혼',
    rating: 5,
    text: '야외 웨딩을 원했는데 날씨 걱정이 많았어요. 블라썸 웨딩에서 플랜 A, B까지 준비해 주시고, 덕분에 날씨에 관계없이 완벽한 웨딩을 할 수 있었습니다. 데코레이션도 정말 감각적이었어요.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=200&h=200&fit=crop&q=80',
    pkg: '프리미엄',
  },
];

const overallStats = {
  average: 4.8,
  total: 500,
  five: 85,
  four: 12,
  three: 2,
  two: 1,
  one: 0,
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-champagne' : 'text-warm-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function RatingBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-warm-500 w-6 text-right">{label}</span>
      <div className="flex-1 h-1.5 bg-warm-100 rounded-full overflow-hidden">
        <div className="h-full bg-champagne rounded-full" style={{ width: `${percent}%` }} />
      </div>
      <span className="text-xs text-warm-400 w-10 text-right">{percent}%</span>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&h=800&fit=crop&q=80"
            alt="고객 후기"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-champagne-light text-xs tracking-[0.3em] uppercase mb-4">Reviews</p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-wide">고객 후기</h1>
            <div className="w-12 h-px bg-champagne mx-auto mt-6" />
          </div>
        </section>

        {/* Overall Rating */}
        <section className="py-14 bg-ivory">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto bg-white rounded-sm p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="text-center flex-shrink-0">
                <p className="font-serif text-5xl text-champagne">{overallStats.average}</p>
                <div className="flex gap-0.5 justify-center my-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-champagne" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-warm-400 text-xs">{overallStats.total}건의 후기</p>
              </div>
              <div className="flex-1 space-y-2 w-full">
                <RatingBar label="5" percent={overallStats.five} />
                <RatingBar label="4" percent={overallStats.four} />
                <RatingBar label="3" percent={overallStats.three} />
                <RatingBar label="2" percent={overallStats.two} />
                <RatingBar label="1" percent={overallStats.one} />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews List */}
        <section className="section bg-ivory pt-4">
          <div className="container-custom max-w-3xl">
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.couple} className="bg-white rounded-sm p-6 md:p-8 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-champagne/20">
                      <Image src={review.image} alt={review.couple} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="font-medium text-warm-700 text-sm">{review.couple}</h3>
                        <span className="text-[10px] bg-champagne/10 text-champagne px-3 py-1 tracking-wider uppercase w-fit">
                          {review.pkg} 패키지
                        </span>
                      </div>
                      <p className="text-warm-400 text-xs mt-0.5">{review.date}</p>
                      <div className="mt-1">
                        <StarRating rating={review.rating} />
                      </div>
                    </div>
                  </div>
                  <p className="text-warm-500 leading-relaxed text-sm">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1920&h=800&fit=crop&q=80"
            alt="웨딩 준비"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container-custom text-center text-white">
            <h2 className="font-serif text-2xl md:text-4xl mb-4 tracking-wide">
              다음 후기의 주인공이 되어보세요
            </h2>
            <div className="w-12 h-px bg-champagne mx-auto my-6" />
            <p className="text-white/70 mb-8 max-w-md mx-auto text-sm">
              블라썸 웨딩과 함께 완벽한 웨딩을 준비하세요.
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
