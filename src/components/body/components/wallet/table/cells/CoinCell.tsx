import { CellWrapper } from "./cell.styled";
import styled from "styled-components";
import bitcoinIcon from "../../../../../../assets/bitcoin-icon.svg";

function CoinCell({ coin }: { coin: string }) {
  return (
    <CellWrapper>
      <ImageTitleContainer>
        <img src={bitcoinIcon} /> {coin}
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
