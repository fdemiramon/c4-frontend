import { Gamepad2 } from "lucide-react";
import { WalletButton } from "./WalletButton";

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gamepad2 size={32} />
          <h1 className="text-2xl font-bold">Connect4 Arena</h1>
        </div>
        <div className="flex items-center gap-6">
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#" className="hover:text-indigo-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200">
                  Leaderboard
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200">
                  Past games
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-200">
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
