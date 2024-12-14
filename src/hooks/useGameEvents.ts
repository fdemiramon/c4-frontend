import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useBlockNumber } from "./useBlockNumber";
import { getEvents } from "../utils/rawEventsPolling";
import { createProvider } from "../config/provider";
import { playDropSound } from "../utils/sound";
import { GameEvent } from "../types/contract";

export function useGameEvents(boardIndex: number) {
  const { blockNumber } = useBlockNumber();
  const [lastProcessedBlock, setLastProcessedBlock] = useState<number | null>(
    null,
  );
  const [gameEvent, setGameEvent] = useState<GameEvent | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!blockNumber) return;

    const processNewEvents = async () => {
      const fromBlock = lastProcessedBlock
        ? lastProcessedBlock + 1
        : Math.max(1, blockNumber - 10);

      if (fromBlock <= blockNumber) {
        try {
          const provider = createProvider();
          const rawEvents = await getEvents(provider, fromBlock, blockNumber);

          for (const rawEvent of rawEvents) {
            const eventBoardIndex = parseInt(rawEvent.args.boardIndex);

            if (eventBoardIndex === boardIndex) {
              const event = {
                name: rawEvent.name,
                boardIndex: eventBoardIndex,
                gameIndex: parseInt(rawEvent.args.gameIndex),
                data: rawEvent.args,
              };

              switch (event.name) {
                case "GamePlayed":
                  playDropSound();
                  break;
                case "GameClosed":
                  setIsLoading(true);
                  break;
                case "GameCreated":
                  setIsLoading(false);
                  break;
              }

              setGameEvent(event);
              toast.success(
                `Game #${event.gameIndex} / Board #${event.boardIndex}: ${event.name}`,
              );
            }
          }

          setLastProcessedBlock(blockNumber);
        } catch (error) {
          console.error("Failed to process events:", error);
          toast.error("Failed to fetch new events");
        }
      }
    };

    processNewEvents();
  }, [blockNumber, lastProcessedBlock, boardIndex]);

  return { gameEvent, isLoading };
}
