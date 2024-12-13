import { useState } from "react";
import { Game } from "../types/contract";

export function useGameInitialState(boardIndex: number) {
  const [gameState, setGameState] = useState<Game | null>(null);
  return [gameState, setGameState];
}
const [gameState, setGameState] = useGameInitialState<Game>(
