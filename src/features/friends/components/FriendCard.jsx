// import { FriendUser } from "../types"
import { useFriendsStore } from "../../../store/useFriendsStore"

// interface Props {
//   user: FriendUser
// }

export default function FriendCard({ user }) {
  const { removeFriend } = useFriendsStore()

  return (
    <div className="flex items-center justify-between p-4 bg-[var(--color-surface-2)] rounded-xl">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <p className="font-medium">{user.alias}</p>
      </div>

      <button
        onClick={() => removeFriend(user.id)}
        className="text-sm text-red-600"
      >
        Remove
      </button>
    </div>
  )
}
