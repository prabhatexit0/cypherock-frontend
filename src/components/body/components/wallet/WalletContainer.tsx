import { useState } from "react";
import styled from "styled-components";
import Wallet from "./Wallet";

function WalletPage() {
  const text = "Select or Add a Wallet";
  const [selected, setSelected] = useState(true);

  return (
    <>
      {!selected ? (
        <WalletDisplayWrapper>{text}</WalletDisplayWrapper>
      ) : (
        <Wallet />
      )}
    </>
  );
}

export default WalletPage;

const WalletDisplayWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
`;
