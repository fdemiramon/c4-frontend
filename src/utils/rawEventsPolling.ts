import { ethers } from "ethers";
import type { Log, LogDescription } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../config/contract";

export async function getEvents(
  provider: ethers.Provider,
  fromBlock: number,
  toBlock: number
): Promise<LogDescription[]> {
  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    CONTRACT_ABI,
    provider
  );

  try {
    const logs = await contract.queryFilter("*", fromBlock, toBlock);
    return logs.map((log) => parseLog(log));
  } catch (error) {
    console.error(
      `Failed to fetch events: for block ${fromBlock} to block ${toBlock} `,
      error
    );
    return [];
  }
}

const iface = new ethers.Interface(CONTRACT_ABI);

export function parseLog(log: Log): LogDescription {
  const event = iface.parseLog({
    topics: log.topics,
    data: log.data,
  });
  if (event == undefined) {
    throw new Error(`Failed to parse log: ${log}`);
  }
  if (event.name == undefined) {
    throw new Error(`Failed to get the event name: ${log}`);
  }
  if (event.args == undefined) {
    throw new Error(`Failed to get the args event: ${log}`);
  }

  return event;
}
