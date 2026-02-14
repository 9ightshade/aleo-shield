import { Bell } from "lucide-react";
import Badge from "../ui/Badge";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-[var(--color-border)] bg-[var(--color-surface-2)] flex items-center justify-between px-6">
      <div>
        <h2 className="text-sm font-medium text-[var(--color-text-secondary)]">
          Welcome back
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-[var(--color-muted)] transition">
          <Bell size={18} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-primary)] rounded-full" />
        </button>

        <Badge variant="verified">Verified</Badge>
      </div>
    </header>
  );
}
