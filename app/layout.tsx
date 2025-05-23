import '@/app/global.css';
import Footer from "@/components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Piecom" />
        <meta name="theme-color" content="#000" />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css'></link>
      </head>
      <body>
        <div className="children">
          {children}
        </div>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-03PLFCM4J1" />
      <Analytics />
    </html>
  );
}
