import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";

// interface Props {
//   balance: number;
// }

export default function BalanceCard({ balance }) {
  return (
    <Card className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Available Balance
        </p>

        <h2 className="text-3xl font-semibold mt-1">
          {balance.toFixed(2)} USDCx
        </h2>
      </div>

      <div
        className="flex gap-3"
        onClick={() => {
          console.log("clicked ");
        }}>
        <Button variant="secondary">Deposit</Button>

        <Button variant="primary">Withdraw</Button>
      </div>
    </Card>
  );
}
