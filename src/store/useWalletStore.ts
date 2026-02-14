    import { create } from "zustand";

    export type TransactionType = "deposit" | "withdraw" | "gift";

    export interface Transaction {
      id: string;
      type: TransactionType;
      amount: number;
      status: "pending" | "completed" | "failed";
      createdAt: string;
    }

    interface WalletState {
      balance: number;
      transactions: Transaction[];
      filter: "all" | TransactionType;

      setBalance: (amount: number) => void;
      addTransaction: (tx: Transaction) => void;
      updateTransactionStatus: (
        id: string,
        status: Transaction["status"],
      ) => void;
      setFilter: (filter: WalletState["filter"]) => void;
    }

    export const useWalletStore = create<WalletState>((set) => ({
      balance: 0,
      transactions: [],
      filter: "all",

      setBalance: (amount) => set({ balance: amount }),

      addTransaction: (tx) =>
        set((state) => ({
          transactions: [tx, ...state.transactions],
        })),

      updateTransactionStatus: (id, status) =>
        set((state) => ({
          transactions: state.transactions.map((tx) =>
            tx.id === id ? { ...tx, status } : tx,
          ),
        })),

      setFilter: (filter) => set({ filter }),
    }));
