"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import "@/components/SearchResultsHeader.css";

// Suggestions (for autocomplete)
const demoSuggestions: string[] = [
    "apple pie",
    "artificial intelligence",
    "baby names",
    "backpacking tips",
    "baking recipes",
    "beach vacation",
    "best laptops",
    "bicycle repair",
    "bird watching",
    "bitcoin price",
    "black friday deals",
    "blueberry smoothie",
    "book reviews",
    "budget travel",
    "business ideas",
    "camping gear",
    "car insurance",
    "career advice",
    "cat care",
    "chicken recipes",
    "chocolate cake",
    "city breaks",
    "cloud computing",
    "coffee shops",
    "coding tutorials",
    "college admissions",
    "cooking tips",
    "credit cards",
    "cryptocurrency news",
    "cybersecurity tips",
    "data science",
    "dating advice",
    "diy projects",
    "dog training",
    "electric cars",
    "email marketing",
    "exercise routines",
    "family activities",
    "fashion trends",
    "financial planning",
    "fitness apps",
    "flight deals",
    "flower gardening",
    "food delivery",
    "freelance jobs",
    "furniture stores",
    "gaming consoles",
    "gardening tips",
    "gluten-free recipes",
    "golf lessons",
    "graphic design",
    "hair care",
    "healthy snacks",
    "hello world guide",
    "hello world tutorial",
    "hello kitty products",
    "hello fresh meals",
    "hiking trails",
    "home decor",
    "home improvement",
    "hot coffee",
    "hot dog recipes",
    "hot springs",
    "hot tub reviews",
    "hot water heater",
    "hot yoga classes",
    "hotel deals",
    "how to draw",
    "how to meditate",
    "how to swim",
    "hybrid cars",
    "ice cream flavors",
    "indoor plants",
    "insurance quotes",
    "interior design",
    "investment tips",
    "iphone reviews",
    "italian restaurants",
    "job search",
    "keto diet",
    "kids activities",
    "kitchen gadgets",
    "language learning",
    "laptop deals",
    "leadership skills",
    "learn guitar",
    "learn python",
    "life hacks",
    "local events",
    "machine learning",
    "makeup tutorials",
    "marathon training",
    "meal prep",
    "mental health",
    "minimalist living",
    "mobile apps",
    "mortgage rates",
    "movie reviews",
    "music festivals",
    "natural skincare",
    "netflix shows",
    "new cars",
    "online courses",
    "online shopping",
    "organic food",
    "outdoor activities",
    "parenting tips",
    "personal finance",
    "pet adoption",
    "photo editing",
    "photography tips",
    "pizza delivery",
    "plant care",
    "podcast recommendations",
    "productivity hacks",
    "protein shakes",
    "public speaking",
    "real estate",
    "remote jobs",
    "renewable energy",
    "renting apartments",
    "resume writing",
    "road trips",
    "robotics news",
    "running shoes",
    "salsa dancing",
    "saving money",
    "science news",
    "seafood recipes",
    "self defense",
    "seo strategies",
    "skin care routine",
    "smart home",
    "smartphones",
    "smoothie recipes",
    "social media marketing",
    "software development",
    "solo travel",
    "soup recipes",
    "space exploration",
    "sports news",
    "startup ideas",
    "stock market",
    "streaming services",
    "student loans",
    "study tips",
    "sushi restaurants",
    "sustainable living",
    "tax filing",
    "tech gadgets",
    "thrift stores",
    "time management",
    "travel apps",
    "travel insurance",
    "tv shows",
    "used cars",
    "vegan recipes",
    "video editing",
    "virtual reality",
    "vitamin supplements",
    "volunteer opportunities",
    "wallpaper ideas",
    "web design",
    "wedding planning",
    "weight loss",
    "wine tasting",
    "winter fashion",
    "woodworking projects",
    "work from home",
    "world news",
    "yoga classes",
    "youth sports",
    "zero waste",
    "zumba classes",
    "3d printing",
    "5g technology",
    "air purifiers",
    "antique furniture",
    "aquarium care",
    "aromatherapy",
    "art supplies",
    "astronomy news",
    "auto repair",
    "baby products",
    "barbecue recipes",
    "basketball training",
    "beauty products",
    "bird feeders",
    "board games",
    "budget phones",
    "business loans",
    "cake decorating",
    "camping sites",
    "car rentals",
    "charity events",
    "child education",
    "clean energy",
    "cloud storage",
    "coffee makers",
    "concert tickets",
    "cooking classes",
    "craft ideas",
    "cruise deals",
    "cycling routes",
    "dance classes",
    "digital marketing",
    "dog grooming",
    "drone reviews",
    "eco-friendly products",
    "electric bikes",
    "event planning",
    "family vacations",
    "fitness trackers",
    "food trucks",
    "freelance writing",
];

export default function SearchResultsHeader() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("query") || "";
    const [query, setQuery] = useState<string>(initialQuery);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [selectedIndex, setSelectedIndex] = useState<number>(-1);
    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Update query state when URL query parameter changes
    useEffect(() => {
        setQuery(initialQuery);
        if (inputRef.current) {
            inputRef.current.value = initialQuery;
        }
    }, [initialQuery]);

    // Handle search input change
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setSelectedIndex(-1);

        if (value.trim()) {
            const filteredSuggestions = demoSuggestions.filter((suggestion) =>
                suggestion.toLowerCase().startsWith(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Handle suggestion selection
    const handleSuggestionSelect = (suggestion: string) => {
        setQuery(suggestion);
        setSuggestions([]);
        setSelectedIndex(-1);
        if (inputRef.current) {
            inputRef.current.value = suggestion;
        }
        if (formRef.current) {
            formRef.current.submit();
        }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (suggestions.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelectedIndex((prev) =>
                prev < suggestions.length - 1 ? prev + 1 : prev
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        } else if (e.key === "Enter" && selectedIndex >= 0) {
            e.preventDefault();
            handleSuggestionSelect(suggestions[selectedIndex]);
        }
    };

    return (
        <header className="search-header">
            <div className="top-nav">
                <div className="left-nav">
                    <Link href="/" className="logo">
                        <img src="/img/logo/logo.png" alt="Piecom Logo" />
                    </Link>
                    <div className="search-container">
                        <form
                            ref={formRef}
                            className="search-form"
                            action="/search"
                            method="get"
                        >
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
                                ref={inputRef}
                                type="text"
                                placeholder="Search for websites"
                                name="query"
                                value={query}
                                onChange={handleSearch}
                                onKeyDown={handleKeyDown}
                                autoComplete="off"
                                aria-label="Search websites"
                            />
                        </form>
                        {suggestions.length > 0 && (
                            <div className="suggestions-container">
                                {suggestions.map((suggestion, index) => (
                                    <div
                                        key={index}
                                        className={`suggestion-item ${index === selectedIndex ? "selected" : ""
                                            }`}
                                        onClick={() => handleSuggestionSelect(suggestion)}
                                    >
                                        {suggestion}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <nav className="bottom-nav">
                <div className="nav-container">
                    <Link
                        href={`/search?query=${encodeURIComponent(query)}`}
                        className="nav-link active"
                    >
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
                    <Link
                        href={`/images?query=${encodeURIComponent(query)}`}
                        className="nav-link"
                    >
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