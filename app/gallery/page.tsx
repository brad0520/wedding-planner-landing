'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = ['전체', '웨딩홀', '드레스', '부케 & 데코', '세레모니'];

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop&q=80',
    alt: '그랜드 웨딩홀',
    category: '웨딩홀',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=600&h=800&fit=crop&q=80',
    alt: '웨딩 드레스',
    category: '드레스',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=600&fit=crop&q=80',
    alt: '웨딩 부케',
    category: '부케 & 데코',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop&q=80',
    alt: '야외 세레모니',
    category: '세레모니',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop&q=80',
    alt: '레이스 드레스',
    category: '드레스',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=600&fit=crop&q=80',
    alt: '리셉션 테이블',
    category: '부케 & 데코',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=600&fit=crop&q=80',
    alt: '웨딩 링',
    category: '세레모니',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=600&fit=crop&q=80',
    alt: '커플 포토',
    category: '세레모니',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop&q=80',
    alt: '채플 웨딩홀',
    category: '웨딩홀',
    span: 'col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&q=80',
    alt: '웨딩 파티',
    category: '세레모니',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=600&h=600&fit=crop&q=80',
    alt: '웨딩 케이크',
    category: '부케 & 데코',
    span: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=600&fit=crop&q=80',
    alt: '웨딩 준비',
    category: '드레스',
    span: '',
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredItems =
    activeCategory === '전체'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&h=800&fit=crop&q=80"
            alt="웨딩 갤러리"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4">
            <p className="text-champagne-light text-xs tracking-[0.3em] uppercase mb-4">Gallery</p>
            <h1 className="font-serif text-3xl md:text-5xl tracking-wide">웨딩 갤러리</h1>
            <div className="w-12 h-px bg-champagne mx-auto mt-6" />
          </div>
        </section>

        {/* Filter & Grid */}
        <section className="section bg-ivory">
          <div className="container-custom">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-xs tracking-wider uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-champagne text-white'
                      : 'bg-white text-warm-400 hover:text-champagne border border-warm-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry-style Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.src}
                  className={`relative overflow-hidden rounded-sm group h-52 md:h-64 lg:h-72 ${
                    item.span ? `md:${item.span}` : ''
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                    <div className="p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                      <p className="text-white text-sm font-medium">{item.alt}</p>
                      <p className="text-white/60 text-xs mt-0.5">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop&q=80"
            alt="웨딩 풍경"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 container-custom text-center text-white">
            <h2 className="font-serif text-2xl md:text-4xl mb-4 tracking-wide">
              당신의 이야기도 만들어 보세요
            </h2>
            <div className="w-12 h-px bg-champagne mx-auto my-6" />
            <p className="text-white/70 mb-8 max-w-md mx-auto text-sm">
              블라썸 웨딩과 함께 아름다운 웨딩을 준비하세요.
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
