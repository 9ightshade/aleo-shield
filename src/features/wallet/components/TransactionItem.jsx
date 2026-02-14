// import { Transaction } from "../types";
import Badge from "../../../components/ui/Badge";

// interface Props {
//   transaction: Transaction;
// }

function getLabel(type) {
  switch (type) {
    case "deposit":
      return "Deposit";
    case "withdraw":
      return "Withdrawal";
    case "gift_sent":
      return "Gift Sent";
    case "gift_received":
      return "Gift Received";
    case "platform_fee":
      return "Platform Fee";
  }
}

export default function TransactionItem({
  transaction,
}) {
  const isPositive =
    transaction.type === "deposit" ||
    transaction.type === "gift_received";

  return (
    <div className="flex items-center justify-between py-4 text-sm">
      
      <div className="flex flex-col">
        <span className="font-medium">
          {getLabel(transaction.type)}
        </span>
        <span className="text-xs text-[var(--color-text-secondary)]">
          {transaction.timestamp}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span
          className={
            isPositive
              ? "text-[var(--color-success)]"
              : "text-[var(--color-text-primary)]"
          }
        >
          {isPositive ? "+" : "-"}
          {transaction.amount.toFixed(2)} USDCx
        </span>

        <Badge
          variant={
            transaction.status === "completed"
              ? "success"
              : "default"
          }
        >
          {transaction.status}
        </Badge>
      </div>
    </div>
  );
}
