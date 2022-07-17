import styled from "styled-components";
import MenuItem from "./menu/MenuItem";
import WalletSubItem from "./WalletSubItem";

function Sidebar() {
  const walletItems = [];
  for (let i = 1; i <= 3; i++) {
    walletItems.push(<WalletSubItem index={i} />);
  }

  return (
    <SidebarWrapper>
      <MenuItemsContainer>
        <MenuItem title="Portfolio" />
        <MenuItem title="Wallets" children={walletItems} />
        <MenuItem title="Last Transaction" />
        <MenuItem title="Tutorials" />
        <MenuItem title="Settings" />
      </MenuItemsContainer>
      <SupportButton>Support</SupportButton>
    </SidebarWrapper>
  );
}

export default Sidebar;

const SidebarWrapper = styled("div")`
  height: 85vh;
  width: 20rem;
  border-radius: 1em;
  background-color: ${(props) => props.theme.secondary};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const MenuItemsContainer = styled("div")`
  padding:  3rem 0;
`;

const SupportButton = styled('button')`
  height: 3rem;
  width: 10rem;
  background-color: ${props => props.theme.active};
  font-size: 1rem;
  border-radius: 1em;
`