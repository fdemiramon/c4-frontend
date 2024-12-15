import { Gamepad2 } from "lucide-react";
import { WalletButton } from "./WalletButton";

export function Header() {
  return (
    <header className="header-gradient text-white py-4 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg">
            <Gamepad2 size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold">Connect4 Arena</h1>
        </div>
        <div className="flex items-center gap-8">
          <nav>
            <ul className="flex gap-8">
              <li>
                <a href="#" className="hover:text-indigo-200 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200 transition-colors">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200 transition-colors">
                  Past Games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200 transition-colors">
                  About
                </a>
              </li>
            </ul>
          </nav>
          <WalletButton />
        </div>
      </div>
    </header>
  );
}