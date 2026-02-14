import { useMemo } from "react";
import { useFriendsStore } from "../../store/useFriendsStore";
import FriendTabs from "./components/FriendTabs";
import FriendCard from "./components/FriendCard";
import RequestCard from "./components/RequestCard";

export default function FriendsPage() {
  const store = useFriendsStore();

  const tab = store?.tab ?? "friends";

  // 🔹 Mock Data (Preview Only)
  const mockFriends = useMemo(
    () => [
      {
        id: "1",
        name:"Alex Johnson",
        from: { alias: "Alex Johnson" },
        username: "alexj",
        avatar: "https://i.pravatar.cc/150?img=1",
        isOnline: true,
      },
      {
        id: "2",
        name:"Sarah Kim",
        from: { alias: "Sarah Kim" },
        username: "sarahk",
        avatar: "https://i.pravatar.cc/150?img=2",
        isOnline: false,
      },
    ],
    [],
  );

  const mockIncoming = useMemo(
    () => [
      {
        id: "3",
        from: { alias: "Daniel Reed" },
        username: "danielr",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    ],
    [],
  );

  const mockOutgoing = useMemo(
    () => [
      {
        id: "4",
        from: {
          alias: "Emily Stone",
        },
        username: "emilys",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
    ],
    [],
  );

  // 🔹 Fallback logic (real data if available, else mock)
  const friends = store?.friends?.length ? store.friends : mockFriends;
  const incoming = store?.incoming?.length ? store.incoming : mockIncoming;
  const outgoing = store?.outgoing?.length ? store.outgoing : mockOutgoing;

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold">Friends</h1>

      <FriendTabs />

      <div className="space-y-4">
        {tab === "friends" &&
          friends.map((f) => <FriendCard key={f.id} user={f} />)}

        {tab === "incoming" &&
          incoming.map((r) => (
            <RequestCard key={r.id} request={r} type="incoming" />
          ))}

        {tab === "outgoing" &&
          outgoing.map((r) => (
            <RequestCard key={r.id} request={r} type="outgoing" />
          ))}
      </div>
    </div>
  );
}
