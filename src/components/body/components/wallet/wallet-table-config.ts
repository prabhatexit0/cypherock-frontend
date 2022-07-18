import { IWalletTableColumn } from "../../../../interfaces/wallet.interfaces";

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
    header: "Actions",
    accessor: "actions",
  },
];
