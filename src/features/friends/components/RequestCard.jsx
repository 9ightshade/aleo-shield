// import { FriendRequest } from "../types"
import { useFriendsStore } from "../../../store/useFriendsStore"

// interface Props {
//   request: FriendRequest
//   type: "incoming" | "outgoing"
// }

export default function RequestCard({ request, type }) {
  const { acceptRequest, rejectRequest } = useFriendsStore()

  return (
    <div className="flex items-center justify-between p-4 bg-[var(--color-surface-2)] rounded-xl">
      <p className="font-medium">{request.from.alias}</p>

      {type === "incoming" && (
        <div className="flex gap-2">
          <button
            onClick={() => acceptRequest(request.id)}
            className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm"
          >
            Accept
          </button>
          <button
            onClick={() => rejectRequest(request.id)}
            className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm"
          >
            Reject
          </button>
        </div>
      )}

      {type === "outgoing" && (
        <span className="text-sm text-gray-500">Pending</span>
      )}
    </div>
  )
}
