import create from "zustand";

type PopupContextType = {
  showPopup: boolean;
  setShowPopup: (what: boolean) => void;
};

const useStore = create<PopupContextType>((set) => ({
  showPopup: false,
  setShowPopup: (what: boolean) => {
    set((state) => ({
      ...state,
      showPopup: what,
    }));
  },
}));

export const usePopupContext = () => {
  return {
    showPopup: useStore((state) => state.showPopup),
    setShowPopup: useStore((state) => state.setShowPopup),
  };
};
