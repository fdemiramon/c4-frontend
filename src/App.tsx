import { Toaster } from "react-hot-toast";
import { Boards } from "./components/Boards";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen game-gradient text-white">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1e1b4b',
            color: '#fff',
            border: '1px solid rgba(99, 102, 241, 0.2)',
          },
        }}
      />
      <Header />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-12">
        <Boards />
      </main>
      <Footer />
    </div>
  );
}

export default App;