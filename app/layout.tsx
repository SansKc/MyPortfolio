import type { Metadata } from 'next';
import { Roboto, Anonymous_Pro, Cormorant_Garamond } from 'next/font/google';
import { SitePreloader } from '@/components/site-preloader';
import './globals.css';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

const anonymousPro = Anonymous_Pro({
  variable: '--font-anon-pro',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-editorial',
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'Sanskar Kc — Software Engineer, UI/UX Designer',
  description: 'Portfolio of Sanskar Kc, software engineer and UI/UX designer.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${anonymousPro.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <SitePreloader />
        {children}
      </body>
    </html>
  );
}
