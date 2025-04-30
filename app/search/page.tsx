"use client";

import '@/app/search/page.css';
import SearchResultsHeader from "@/components/SearchResultsHeader";
import { useSearchParams } from "next/navigation";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <>
    <SearchResultsHeader />
    </>
  );
}