import styled from "styled-components";
import { ReactComponent as AddWalletSvg } from "../../assets/add-wallet.svg";
import { IWallet } from "../../interfaces/wallet.interfaces";
import { useWalletStore } from "../../stores/WalletStore";

type WalletSubItemPropType = {
  name: string;
};

export default function WalletSubItem({ name }: WalletSubItemPropType) {
  const handleOnClick = () => {
    console.log("sub item click");
  };

  return (
    <WalletSubItemWrapper onClick={handleOnClick}>
      {name} <span id="three__dot">-</span>
    </WalletSubItemWrapper>
  );
}

export function AddWallet() {
  const { wallets, setWallets } = useWalletStore();

  const handleAddWallets = () => {
    let name = "Wallet " + (wallets!?.length + 1).toString();
    const wallet: IWallet = {
      name: name,
      coins: [],
    };
    setWallets!([...wallets!, wallet]);
    console.log(wallets);
  };

  return (
    <AddWalletButton onClick={handleAddWallets}>
      <AddWalletSvg />
    </AddWalletButton>
  );
}

const WalletSubItemWrapper = styled("div")`
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  width: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .three__dot {
    font-weight: bold;
  }
`;

const AddWalletButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
