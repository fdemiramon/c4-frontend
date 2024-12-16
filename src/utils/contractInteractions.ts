import { ethers } from "ethers";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../config/contract";
import { Game } from "../types/contract";
import { transformBoardData } from "./dataTransformers";
import { getWalletClient } from "wagmi/actions";

export async function fetchAllBoards(): Promise<Game[]> {
  const walletClient = await getWalletClient();
  if (!walletClient) {
    throw new Error("No wallet connected");
  }

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    walletClient
  );

  try {
    const boards = await contract.allBoards();
    return transformBoardData(boards);
  } catch (error) {
    console.error("Failed to fetch boards:", error);
    throw new Error("Failed to fetch game boards from the blockchain");
  }
}