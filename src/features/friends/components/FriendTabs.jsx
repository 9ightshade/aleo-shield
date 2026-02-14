import { useFriendsStore } from "../../../store/useFriendsStore"

export default function FriendTabs() {
  const { tab, setTab } = useFriendsStore()

  const tabs = ["friends", "incoming", "outgoing"]

  return (
    <div className="flex gap-3 mb-6">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`px-4 py-2 rounded-full text-sm ${
            tab === t
              ? "bg-[var(--color-primary)] text-white"
              : "bg-[var(--color-surface-2)]"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  )
}
