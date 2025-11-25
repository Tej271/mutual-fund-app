import { SerachMf } from "@/components/SearchMF";

function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-blue-600">WealthForge</h1>
          <p className="text-sm text-gray-500 mt-1">Smart Investing Made Simple</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SerachMf />
      </main>
    </div>
  );
}

export default Home;
