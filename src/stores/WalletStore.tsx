import create from "zustand";
import { IWallet } from "../interfaces/wallet.interfaces";

const useStore = create<{
  wallets?: IWallet[];
  setWallets?: (newWallets: IWallet[]) => void;
  currentWallet?: IWallet | null;
  setCurrentWallet?: (newWallet: IWallet) => void;
}>((set) => ({
  wallets: [],
  setWallets: (newWallets: IWallet[]) => {
    set((state) => ({
      ...state,
      wallets: newWallets,
    }));
  },
  currentWallet: null,
  setCurrentWallet: (newWallet: IWallet) => {
    set((state) => ({
      ...state,
      currentWallet: newWallet,
    }));
  },
}));

export const useWalletStore = () => {
  return {
    wallets: useStore((state) => state.wallets),
    setWallets: useStore((state) => state.setWallets),
    currentWallet: useStore((state) => state.currentWallet),
    setCurrentWallet: useStore((state) => state.setCurrentWallet),
  };
};
