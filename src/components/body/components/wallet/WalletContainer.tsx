import { useState } from "react";
import styled from "styled-components";
import Wallet from "./Wallet";
import { useWalletStore } from "../../../../stores/WalletStore";

function WalletPage() {
  const text = "Select or Add a Wallet";
  const { currentWallet } = useWalletStore();

  return (
    <>
      {currentWallet === null || currentWallet === undefined ? (
        <WalletDisplayWrapper>{text}</WalletDisplayWrapper>
      ) : (
        <Wallet name={currentWallet.name} coins={currentWallet.coins} />
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
