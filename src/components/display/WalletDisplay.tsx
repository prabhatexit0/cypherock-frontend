import styled from "styled-components";
function WalletDisplay() {
  return (
    <WalletDisplayWrapper>
      this is wallet
    </WalletDisplayWrapper>
  )
}

export default WalletDisplay

const WalletDisplayWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`