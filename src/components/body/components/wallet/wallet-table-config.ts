import { IWalletTableColumn } from "./wallet.interfaces";

export const columns: IWalletTableColumn[] = [
  {
    header: "Coin",
    accessor: "coin",
  },
  {
    header: "Holding",
    accessor: "holding",
  },
  {
    header: "Value",
    accessor: "value",
  },
  {
    header: "Price",
    accessor: "price",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
