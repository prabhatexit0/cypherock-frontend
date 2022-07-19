import styled from "styled-components";
import MenuItem from "./MenuItem";
import { AddWallet } from "./WalletSubItem";
import porticon from "../../assets/portfolio-icon.svg";
import tuticon from "../../assets/tutorial-icon.svg";
import walleticon from "../../assets/wallet-icon.svg";
import transicon from "../../assets/trans-icon.svg";
import settingsicon from "../../assets/settings-icon.svg";

function Sidebar() {
  return (
    <SidebarWrapper>
      <MenuItemsContainer>
        <MenuItem title="Portfolio" icon={porticon} />
        <MenuItem
          title="Wallets"
          route="/wallet"
          icon={walleticon}
          children={[<AddWallet />]}
          isWallet={true}
        />
        <MenuItem title="Last Transaction" icon={transicon} />
        <MenuItem title="Tutorials" icon={tuticon} />
        <MenuItem title="Settings" icon={settingsicon} />
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
