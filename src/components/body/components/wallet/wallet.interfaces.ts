export interface IWalletTableColumn {
  header: string;
  accessor: string;
}

export interface ICoin {
  coin: string;
  holding: string;
  value: string;
  price: string;
}