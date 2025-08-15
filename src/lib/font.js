// lib/font.ts
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // normal font weights
  variable: '--font-roboto', // TailwindCSS variable
})

export const robotoMono = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: 'normal',
  variable: '--font-roboto-mono',
})

export const robotoMonoItalic = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: 'italic',
  variable: '--font-roboto-mono-italic',
})
