// import { ProfileUser } from "../types"
import { useAuthStore } from "../../../store/useAuthStore"
import { useFriendsStore } from "../../../store/useFriendsStore"

// interface Props {
//   user: ProfileUser
// }

export default function ProfileHeader({ user }) {
  const { user: currentUser } = useAuthStore()
  const { friends, addFriend, removeFriend } = useFriendsStore()

  const isOwner = currentUser?.id === user.id
  const isFriend = friends.some((f) => f.id === user.id)

  return (
    <div className="bg-[var(--color-surface-2)] p-6 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 bg-gray-300 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{user.alias}</h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {user.bio}
          </p>
        </div>
      </div>

      {!isOwner && (
        <button
          onClick={() =>
            isFriend
              ? removeFriend(user.id)
              : addFriend({ id: user.id, alias: user.alias })
          }
          className="px-4 py-2 rounded-xl bg-[var(--color-primary)] text-white"
        >
          {isFriend ? "Remove Friend" : "Add Friend"}
        </button>
      )}
    </div>
  )
}
