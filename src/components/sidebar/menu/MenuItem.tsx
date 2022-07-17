import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type MenuItemProps = {
  title: string;
  route?: string;
  children?: JSX.Element[] | null;
};

function MenuItem({ title, route = "", children = null }: MenuItemProps) {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  let navigate = useNavigate();

  const handleTitleClick = () => {
    setShowChildren((curr) => !curr);
    navigate(route, { replace: true });
  };

  return (
    <MenuItemWrapper>
      <TitleWrapper onClick={handleTitleClick}>{title}</TitleWrapper>
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
  font-size: 1rem;
  margin: 1rem;
`;

const ChildrenContainer = styled("div")`
  margin-left: 2rem;
`;
const ChildWrapper = styled("div")`
  margin-bottom: 1rem;
`;

const MenuItemWrapper = styled("div")`
  width: 100%;
  height: max-content;
  border-bottom: 2px solid ${(props) => props.theme.border};
  cursor: pointer;
  font-family: "Avenir LT Std 35 Light";
`;
