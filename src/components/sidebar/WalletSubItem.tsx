import styled from 'styled-components' 

type WalletSubItemPropType = {
  index: number
}

function WalletSubItem({index}: WalletSubItemPropType) {
  const handleOnClick = () => {
    console.log("sub item click")
  }

  return (
    <WalletSubItemWrapper onClick={handleOnClick}>
      Wallet {index}
    </WalletSubItemWrapper>
  )
}

export default WalletSubItem

const WalletSubItemWrapper = styled('div')`
   
`
