import styled from "styled-components";
import { ReactComponent as AddWalletSvg } from "../../assets/add-wallet.svg";

type WalletSubItemPropType = {
  index: number;
};

function WalletSubItem({ index }: WalletSubItemPropType) {
  const handleOnClick = () => {
    console.log("sub item click");
  };

  return (
    <WalletSubItemWrapper onClick={handleOnClick}>
      Wallet {index}
    </WalletSubItemWrapper>
  );
}

export function AddWallet() {
  return (
    <AddWalletButton>
      <AddWalletSvg />
    </AddWalletButton>
  );
}

export default WalletSubItem;

const WalletSubItemWrapper = styled("div")``;

const AddWalletButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
