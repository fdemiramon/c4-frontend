import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";
import { createProvider } from "../config/provider";
import { Game } from "../types/contract";
import { transformBoardData } from "./dataTransformers";

export async function fetchAllBoards(): Promise<Game[]> {
  const provider = createProvider();
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    provider
  );

  try {
    const boards = await contract.allBoards();
    return transformBoardData(boards);
  } catch (error) {
    console.error("Failed to fetch boards:", error);
    throw new Error("Failed to fetch game boards from the blockchain");
  }
}
