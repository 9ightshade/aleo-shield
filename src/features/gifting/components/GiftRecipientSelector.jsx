// interface Props {
//   recipient: string;
//   setRecipient: (val: string) => void;
// }

export default function GiftRecipientSelector({ recipient, setRecipient }) {
  return (
    <div className="mb-6">
      <label className="block text-sm mb-2">Recipient ID</label>
      <input
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Enter recipient user ID"
        className="w-full px-4 py-2 rounded-xl border
                   border-[var(--color-border)]
                   focus:ring-2 focus:ring-[var(--color-primary)]"
      />
    </div>
  );
}
