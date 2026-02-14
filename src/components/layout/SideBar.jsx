import { Home, MessageSquare, Wallet, Gift, Users, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Feed", icon: Home, path: "/feed" },
  { label: "Messages", icon: MessageSquare, path: "/messages" },
  { label: "Wallet", icon: Wallet, path: "/wallet" },
  { label: "Gifts", icon: Gift, path: "/gifts" },
  { label: "Friends", icon: Users, path: "/friends" },
  { label: "Profile", icon: User, path: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 hidden h-full border-r border-[var(--color-border)] bg-[var(--color-surface)] p-5 md:flex flex-col">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-xl font-semibold tracking-tight">ShadowSphere</h1>
        <p className="text-xs text-[var(--color-text-secondary)] mt-1">
          Privacy-first social
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
              flex cursor-pointer items-center gap-3 px-4 py-3 rounded-[var(--radius-md)] transition-all duration-200
              ${
                isActive
                  ? "bg-[var(--color-muted)] text-[var(--color-text-primary)] font-medium"
                  : "text-[var(--color-text-secondary)] hover:bg-[var(--color-muted)] hover:text-[var(--color-text-primary)]"
              }
            `}>
            <item.icon size={18} />
            <span className="text-base">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer Section */}
      <div className="mt-auto pt-6 border-t border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
        Anonymous Mode Active
      </div>
    </aside>
  );
}
