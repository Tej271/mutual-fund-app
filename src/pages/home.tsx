import { SerachMF } from "@/components/SearchMF";
import { useSearchFunds } from "@/state/queries/funds";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

function Home() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);

  const { data, isLoading, error } = useSearchFunds(debouncedQuery);

  return (
    <div className="min-h-screen">
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-blue-600">WealthForge</h1>
          <p className="text-sm text-gray-500 mt-1">Smart Investing Made Simple</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SerachMF query={query} onQueryChange={setQuery} />

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <ul>
            {data?.map((scheme) => (
              <li key={scheme.schemeCode}>{scheme.schemeName}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default Home;
