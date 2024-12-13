import { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import { createProvider } from "../config/contract";
import { useBlockNumber } from "./useBlockNumber";
import { getEvents } from "../utils/rawEventsPolling";

const BLOCKS_TO_FETCH = 10; // Number of blocks to look back
const provider = createProvider();

export function useContractEvents<GameEvent>(boardIndex: number) {
  const { blockNumber } = useBlockNumber();
  const [lastProcessedBlock, setLastProcessedBlock] = useState<number | null>(
    null
  );
  const [gameEvent, setGameEvent] = useState<GameEvent | null>(null);

  const processNewEvents = useCallback(
    async (fromBlock: number, toBlock: number) => {
      try {
        const rawEvents = await getEvents(provider, fromBlock, toBlock);
        console.log(`Fetching from Block ${fromBlock} to ${toBlock}`);
        for (const rawEvent of rawEvents) {
          const event = {
            name: rawEvent.name,
            boardIndex: parseInt(rawEvent.args.boardIndex),
            gameIndex: parseInt(rawEvent.args.gameIndex),
            data: rawEvent.args,
          };
          if (event.boardIndex === boardIndex) {
            toast.success(
              `Game #${event.gameIndex} / Board #${event.boardIndex}: ${event.name}`
            );
            setGameEvent(event);
          }
        }
      } catch (error) {
        console.error("Failed to process events:", error);
        toast.error("Failed to fetch new events");
      }
    },
    [boardIndex]
  );
  useEffect(() => {
    if (!blockNumber) return;

    const processBlocks = async () => {
      const fromBlock = lastProcessedBlock
        ? lastProcessedBlock + 1
        : Math.max(1, blockNumber - BLOCKS_TO_FETCH);

      if (fromBlock <= blockNumber) {
        await processNewEvents(fromBlock, blockNumber);
        setLastProcessedBlock(blockNumber);
      }
    };

    processBlocks();
  }, [blockNumber, lastProcessedBlock, processNewEvents]);
  return { gameEvent };
}
