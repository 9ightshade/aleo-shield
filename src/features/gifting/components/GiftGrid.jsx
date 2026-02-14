// import { Gift } from "../types"
import GiftCard from "./GiftCard"

// interface Props {
//   gifts: Gift[]
//   onSelect: (gift: Gift) => void
// }

export default function GiftGrid({ gifts, onSelect }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {gifts.map((gift) => (
        <GiftCard key={gift.id} gift={gift} onSelect={onSelect} />
      ))}
    </div>
  )
}
