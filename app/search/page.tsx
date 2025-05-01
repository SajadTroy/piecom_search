"use client";

import "@/app/search/page.css";
import SearchResultsHeader from "@/components/SearchResultsHeader";
import { useSearchParams } from "next/navigation";

// Dummy search results data (replace with real API data)
const dummyResults = [
  {
    title: "Example Website",
    url: "https://www.example.com",
    description:
      "Example.com is a placeholder domain used for testing and demonstration purposes.",
    favicon: "https://www.google.com/s2/favicons?domain=example.com",
  },
  {
    title: "Wikipedia",
    url: "https://www.wikipedia.org",
    description:
      "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world.",
    favicon: "https://www.google.com/s2/favicons?domain=wikipedia.org",
  },
  {
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description:
      "MDN Web Docs provides documentation for web developers, covering HTML, CSS, JavaScript, and more.",
    favicon: "https://www.google.com/s2/favicons?domain=developer.mozilla.org",
  },
  {
    title: "Stack Overflow",
    url: "https://stackoverflow.com",
    description:
      "Stack Overflow is a question-and-answer website for professional and enthusiast programmers.",
    favicon: "https://www.google.com/s2/favicons?domain=stackoverflow.com",
  },
];

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <div className="search-results-page">
      <SearchResultsHeader />
      <main className="results-container">
        <h1 className="results-title">
          Search Results for &quot;{query || "All"}&quot;
        </h1>
        <div className="results-list">
          {dummyResults.map((result, index) => (
            <div key={index} className="result-item">
              <div className="result-favicon">
                <img src={result.favicon} alt={`${result.title} favicon`} />
              </div>
              <div className="result-content">
                <a
                  href={result.url}
                  className="result-title"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {result.title}
                </a>
                <a
                  href={result.url}
                  className="result-url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {result.url}
                </a>
                <p className="result-description">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}