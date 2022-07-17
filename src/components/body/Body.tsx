import styled from "styled-components";
import DefaultPage from "./pages/default-page";
import WalletPage from "./pages/wallet-page";
import { Routes, Route } from "react-router-dom";

function Body() {
  return (
    <MainDisplayWrapper>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </MainDisplayWrapper>
  );
}

export default Body;

const MainDisplayWrapper = styled("div")`
  width: 100%;
`;
