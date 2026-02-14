import { useAuthStore } from "../../store/useAuthStore";
import ProfileHeader from "./components/ProfileHeader";
import ProfileStats from "./components/ProfileStats";
import ProfileTabs from "./components/ProfileTabs";
import { useState } from "react";

export default function ProfilePage() {
  const { user } = useAuthStore();
  const [activeTab, setActiveTab] = useState("posts");

  if (!user) return null;

  return (
    <div className="p-6 space-y-6">
      <ProfileHeader user={user} />

      <ProfileStats />

      <ProfileTabs active={activeTab} setActive={setActiveTab} />

      {activeTab === "posts" && (
        <div className="mt-4">
          <p>User posts will render here</p>
        </div>
      )}

      {activeTab === "gifts" && (
        <div className="mt-4">
          <p>User gift history will render here</p>
        </div>
      )}
    </div>
  );
}
