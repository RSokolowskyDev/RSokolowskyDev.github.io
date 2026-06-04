import { Roboto, Orbitron } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const orbitron = Orbitron({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
});

export default function RootLayout({children}) {
  return (
    <html lang="en" className={orbitron.variable}>
    <body className={roboto.className}>{children}</body>
    </html>
  )
}
