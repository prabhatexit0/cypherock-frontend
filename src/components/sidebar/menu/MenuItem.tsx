import { Children, useState } from "react";
import styled from "styled-components";

type MenuItemProps = {
  title: string;
  children?: JSX.Element[] | null;
};

function MenuItem({ title, children = null }: MenuItemProps) {
  const [showChildren, setShowChildren] = useState<boolean>(false);

  const handleShowChildren = () => {
    setShowChildren((curr) => !curr);
  };

  return (
    <MenuItemWrapper>
      <TitleWrapper onClick={handleShowChildren}>{title}</TitleWrapper>
      <ChildrenContainer>
        {showChildren ? children?.map((child: any) => <ChildWrapper>{child}</ChildWrapper>) : null}
      </ChildrenContainer>
    </MenuItemWrapper>
  );
}

export default MenuItem

const TitleWrapper = styled("div")`
  font-size: 1rem;
  margin: 1rem;
`;

const ChildrenContainer = styled('div')`
  margin-left: 2rem;
`
const ChildWrapper = styled('div')`
  margin-bottom : 1rem;
`

const MenuItemWrapper = styled("div")`
  width: 100%;
  height: max-content;
  border-bottom: 2px solid ${(props) => props.theme.border};
  cursor: pointer;
  font-family: "Avenir LT Std 35 Light";
`;
