import { SerachMF } from "@/components/SearchMF";
import { useSearchFunds } from "@/state/queries/funds";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { MutualFundItem } from "../components/MFItem";

function Home() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);

  const { data, isLoading, error } = useSearchFunds(debouncedQuery);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-blue-600">WealthForge</h1>
          <p className="text-sm text-muted-foreground">Smart Investing Made Simple</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <SerachMF query={query} onQueryChange={setQuery} />
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-muted/20 rounded-lg animate-pulse" />
            ))}
          </div>
        ) : error ? (
          <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20">
            <p className="text-destructive">Error: {error.message}</p>
          </div>
        ) : data && data.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((scheme) => (
              <MutualFundItem
                key={scheme.schemeCode}
                schemeCode={scheme.schemeCode}
                schemeName={scheme.schemeName}
              />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No mutual funds found</p>
            <p className="text-sm text-muted-foreground mt-1">Try a different search term</p>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Search for mutual funds to get started</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
