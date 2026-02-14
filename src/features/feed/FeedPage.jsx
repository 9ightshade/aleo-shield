import PostCard from "./components/PostCard";
// import { Post } from "./types";
import CreatePostModal from "./components/CreatePostModal";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const mockPosts = [
  {
    id: "1",
    alias: "shadow_alpha",
    reputation: 132,
    verified: true,
    category: "Whistleblowing",
    content: "Zero-knowledge systems will redefine trust.",
    encrypted: false,
    likes: 12,
    comments: 4,
    timestamp: "2h ago",
  },
  {
    id: "2",
    alias: "anon_beta",
    reputation: 42,
    verified: false,
    category: "Private Communities",
    content: "This post is encrypted.",
    encrypted: true,
    likes: 3,
    comments: 1,
    timestamp: "5h ago",
  },
];

export default function FeedPage() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("" | null);

  const { ref, inView } = useInView();

  useEffect(() => {
    inView ? console.log("in view") : console.log("not in view");
  }, [ref, inView]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2 flex-wrap">
        {["All", "Whistleblowing", "Finance"].map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c === "All" ? null : c)}
            className="px-3 py-1 text-xs rounded-full 
                 bg-[var(--color-muted)] 
                 hover:bg-[var(--color-border)]">
            {c}
          </button>
        ))}
      </div>

      {mockPosts
        .filter((p) => !filter || p.category === filter)
        .map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 
             bg-[var(--color-primary)] 
             hover:bg-[var(--color-primary-hover)] 
             text-white p-4 rounded-full shadow-lg transition">
        <Plus size={20} />
      </button>

      <CreatePostModal open={open} onClose={() => setOpen(false)} />
      <div ref={ref} />
    </div>
  );
}
