// import { useState } from "react"

export default function ProfileTabs({
  active,
  setActive,
}) {
  const tabs = ["posts", "gifts"]

  return (
    <div className="flex gap-4 mt-6 border-b border-[var(--color-border)]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`pb-2 ${
            active === tab
              ? "border-b-2 border-[var(--color-primary)]"
              : ""
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
