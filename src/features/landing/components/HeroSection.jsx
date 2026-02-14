import ConnectWalletButton from "./ConnectWalletButton";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1>ShadowVerse</h1>
      <p className="text-5xl font-bold mb-6">SocialFi Powered by Web3</p>

      <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mb-10">
        Connect your wallet to access your social dashboard, send gifts, message
        friends, and manage your crypto wallet.
      </p>

      <ConnectWalletButton />
    </div>
  );
}
