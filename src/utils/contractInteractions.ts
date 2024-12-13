import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI, createProvider } from '../config/contract';
import { Game } from '../types/contract';
import { transformBoardData } from './dataTransformers';
import { validateBoardData } from './validators';

export async function fetchAllBoards(): Promise<Game[]> {
  const provider = createProvider();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
  
  try {
    const boards = await contract.allBoards();
    return transformBoardData(boards);
  } catch (error) {
    console.error('Failed to fetch boards:', error);
    throw new Error('Failed to fetch game boards from the blockchain');
  }
}