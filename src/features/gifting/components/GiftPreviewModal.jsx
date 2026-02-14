// import { Gift } from "../types"
import { useWalletStore } from "../../../store/useWalletStore"
import { v4 as uuid } from "uuid"

// interface Props {
//   gift: Gift | null
//   recipient: string
//   onClose: () => void
// }

export default function GiftPreviewModal({
  gift,
  recipient,
  onClose,
}) {
  const { balance, addTransaction } = useWalletStore()

  if (!gift) return null

  const insufficient = balance < gift.price

  const handleConfirm = () => {
    if (insufficient || !recipient) return

    addTransaction({
      id: uuid(),
      type: "gift",
      amount: gift.price,
      status: "pending",
      createdAt: new Date().toISOString(),
    })

    // Smart contract logic plugs here

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-black w-full max-w-md rounded-2xl p-6 space-y-4 shadow-xl">
        <h2 className="text-lg font-semibold">Confirm Gift</h2>

        <div className="text-center text-white">
          <span className="text-5xl">{gift.emoji}</span>
          <p className="mt-2 font-medium">{gift.name}</p>
          <p className="text-sm text-gray-500">₦{gift.price}</p>
        </div>

        {insufficient && (
          <p className="text-sm text-red-600">
            Insufficient balance.
          </p>
        )}

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded-lg">
            Cancel
          </button>
          <button
            disabled={insufficient}
            onClick={handleConfirm}
            className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white disabled:opacity-50"
          >
            Send Gift
          </button>
        </div>
      </div>
    </div>
  )
}
