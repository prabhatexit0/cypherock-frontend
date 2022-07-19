import create from "zustand";

type PopupContextType = {
  showPopup: boolean;
  setShowPopup: (what: boolean) => void;
  deviceInstructions?: boolean[];
  verifyInstructions?: boolean[];
  setDeviceInstructions?: (newIns: boolean[]) => void;
  setVerifyInstructions?: (newIns: boolean[]) => void;
};

const useStore = create<PopupContextType>((set) => ({
  showPopup: false,
  deviceInstructions: Array(3).fill(false),
  verifyInstructions: Array(1).fill(false),
  setShowPopup: (what: boolean) => {
    set((state) => ({
      ...state,
      showPopup: what,
    }));
  },
  setDeviceInstructions: (newIns: boolean[]) => {
    set((state) => ({
      ...state,
      deviceInstructions: newIns,
    }));
  },
  setVerifyInstructions: (newIns: boolean[]) => {
    set((state) => ({
      ...state,
      verifyInstructions: newIns,
    }));
  },
}));

export const usePopupContext = () => {
  return {
    showPopup: useStore((state) => state.showPopup),
    setShowPopup: useStore((state) => state.setShowPopup),
    deviceInstructions: useStore((state) => state.deviceInstructions),
    setDeviceInstructions: useStore((state) => state.setDeviceInstructions),
    verifyInstructions: useStore((state) => state.verifyInstructions),
    setVerifyInstructions: useStore((state) => state.setVerifyInstructions),
  };
};
