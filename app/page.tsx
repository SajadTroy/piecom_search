import '@/app/page.css';

export const metadata = {
  title: "Revolutionizing Search with Advanced Technology",
  description: "Piecom, an advanced search engine, delivers cutting-edge search solutions. Experience the future of search—ultra-fast, secure, and intuitive.",
  metadataBase: new URL('https://piecom.in'),
  keywords: ['Piecom', 'Advanced Search Engine', 'High-Speed Search', 'Secure Search', 'Future of Search', 'Search Technology', 'Internet Solutions'],
  applicationName: 'Piecom',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    images: ['/img/opengraph/image.png'],
  }
};

export default function Maintenance() {
  return (
    <>
      <div className="container">
        <div className="home_container">
          <div className="search_container">
            <div className="image_logo">
              <a href="/">
                <img src="/img/logo/logo.png" alt="Piecom" />
              </a>
            </div>
            <form className="input_container" action={"/search"} method="get">
              <input type="text" placeholder="Search for websites" name="query" />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}