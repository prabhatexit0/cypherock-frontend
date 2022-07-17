import { CellWrapper } from "./cell.styled";
import styled from "styled-components";
import recIcon from "../../../../../../assets/recieve-icon.svg";
import sendIcon from "../../../../../../assets/send-icon.svg";

function ActionCell() {
  return (
    <CellWrapper>
      <ButtonContainer>
        <RecieveButton>
          <img src={recIcon} /> RECIEVE
        </RecieveButton>
        {" | "}
        <SendButton>
          <img src={sendIcon} /> SEND
        </SendButton>
      </ButtonContainer>
    </CellWrapper>
  );
}

export default ActionCell;

const ButtonContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(p) => p.theme.border};
  button {
    outline: none;
    border: none;
  }

  img {
    width: auto;
  }
`;

const RecieveButton = styled.button`
  background: transparent;
  font-weight: bold;
  color: #8484f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
`;

const SendButton = styled.button`
  background: transparent;
  font-weight: bold;
  color: #caa276;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
`;
