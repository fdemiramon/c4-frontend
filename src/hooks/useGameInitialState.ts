import { useGameState } from '../context/GameStateContext';
import { Game } from '../types/contract';

export function useGameInitialState<T extends Game>(boardIndex: number): [T | null, (game: T) => void] {
  const { games, loading } = useGameState();
  
  const initialeStateGame = loading 
    ? null 
    : (games.find(game => game.boardIndex === boardIndex) as T) || null;
  
  // Note: setGameState is kept for compatibility, but updates should be handled through context
  const setGameState = (game: Game) => {
    console.warn('Direct game state updates are deprecated. Use context updates instead.');
  };

  return [initialeStateGame, setGameState];
}