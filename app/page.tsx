import "@/app/page.css";
import SearchForm from "@/components/SearchForm";

// Type for metadata
interface Metadata {
  title: string;
  description: string;
  metadataBase: URL;
  keywords: string[];
  applicationName: string;
  referrer: string;
  openGraph: {
    images: string[];
  };
}

// Metadata
export const metadata: Metadata = {
  title: "Revolutionizing Search with Advanced Technology",
  description:
    "Piecom, an advanced search engine, delivers cutting-edge search solutions. Experience the future of search—ultra-fast, secure, and intuitive.",
  metadataBase: new URL("https://piecom.in"),
  keywords: [
    "Piecom",
    "Advanced Search Engine",
    "High-Speed Search",
    "Secure Search",
    "Future of Search",
    "Search Technology",
    "Internet Solutions",
  ],
  applicationName: "Piecom",
  referrer: "origin-when-cross-origin",
  openGraph: {
    images: ["/img/opengraph/image.png"],
  },
};

export default function SearchPage() {
  return (
    <div className="container">
      <div className="home_container">
        <SearchForm />
      </div>
    </div>
  );
}