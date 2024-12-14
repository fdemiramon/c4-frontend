import { useState, useEffect } from "react";
import { createProvider } from "../config/provider";

const POLLING_INTERVAL = 1000; // 1 second

export function useBlockNumber() {
  const [blockNumber, setBlockNumber] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const provider = createProvider();
    let timeoutId: NodeJS.Timeout;

    const pollBlockNumber = async () => {
      try {
        const newBlockNumber = await provider.getBlockNumber();
        setBlockNumber(newBlockNumber);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err
            : new Error("Failed to fetch block number"),
        );
      }

      timeoutId = setTimeout(pollBlockNumber, POLLING_INTERVAL);
    };

    pollBlockNumber();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return { blockNumber, error };
}
