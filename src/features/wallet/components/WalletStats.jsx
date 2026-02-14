import Card from "../../../components/ui/Card";

// interface Props {
//   sent: number;
//   received: number;
//   fees: number;
// }

export default function WalletStats({
  sent,
  received,
  fees,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      <Card>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Total Sent
        </p>
        <h3 className="text-xl font-semibold mt-1">
          {sent.toFixed(2)} USDCx
        </h3>
      </Card>

      <Card>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Total Received
        </p>
        <h3 className="text-xl font-semibold mt-1">
          {received.toFixed(2)} USDCx
        </h3>
      </Card>

      <Card>
        <p className="text-xs text-[var(--color-text-secondary)]">
          Platform Fees Paid
        </p>
        <h3 className="text-xl font-semibold mt-1">
          {fees.toFixed(2)} USDCx
        </h3>
      </Card>

    </div>
  );
}
