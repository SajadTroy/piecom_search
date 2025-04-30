"use client";

import { useState, useRef } from "react";

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

export default function SearchForm() {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1); // Tracks keyboard-selected suggestion
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setSelectedIndex(-1); // Reset selection when typing

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

  // Handle suggestion selection (click or Enter)
  const handleSuggestionSelect = (suggestion: string) => {
    setQuery(suggestion); // Update query to the full suggestion
    setSuggestions([]); // Clear suggestions
    setSelectedIndex(-1); // Reset selection
    // Update the input's value attribute to ensure form submission uses the suggestion
    if (inputRef.current) {
      inputRef.current.value = suggestion;
    }
    // Submit the form
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
          ref={inputRef}
          type="text"
          placeholder="Search for websites"
          name="query"
          value={query}
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
          autoComplete="off"
        />
      </form>
      {suggestions.length > 0 && (
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
      )}
    </div>
  );
}