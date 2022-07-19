import styled from "styled-components";
import Default from "./components/default/Default";
import WalletContainer from "./components/wallet/WalletContainer";
import { Routes, Route } from "react-router-dom";

function Body() {
  return (
    <MainDisplayWrapper>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/wallet/" element={<WalletContainer />} />
      </Routes>
    </MainDisplayWrapper>
  );
}

export default Body;

const MainDisplayWrapper = styled("div")`
  width: 100%;
  height: 100%;
`;
