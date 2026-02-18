import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "블라썸 웨딩 | 당신의 완벽한 웨딩을 설계합니다",
  description:
    "블라썸 웨딩 플래너와 함께 잊을 수 없는 웨딩을 만드세요. 웨딩홀, 드레스, 스튜디오, 허니문까지 원스톱 서비스.",
  keywords: [
    "웨딩 플래너",
    "결혼 준비",
    "웨딩홀",
    "웨딩 드레스",
    "웨딩 촬영",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "블라썸 웨딩",
    title: "블라썸 웨딩 | 당신의 완벽한 웨딩을 설계합니다",
    description:
      "블라썸 웨딩 플래너와 함께 잊을 수 없는 웨딩을 만드세요. 웨딩홀, 드레스, 스튜디오, 허니문까지 원스톱 서비스.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "블라썸 웨딩 - 당신의 완벽한 웨딩을 설계합니다",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "블라썸 웨딩 | 당신의 완벽한 웨딩을 설계합니다",
    description:
      "블라썸 웨딩 플래너와 함께 잊을 수 없는 웨딩을 만드세요. 웨딩홀, 드레스, 스튜디오, 허니문까지 원스톱 서비스.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={playfair.variable}>
      <body className="min-h-screen bg-white text-dark">{children}</body>
    </html>
  );
}
