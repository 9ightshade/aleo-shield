import { useMessageStore } from "../../../store/useMessageStore";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

export default function ChatWindow() {
  const { conversations, activeConversationId } = useMessageStore();
  const conversation = conversations.find((c) => c.id === activeConversationId);

  if (!conversation) {
    return (
      <div className="flex items-center justify-center h-full text-[var(--color-text-secondary)]">
        Select a conversation
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2">
        {conversation.messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[var(--color-border)]">
        <MessageInput conversationId={conversation.id} />
      </div>
    </div>
  );
}
