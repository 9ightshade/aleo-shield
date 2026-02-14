import { useFriendsStore } from "../../../store/useFriendsStore";
import { useWalletStore } from "../../../store/useWalletStore";

export default function ProfileStats() {
  const { friends } = useFriendsStore();
  const { transactions } = useWalletStore();

  const giftsSent = transactions.filter((t) => t.type === "gift").length;

  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      <Stat label="Friends" value={friends.length} />
      <Stat label="Gifts Sent" value={giftsSent} />
      <Stat label="Posts" value={12} />
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-[var(--color-surface-2)] rounded-xl p-4 text-center">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-sm text-[var(--color-text-secondary)]">{label}</p>
    </div>
  );
}
