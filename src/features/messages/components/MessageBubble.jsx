// import { Message } from "../types"
// import { useWalletStore } from "../../../store/useWalletStore"

// interface Props {
//   message: Message
// }

export default function MessageBubble({ message }) {
  const currentUserId = "me" // replace with auth user id
  const isMine = message.senderId === currentUserId

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`p-3 rounded-2xl max-w-xs break-words ${
          isMine
            ? "bg-[var(--color-primary)] text-white"
            : "bg-[var(--color-surface-2)] text-[var(--color-text-primary)]"
        }`}
      >
        {message.content}
        <div className="text-[10px] text-[var(--color-text-secondary)] mt-1 text-right">
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  )
}
