import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Game } from '../types/contract';
import { fetchAllBoards } from '../utils/contractInteractions';
import { toast } from 'react-hot-toast';

interface GameStateContextType {
  games: Game[];
  loading: boolean;
  error: Error | null;
  refreshGames: () => Promise<void>;
}

const GameStateContext = createContext<GameStateContextType | undefined>(undefined);

export function GameStateProvider({ children }: { children: React.ReactNode }) {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchGames = useCallback(async () => {
    try {
      setLoading(true);
      const boards = await fetchAllBoards();
      setGames(boards);
      setError(null);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to fetch games');
      setError(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <GameStateContext.Provider 
      value={{ 
        games, 
        loading, 
        error, 
        refreshGames: fetchGames 
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
}