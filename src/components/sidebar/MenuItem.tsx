import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useWalletStore } from "../../stores/WalletStore";
import WalletSubItem from "./WalletSubItem";
import { IWallet } from "../../interfaces/wallet.interfaces";

type MenuItemProps = {
  title: string;
  icon: string;
  route?: string;
  children?: JSX.Element[] | null;
  isWallet?: boolean;
};

function MenuItem({
  title,
  icon,
  route = "",
  children = null,
  isWallet = false,
}: MenuItemProps) {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  let navigate = useNavigate();

  const { wallets } = useWalletStore();
  console.log(wallets);

  const handleTitleClick = () => {
    setShowChildren((curr) => !curr);
    navigate(route, { replace: true });
  };

  return (
    <MenuItemWrapper>
      <TitleWrapper onClick={handleTitleClick}>
        {" "}
        <img src={icon} alt="" /> {title}
      </TitleWrapper>
      <ChildrenContainer>
        {isWallet && showChildren
          ? wallets?.map((child: IWallet, idx) => (
              <WalletSubItem name={child.name} key={idx} />
            ))
          : null}
        {showChildren
          ? children?.map((child: any) => <ChildWrapper>{child}</ChildWrapper>)
          : null}
      </ChildrenContainer>
    </MenuItemWrapper>
  );
}

export default MenuItem;

const TitleWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  padding: 1rem;
  font-family: "Avenir LT Std 35 Light";
`;

const ChildrenContainer = styled("div")`
  margin-left: 3.5rem;
  font-size: 0.75rem;
`;
const ChildWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const MenuItemWrapper = styled("div")`
  width: 100%;
  height: max-content;
  border-bottom: 2px solid ${(props) => props.theme.border};
  cursor: pointer;
`;
