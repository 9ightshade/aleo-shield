import { useWallet } from "@provablehq/aleo-wallet-adaptor-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { connected, connecting, address } = useWallet();
  const [checkingAuth, setCheckingAuth] = useState(true);
  // const [hasUserRecord, setHasUserRecord] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      if (connecting) return;

      if (!connected || !address) {
        // setHasUserRecord(false);
        setCheckingAuth(false);
        return;
      }

      // try {
      //   const records = await requestRecords("shadowsphere_social.aleo");

      //   if (!records || records.length === 0) {
      //     setHasUserRecord(false);
      //     return;
      //   }

      //   // ✅ STRICT FILTER
      //   const userRecord = records.find(
      //     (r) => r.recordName === "UserSecret" && !r.spent,
      //   );

      //   console.log("UserSecret record:", userRecord);

      //   setHasUserRecord(!!userRecord);
      // } catch (err) {
      //   console.error("Record check failed:", err);
      //   setHasUserRecord(false);
      // } finally {
      //   setCheckingAuth(false);
      // }
    };

    verifyUser();
  }, [connected, connecting, address]);

  // Loading State
  // We stay here as long as connecting is true OR we haven't finished our record check
  if (connecting || checkingAuth) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-indigo-400">
        <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="animate-pulse font-mono text-sm">
          SCANNING ALEO LEDGER...
        </p>
      </div>
    );
  }

  // Final Redirect Logic
  // Only redirect once we are CERTAIN checkingAuth is finished
  // if (!connected) {
  //   return <Navigate to="/" replace />;
  // }

  // if (!hasUserRecord) {
  //   return <Navigate to="/" replace />;
  // }

  return children;
}
