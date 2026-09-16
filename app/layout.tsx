import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jingchuan Chen (陈景川) | Aerosol–Cloud Interactions & Ice Nucleation',
  description: 'Jingchuan Chen studies aerosol–cloud interactions, focusing on how ice-nucleating particles initiate cloud ice formation and shape cloud and climate processes.',
  openGraph: {
    title: 'Jingchuan Chen (陈景川) | Aerosol–Cloud Interactions & Ice Nucleation',
    description: 'Jingchuan Chen studies aerosol–cloud interactions, focusing on how ice-nucleating particles initiate cloud ice formation and shape cloud and climate processes.',
    type: 'website',
    url: 'https://jingchuan-chen.github.io',
    images: [{ url: 'https://jingchuan-chen.github.io/og.png', width: 1536, height: 1024, alt: 'Jingchuan Chen — from atmospheric particles to cloud ice and climate' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jingchuan Chen (陈景川) | Aerosol–Cloud Interactions & Ice Nucleation',
    description: 'Jingchuan Chen studies aerosol–cloud interactions, focusing on how ice-nucleating particles initiate cloud ice formation and shape cloud and climate processes.',
    images: ['https://jingchuan-chen.github.io/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
