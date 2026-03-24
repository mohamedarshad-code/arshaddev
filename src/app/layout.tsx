import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Footer from '@/components/Footer';
import ThemeSwitch from '@/components/ThemeSwitch';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Mohamed Arshad | Full-Stack Web Developer',
  description: 'Mohamed Arshad | Full-Stack Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body>
        <div className="aurora-bg">
          <div className="aurora-blob aurora-blob-1"></div>
          <div className="aurora-blob aurora-blob-2"></div>
          <div className="aurora-blob aurora-blob-3"></div>
          <div className="aurora-blob aurora-blob-4"></div>
          <div className="aurora-blob aurora-blob-5"></div>
          <div className="aurora-blob aurora-blob-6"></div>
          <div className="bg-grid absolute inset-0"></div>
        </div>

        <nav className="fixed left-1/2 top-6 z-[100] mx-auto w-[90%] max-w-[600px] -translate-x-1/2 rounded-full border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-md">
          <ul className="flex items-center justify-between text-sm font-medium text-slate-300">
            <li>
              <Link href="/#home" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="transition-colors hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition-colors hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="transition-colors hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-white">
                Contact
              </Link>
            </li>
            <li className="pl-4 border-l border-white/10 flex items-center">
              <ThemeSwitch />
            </li>
          </ul>
        </nav>

        <div className="relative z-10 mx-auto min-h-screen max-w-[1280px] px-5 pt-28">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
