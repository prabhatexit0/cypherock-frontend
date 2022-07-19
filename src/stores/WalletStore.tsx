import create from "zustand";
import { ICoin, IWallet } from "../interfaces/wallet.interfaces";

const useStore = create<{
  wallets?: IWallet[];
  setWallets?: (newWallets: IWallet[]) => void;
  currentWallet?: IWallet | null;
  setCurrentWallet?: (newWallet: IWallet) => void;
  currentCoin?: ICoin | null;
  setCurrentCoin?: (currCoin: ICoin) => void;
  filteredCoins?: ICoin[] | null;
  setFilteredCoins?: (newCoins: ICoin[]) => void;
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
  currentCoin: null,
  setCurrentCoin: (currCoin: ICoin) => {
    set((state) => ({
      ...state,
      currentCoin: currCoin,
    }));
  },
  filteredCoins: null,
  setFilteredCoins: (newCoins: ICoin[] | null) => {
    set((state) => ({
      ...state,
      filteredCoins: newCoins,
    }));
  },
}));

export const useWalletStore = () => {
  return {
    wallets: useStore((state) => state.wallets),
    setWallets: useStore((state) => state.setWallets),
    currentWallet: useStore((state) => state.currentWallet),
    setCurrentWallet: useStore((state) => state.setCurrentWallet),
    currentCoin: useStore((state) => state.currentCoin),
    setCurrentCoin: useStore((state) => state.setCurrentCoin),
    filteredCoins: useStore((state) => state.filteredCoins),
    setFilteredCoins: useStore((state) => state.setFilteredCoins),
  };
};
