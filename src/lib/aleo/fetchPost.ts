/**
 * Fetch a post by its transaction ID from Aleo testnet
 */
import { ALEO_PROGRAM_NAME } from "../../config/config";
export async function fetchPost(txId: string) {
  try {
    const programId = ALEO_PROGRAM_NAME;
    const url = `https://testnet.aleoscan.io/testnet/program/${programId}/mapping/posts/${txId}u32`;

    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);

    const data = await res.json();

    console.log("📄 Fetched post data:", data);

    return data;
  } catch (err) {
    console.error("❌ Fetch post error:", err);
    return null;
  }
}
