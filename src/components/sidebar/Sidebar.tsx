import styled from "styled-components";
import MenuItem from "./MenuItem";
import { AddWallet } from "./WalletSubItem";
import porticon from "../../assets/portfolio-icon.svg";
import tuticon from "../../assets/tutorial-icon.svg";
import walleticon from "../../assets/wallet-icon.svg";
import transicon from "../../assets/trans-icon.svg";
import settingsicon from "../../assets/settings-icon.svg";
import { useState } from "react";

const getBoolArray = (n: number) => {
  const arr: boolean[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(false);
  }
  return arr;
};

function Sidebar() {
  const [activeArray, setActiveArray] = useState<boolean[]>(() =>
    getBoolArray(4)
  );
  const handleActiveStatus = (idx: number): void => {
    const arr = getBoolArray(4);
    arr[idx] = true;
    setActiveArray(arr);
  };

  return (
    <SidebarWrapper>
      <MenuItemsContainer>
        <MenuItem
          index={0}
          title="Portfolio"
          icon={porticon}
          isActive={activeArray[0]}
          handleActiveStatus={handleActiveStatus}
        />
        <MenuItem
          index={1}
          title="Wallets"
          route="/wallet"
          icon={walleticon}
          children={[<AddWallet />]}
          isWallet={true}
          isActive={activeArray[1]}
          handleActiveStatus={handleActiveStatus}
        />
        <MenuItem
          index={2}
          title="Last Transaction"
          icon={transicon}
          isActive={activeArray[2]}
          handleActiveStatus={handleActiveStatus}
        />
        <MenuItem
          index={3}
          title="Tutorials"
          icon={tuticon}
          isActive={activeArray[3]}
          handleActiveStatus={handleActiveStatus}
        />
        <MenuItem
          index={4}
          title="Settings"
          icon={settingsicon}
          isActive={activeArray[4]}
          handleActiveStatus={handleActiveStatus}
        />
      </MenuItemsContainer>
      <SupportButton>Support</SupportButton>
    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled("div")`
  min-height: 80vh;
  width: 17rem;
  border-radius: 1em;
  background-color: ${(props) => props.theme.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const MenuItemsContainer = styled("div")`
  padding: 2rem 0;
`;

const SupportButton = styled("button")`
  height: 3rem;
  width: 100%;
  background-color: #4b3c2b;
  font-size: 1rem;
  border-radius: inherit;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  color: white;
  font-weight: 400;
  border: none;
  outline: none;
`;
