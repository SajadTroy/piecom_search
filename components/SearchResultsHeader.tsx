import Link from "next/link";
import "@/components/SearchResultsHeader.css";

export default function SearchResultsHeader() {
  return (
    <header className="search-header">
      <div className="top-nav">
        <div className="left-nav">
          <Link href="/" className="logo">
            <img src="/img/logo/logo.png" alt="Piecom Logo" />
          </Link>
          <div className="search-container">
            <form className="search-form" action="/search" method="get">
              <button type="button" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search for websites"
                name="query"
                autoComplete="off"
                aria-label="Search websites"
              />
            </form>
            {/* Suggestions (uncomment when needed) */}
            {/* {suggestions.length > 0 && (
              <div className="suggestions-container">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className={`suggestion-item ${index === selectedIndex ? "selected" : ""}`}
                    onClick={() => handleSuggestionSelect(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </div>
      </div>
      <nav className="bottom-nav">
        <div className="nav-container">
          <Link href="/search?query={query_here}" className="nav-link active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            <span>Websites</span>
          </Link>
          <Link href="/images?query={query_here}" className="nav-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span>Images</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}