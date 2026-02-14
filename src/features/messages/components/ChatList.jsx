import { useMessageStore } from "../../../store/useMessageStore";
import ChatItem from "./ChatItem";

export default function ChatList() {
  const { conversations } = useMessageStore();

  return (
    <div className="flex flex-col divide-y divide-[var(--color-border)] h-full overflow-y-auto">
      {conversations.map((conv) => (
        <ChatItem key={conv.id} conversation={conv} />
      ))}
      {conversations.length === 0 && (
        <p className="text-center text-sm text-[var(--color-text-secondary)] mt-4">
          No conversations yet.
        </p>
      )}
    </div>
  );
}
