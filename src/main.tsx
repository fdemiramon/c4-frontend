import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GameStateProvider } from "./context/GameStateContext";
import { Web3Provider } from "./providers/Web3Provider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Web3Provider>
      <GameStateProvider>
        <App />
      </GameStateProvider>
    </Web3Provider>
  </StrictMode>
);