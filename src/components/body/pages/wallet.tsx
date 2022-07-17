import styled from "styled-components";

function Wallet() {
  return (
    <WalletDisplayWrapper>
      this is wallet
    </WalletDisplayWrapper>
  )
}

export default Wallet

const WalletDisplayWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`