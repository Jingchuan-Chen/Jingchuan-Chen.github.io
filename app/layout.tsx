import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jingchuan Chen | Atmospheric Scientist',
  description: 'Jingchuan Chen studies atmospheric ice-nucleating particles, aerosol–cloud interactions, and contact freezing.',
  openGraph: {
    title: 'Jingchuan Chen | Atmospheric Scientist',
    description: 'From atmospheric particles to cloud ice and climate.',
    type: 'website',
    url: 'https://jingchuanchen.github.io',
    images: [{ url: 'https://jingchuanchen.github.io/og.png', width: 1536, height: 1024, alt: 'Jingchuan Chen — from atmospheric particles to cloud ice and climate' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jingchuan Chen | Atmospheric Scientist',
    description: 'From atmospheric particles to cloud ice and climate.',
    images: ['https://jingchuanchen.github.io/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
