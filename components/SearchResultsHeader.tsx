import Link from "next/link";
import "@/components/SearchResultsHeader.css";


export default function SearchResultsHeader() {
    return (
        <>
            <header className="search_result_header">
                <div className="top_nav">
                    <div className="left_nav">
                        <Link href="/" className="logo">
                            <img src="/img/logo/logo.png" alt="Piecom Logo" />
                        </Link>
                        <div className="search_cont">
                            <form
                                className="search_bar"
                                action="/search"
                                method="get"
                            >
                                <button type="button">
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
                                    autoComplete="off"
                                />
                            </form>
                            {/* {suggestions.length > 0 && (
                <div className="suggestions_container">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className={`suggestion_item ${index === selectedIndex ? "selected" : ""}`}
                            onClick={() => handleSuggestionSelect(suggestion)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
            )} */}
                        </div>
                    </div>
                    <div className="right_nav">
                        <Link href="/settings" className="settings">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bolt-icon lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><circle cx="12" cy="12" r="4" /></svg>
                        </Link>
                        <Link href="/profile" className="profile">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </Link>
                    </div>
                </div>
                <div className="bottom_nav">
                    <div className="bottom_nav_container">
                        <Link href="/search?query={query_here}" className="websites">
                            <div className="nav_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                            </div>
                            <span>Websites</span>
                        </Link>
                        <Link href="/images?query={query_here}" className="images">
                            <div className="nav_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-image-icon lucide-image"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                            </div>
                            <span>Images</span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}