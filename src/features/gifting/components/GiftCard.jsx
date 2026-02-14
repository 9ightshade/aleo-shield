// import { Gift } from "../types";

// interface Props {
//   gift: Gift
//   onSelect: (gift: Gift) => void
// }

export default function GiftCard({ gift, onSelect }) {
  return (
    <div
      onClick={() => onSelect(gift)}
      className="cursor-pointer bg-[var(--color-surface-2)] hover:bg-[var(--color-surface-3)]
                 rounded-2xl p-6 flex flex-col items-center gap-2
                 transition-all duration-200 hover:scale-105">
      <span className="text-4xl">{gift.emoji}</span>
      <p className="font-medium">{gift.name}</p>
      <p className="text-sm text-[var(--color-text-secondary)]">
        ₦{gift.price}
      </p>
    </div>
  );
}
