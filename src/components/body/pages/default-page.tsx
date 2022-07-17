import styled from "styled-components";
import cylogo from "../../../assets/cylogo.svg";

function DefaultPage() {
  return (
    <DefaultDisplayWrapper>
      <LogoContainer src={cylogo} />
    </DefaultDisplayWrapper>
  );
}

export default DefaultPage;

const LogoContainer = styled("img")`
  height: 3rem;
  width: auto;
`;

const DefaultDisplayWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
