export interface IWalletTableColumn {
  header: string;
  accessor: string;
}

export interface ICoin {
  coin: string;
  holding: string;
}

export interface IWallet {
  name: string;
  coins: ICoin[];
}
