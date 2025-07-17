import { 
  Inter, 
  Poppins, 
  Montserrat, 
  Roboto, 
  Open_Sans, 
  Lato, 
  Nunito, 
  Source_Sans_3, 
  Manrope, 
  Plus_Jakarta_Sans, 
  Space_Grotesk, 
  Outfit 
} from 'next/font/google'

// Modern, clean sans-serif - Great for body text and UI
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Versatile, friendly - Perfect for headings and modern designs
export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

// Elegant, professional - Great for corporate and luxury brands
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

// Clean, readable - Excellent for body text and minimal designs
export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

// Highly readable - Perfect for content-heavy sites
export const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

// Warm, friendly - Great for approachable brands
export const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
})

// Rounded, modern - Perfect for creative and playful designs
export const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

// Clean, contemporary - Excellent for professional applications
export const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-sans',
})

// Sleek, minimal - Great for modern web applications
export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

// Stylish, contemporary - Perfect for startups and tech companies
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
})

// Futuristic, unique - Great for tech and creative brands
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// Modern, versatile - Perfect for fashion and lifestyle brands
export const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

// Export all fonts as an object for easy access
export const fonts = {
  inter,
  poppins,
  montserrat,
  roboto,
  openSans,
  lato,
  nunito,
  sourceSans,
  manrope,
  plusJakarta,
  spaceGrotesk,
  outfit,
}

// Export font variables for Tailwind CSS configuration
export const fontVariables = [
  inter.variable,
  poppins.variable,
  montserrat.variable,
  roboto.variable,
  openSans.variable,
  lato.variable,
  nunito.variable,
  sourceSans.variable,
  manrope.variable,
  plusJakarta.variable,
  spaceGrotesk.variable,
  outfit.variable,
].join(' ')

// Utility function to get font class name
export const getFontClass = (fontName: keyof typeof fonts) => {
  return fonts[fontName].className
}

// Font combinations for different design styles
export const fontCombinations = {
  // Modern & Clean
  modern: {
    heading: poppins.className,
    body: inter.className,
  },
  
  // Professional & Corporate
  professional: {
    heading: montserrat.className,
    body: openSans.className,
  },
  
  // Friendly & Approachable  
  friendly: {
    heading: nunito.className,
    body: lato.className,
  },
  
  // Tech & Startup
  tech: {
    heading: spaceGrotesk.className,
    body: manrope.className,
  },
  
  // Creative & Stylish
  creative: {
    heading: outfit.className,
    body: plusJakarta.className,
  },
  
  // Minimal & Clean
  minimal: {
    heading: inter.className,
    body: sourceSans.className,
  },
}