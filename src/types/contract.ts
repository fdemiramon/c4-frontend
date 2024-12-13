import { Result } from "ethers";

export interface Game {
  gameIndex: number;
  boardIndex: number;
  lastPlayedColumn: number;
  numberOfPlays: number;
  lastColor: boolean;
  isClosed: boolean;
  winners: string[];
  gridDiscs: boolean[][];
  gridAddresses: string[][];
}
export interface GameEvent {
  name: string;
  gameIndex: number;
  boardIndex: number;
  data: Result;
}
