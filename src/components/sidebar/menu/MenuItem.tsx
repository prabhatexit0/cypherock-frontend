import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type MenuItemProps = {
  title: string;
  route?: string;
  children?: JSX.Element[] | null;
  icon: string;
};

function MenuItem({ title, route = "", children = null, icon }: MenuItemProps) {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  let navigate = useNavigate();

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
  margin-left: 4rem;
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
