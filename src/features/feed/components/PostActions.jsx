import { Heart, MessageCircle, Gift } from "lucide-react";
import { useState } from "react";
import GiftModal from "./GiftModal";


// interface Props {
//   likes: number;
//   comments: number;
//   recipientAlias: string;
// }



export default function PostActions({ likes, comments, recipientAlias }) {
   const [liked, setLiked] = useState(false);
   const [count, setCount] = useState(likes);
   const [giftOpen, setGiftOpen] = useState(false);


    const toggleLike = () => {
      setLiked(!liked);
      setCount(liked ? count - 1 : count + 1);
    };
  return (
    <div className="flex items-center gap-6 text-[var(--color-text-secondary)] text-sm pt-3">
      <button
        onClick={toggleLike}
        className={`flex items-center gap-2 transition transform ${
          liked ? "text-[var(--color-primary)] scale-110" : ""
        }`}>
        <Heart size={16} fill={liked ? "currentColor" : "none"} />
        {count}
      </button>

      <button className="flex items-center gap-2 hover:text-[var(--color-primary)] transition">
        <MessageCircle size={16} />
        {comments}
      </button>
      <button
        onClick={() => setGiftOpen(true)}
        className="flex items-center gap-2 hover:text-[var(--color-primary)] transition">
        <Gift size={16} />
        Gift
      </button>

      <GiftModal
        open={giftOpen}
        onClose={() => setGiftOpen(false)}
        recipientAlias={recipientAlias}
      />
    </div>
  );
}
