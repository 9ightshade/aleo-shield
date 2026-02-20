// utils/parseAleoPost.ts
import {fieldToString} from "../../lib/aleo/index"
export function parseAleoPost(data: any) {
  if (!data) return null;

  const postId = data.post_id ? String(data.post_id).replace("u32", "") : null;
  const author = data.author ? String(data.author) : "anon";
  const contentHash = data.content_hash
    ? String(data.content_hash).replace("field", "")
    : null;

  return {
    id: postId ?? "0",
    alias: "aleo..." + author.slice(-6),
    reputation: Math.floor(Math.random() * 200),
    verified: true,
    category:
      data.category != null
        ? (() => {
            switch (Number(data.category.toString().replace("u8", ""))) {
              case 1:
                return "Whistleblowing";
              case 2:
                return "Finance";
              case 3:
                return "Private Communities";
              default:
                return "All";
            }
          })()
        : "All",
    content: contentHash ? fieldToString(contentHash) : "No content",
    encrypted: Boolean(data.encrypted),
    likes: data.likes ? Number(String(data.likes).replace("u32", "")) : 0,
    comments: data.comments
      ? Number(String(data.comments).replace("u32", ""))
      : 0,
    timestamp: data.timestamp
      ? `${Number(String(data.timestamp).replace("u32", ""))} blocks ago`
      : "0 blocks ago",
  };
}
