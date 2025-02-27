import { Electrolize } from 'next/font/google';

import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';

import '@/styles/globals.css';
import { GalleryProvider } from '@/components/GalleryProvider';

const electrolize = Electrolize({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-electrolize',
  fallback: ['Arial', 'sans-serif'],
});

export const metadata = {
  title: 'Image Gallery',
  description: 'A modern image gallery built with Next.js',
  keywords: ['images', 'gallery', 'photos', 'nextjs'],
  openGraph: {
    title: 'Image Gallery',
    description: 'A modern image gallery built with Next.js',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <GalleryProvider>
        <body className={electrolize.variable} id='body'>
          <Header />
          {children}
          <Footer />
        </body>
      </GalleryProvider>
    </html>
  );
}
