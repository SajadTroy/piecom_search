// app/not-found.js (or pages/404.js for older Next.js versions)
import '@/app/not-found.css';

export const metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you're looking for does not exist. Explore our cutting-edge technology at GrovixLab.",
  metadataBase: new URL('https://piecom.in'),
  keywords: ['GrovixLab', '404 Error', 'Page Not Found', 'Technology', 'Innovation'],
  applicationName: 'GrovixLab',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    images: ['/img/opengraph/404.png'], // Update with actual image path
  },
};

export default function Custom404({ status = '404', message = 'The requested page was not found on this server' }) {
  return (
    <div className="children_not">
      <div data-body>
        <a href="/" aria-label="GrovixLab">
          <span className="logo" id='logo' />
        </a>
        <p>
          <b>{status}.</b> <ins>That's an error.</ins>
        </p>
        <p>
          {message}. <ins>That's all we know.</ins>
        </p>
      </div>
    </div>
  );
}