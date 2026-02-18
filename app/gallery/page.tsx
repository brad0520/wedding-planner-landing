'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const categories = ['전체', '웨딩홀', '드레스', '부케', '리셉션'];

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop',
    alt: '웨딩 드레스',
    category: '드레스',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop',
    alt: '웨딩 부케',
    category: '부케',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600&h=400&fit=crop',
    alt: '리셉션 테이블',
    category: '리셉션',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&h=800&fit=crop',
    alt: '웨딩 커플',
    category: '드레스',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
    alt: '웨딩 세레모니',
    category: '웨딩홀',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
    alt: '웨딩 베뉴',
    category: '웨딩홀',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=600&h=800&fit=crop',
    alt: '웨딩 케이크',
    category: '리셉션',
    tall: true,
  },
  {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop',
    alt: '웨딩 링',
    category: '부케',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop',
    alt: '웨딩 세레모니 전경',
    category: '웨딩홀',
    tall: false,
  },
  {
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=400&fit=crop',
    alt: '웨딩 파티',
    category: '리셉션',
    tall: false,
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredItems = activeCategory === '전체'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="section bg-blush">
          <div className="container-custom text-center">
            <p className="text-rosegold text-sm tracking-widest uppercase mb-3">Gallery</p>
            <h1 className="font-serif text-3xl md:text-5xl text-dark mb-6">
              웨딩 갤러리
            </h1>
            <p className="text-dark/60 max-w-2xl mx-auto">
              블라썸 웨딩과 함께한 아름다운 순간들을 감상하세요.
            </p>
          </div>
        </section>

        {/* Filter & Grid */}
        <section className="section bg-white">
          <div className="container-custom">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm transition-colors ${
                    activeCategory === cat
                      ? 'bg-rosegold text-white'
                      : 'bg-blush text-dark/60 hover:bg-rosegold/10 hover:text-rosegold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.src}
                  className="break-inside-avoid rounded-xl overflow-hidden group"
                >
                  <div className={`relative ${item.tall ? 'h-80 md:h-96' : 'h-48 md:h-64'}`}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                      <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-sm font-medium">{item.alt}</p>
                        <p className="text-white/70 text-xs">{item.category}</p>
                      </div>
                    </div>
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
              당신의 이야기도 만들어 보세요
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              블라썸 웨딩과 함께 아름다운 웨딩을 준비하세요.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-rosegold font-medium rounded-lg hover:bg-cream transition-colors"
            >
              무료 상담 예약
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
