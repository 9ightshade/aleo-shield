import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

export default function MessagesPage() {
  return (
    <div className="flex h-screen gap-4">
      {/* Left panel: recent conversations */}
      <div className="w-80 border-r border-[var(--color-border)]">
        <ChatList />
      </div>

      {/* Right panel: active chat */}
      <div className="flex-1">
        <ChatWindow />
      </div>
    </div>
  );
}
