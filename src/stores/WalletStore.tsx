import create from "zustand";
import { IWallet } from "../interfaces/wallet.interfaces";

const useStore = create<{
  wallets?: IWallet[];
  setWallets?: (newWallets: IWallet[]) => void;
}>((set) => ({
  wallets: [],
  setWallets: (newWallets: IWallet[]) => {
    set((state) => ({
      ...state,
      wallets: newWallets,
    }));
  },
}));

export const useWalletStore = () => {
  return {
    wallets: useStore((state) => state.wallets),
    setWallets: useStore((state) => state.setWallets),
  };
};
