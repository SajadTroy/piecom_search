"use client";

import { useState, useRef } from "react";
import "@/app/page.css";

// Type for metadata (optional, as metadata is typically for server components)
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

// // Metadata (same as provided)
// export const metadata: Metadata = {
//   title: "Revolutionizing Search with Advanced Technology",
//   description:
//     "Piecom, an advanced search engine, delivers cutting-edge search solutions. Experience the future of search—ultra-fast, secure, and intuitive.",
//   metadataBase: new URL("https://piecom.in"),
//   keywords: [
//     "Piecom",
//     "Advanced Search Engine",
//     "High-Speed Search",
//     "Secure Search",
//     "Future of Search",
//     "Search Technology",
//     "Internet Solutions",
//   ],
//   applicationName: "Piecom",
//   referrer: "origin-when-cross-origin",
//   openGraph: {
//     images: ["/img/opengraph/image.png"],
//   },
// };

// Demo suggestions (for autocomplete)
const demoSuggestions: string[] = [
  "hot dog",
  "hot water",
  "hot yoga",
  "hot sauce",
  "hot air balloon",
  "hot springs",
  "hot chocolate",
];

export default function SearchPage() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Filter suggestions based on input
    if (value.trim()) {
      const filteredSuggestions = demoSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
    // Submit the form
    if (formRef.current) {
      formRef.current.submit();
    }
  };

  return (
    <div className="container">
      <div className="home_container">
        <div className="search_container">
          <div className="image_logo">
            <a href="/">
              <img src="/img/logo/logo.png" alt="Piecom" />
            </a>
          </div>
          <form
            ref={formRef}
            className="input_container"
            action="/search"
            method="get"
          >
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search-icon lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search for websites"
              name="query"
              value={query}
              onChange={handleSearch}
              autoComplete="off"
            />
          </form>
          {suggestions.length > 0 && (
            <div className="suggestions_container">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion_item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}