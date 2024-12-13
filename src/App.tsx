import { Activity } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { Boards } from "./components/Boards";
import { CURRENT_NETWORK } from "./config/provider";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Toaster position="top-right" />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Activity className="w-8 h-8" />
            Blockchain Events Monitor
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Connected to {CURRENT_NETWORK.name}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Boards />
      </main>
    </div>
  );
}

export default App;
