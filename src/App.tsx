import { Toaster } from "react-hot-toast";
import { Boards } from "./components/Boards";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Web3Provider } from "./providers/Web3Provider";

function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-gray-100">
        <Toaster position="top-right" />
        <Header />
        <Hero />

        <main className="max-w-7xl mx-auto px-4 py-6">
          <Boards />
        </main>
        <Footer />
      </div>
    </Web3Provider>
  );
}

export default App;
