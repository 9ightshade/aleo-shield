import { Navigate } from "react-router-dom"
import { useWalletAuthStore } from "../store/useWalletAuthStore"

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const { isConnected } = useWalletAuthStore()

  if (!isConnected) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
