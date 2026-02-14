import { useState } from "react";
import { giftCatalog } from "./gifts";
import GiftGrid from "./components/GiftGrid";
import GiftRecipientSelector from "./components/GiftRecipientSelector";
import GiftPreviewModal from "./components/GiftPreviewModal";
// import { Gift } from "./types";

export default function GiftingPage() {
  const [recipient, setRecipient] = useState("");
  const [selectedGift, setSelectedGift] = useState(giftCatalog);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Send a Gift 🎁</h1>

      <GiftRecipientSelector
        recipient={recipient}
        setRecipient={setRecipient}
      />

      <GiftGrid gifts={giftCatalog} onSelect={setSelectedGift} />

      <GiftPreviewModal
        gift={selectedGift}
        recipient={recipient}
        onClose={() => setSelectedGift(null)}
      />
    </div>
  );
}
