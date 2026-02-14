import { useState } from "react";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import { X } from "lucide-react";

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

const categories = [
  "Whistleblowing",
  "Private Communities",
  "Finance",
  "General",
  "Technology",
  "Governance",
  "Security",
  "Other",
];

export default function CreatePostModal({ open, onClose }) {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [encrypted, setEncrypted] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <Card className="w-full max-w-lg relative">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-secondary)] hover:text-white"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold">Create Post</h2>

          {/* Textarea */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            placeholder="Share something anonymously..."
            className="w-full bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-3 text-sm resize-none focus:outline-none focus:border-[var(--color-primary)]"
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-[var(--color-surface-2)] border border-[var(--color-border)] rounded-[var(--radius-md)] p-2 text-sm"
          >
            {categories.map((c) => (
              <option className="bg-black" key={c}>{c}</option>
            ))}
          </select>

          {/* Encryption Toggle */}
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={encrypted}
              onChange={() => setEncrypted(!encrypted)}
            />
            Encrypt this post
          </label>

          <Button>
            Publish Post
          </Button>
        </div>
      </Card>
    </div>
  );
}
