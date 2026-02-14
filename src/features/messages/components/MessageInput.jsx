import { useState } from "react"
import { useMessageStore } from "../../../store/useMessageStore"
import { v4 as uuid } from "uuid"

// interface Props {
//   conversationId: string
// }

export default function MessageInput({ conversationId }) {
  const [text, setText] = useState("")
  const { addMessage } = useMessageStore()

  const sendMessage = () => {
    if (!text.trim()) return

    addMessage(conversationId, {
      id: uuid(),
      senderId: "me", // replace with auth id
      receiverId: conversationId, // placeholder
      content: text.trim(),
      timestamp: new Date().toISOString(),
      status: "sent",
    })

    setText("")
  }

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="flex-1 px-4 py-2 rounded-2xl border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
      />
      <button
        onClick={sendMessage}
        className="px-4 py-2 bg-[var(--color-primary)] text-white rounded-2xl"
      >
        Send
      </button>
    </div>
  )
}
