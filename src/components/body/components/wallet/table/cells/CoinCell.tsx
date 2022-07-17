import { CellWrapper } from "./cell.styled";
import styled from "styled-components";
import bitIcon from "../../../../../../assets/bitcoin-icon.svg";
import ethIcon from "../../../../../../assets/ethereum-icon.svg";
import binIcon from "../../../../../../assets/binance-icon.svg";

function CoinCell({ coin }: { coin: string }) {
  const getIcon = () => {
    switch (coin.toLowerCase()) {
      case "binance":
        return binIcon;
      case "ethereum":
        return ethIcon;
      case "bitcoin":
        return bitIcon;
    }
  };

  return (
    <CellWrapper>
      <ImageTitleContainer>
        <img src={getIcon()} /> {coin}
      </ImageTitleContainer>
    </CellWrapper>
  );
}

export default CoinCell;

const ImageTitleContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
