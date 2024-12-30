import localFont from "next/font/local";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Maitri Associates",
//   description: "Maitri Associates specializes in home and office interior designing in Vadodara. Transform your space with our expert design solutions tailored to your needs.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic Meta Tags */}
        <title>Maitri Associates | Architecture And Interior Design</title>
        <meta
          name="description"
          content="Maitri Associates specializes in home and office interior designing in Vadodara. Transform your space with our expert design solutions tailored to your needs."
        />
        <meta
          name="keywords"
          content="interior design Vadodara, home interior design, office space design, Maitri Associates, interior decorators, Vadodara design firm,Architecture desing"
        />
        <meta name="author" content="Maitri Associates" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Maitri Associates | Interior Design in Vadodara"
        />
        <meta
          property="og:description"
          content="Expert interior design services for homes and offices in Vadodara. Maitri Associates brings your vision to life with elegant and functional designs."
        />
        <meta property="og:url" content="https://www.maitriassociates.in" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Maitri Associates | Interior Design in Vadodara"
        />
        <meta
          name="twitter:description"
          content="Transform your space with Maitri Associates, experts in home and office interior design in Vadodara."
        />
        <meta
          name="twitter:image"
          content="/images/architecture projects/hotel elevation at anand/main photo/1. front view.webp"
        />

        {/* Mobile-Friendly Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Robots Meta Tags */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.maitriassociates.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
