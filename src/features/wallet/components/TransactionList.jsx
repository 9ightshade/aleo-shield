import Card from "../../../components/ui/Card";
// import { Transaction } from "../types";
import TransactionItem from "./TransactionItem";

// interface Props {
//   transactions: Transaction[];
// }

export default function TransactionList({ transactions }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">
        Transaction History
      </h3>

      <div className="flex flex-col divide-y divide-[var(--color-border)]">
        {transactions.map((tx) => (
          /* Use a Fragment to wrap multiple elements without adding extra DOM nodes */
          <div key={tx.id} className="py-2"> 
            {tx.status === "pending" && (
              <span className="text-xs text-yellow-600 animate-pulse block">
                Processing...
              </span>
            )}
            <TransactionItem transaction={tx} />
          </div>
        ))}
      </div>
    </Card>
  );
}