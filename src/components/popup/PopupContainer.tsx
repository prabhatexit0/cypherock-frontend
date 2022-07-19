import styled from "styled-components";
import { usePopupContext } from "../body/components/wallet/PopupContext";
import { useWalletStore } from "../../stores/WalletStore";

function RecievePopup() {
  const { setShowPopup } = usePopupContext();
  const { currentCoin } = useWalletStore();

  const handlePopupClose = () => {
    setShowPopup(false);
    console.log(currentCoin);
  };

  return (
    <PopupWrapper>
      <PopupStyled>
        <button onClick={handlePopupClose}>close</button>
        <StageCountWrapper>
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </StageCountWrapper>
        Verify Address on Device
        <Instruction instruction="Please Match the Address to be Shown in X1 Wallet" />
      </PopupStyled>
    </PopupWrapper>
  );
}

function CountWithLabel() {
  return <span></span>;
}

export default RecievePopup;

type InstructionPropTypes = {
  instruction: string;
  status?: boolean;
};

function Instruction({ instruction, status = false }: InstructionPropTypes) {
  return <InstructionWrapper>{instruction}</InstructionWrapper>;
}

const StageCountWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 5rem;
  color: #707070;

  span {
    border-radius: 50%;
    border: 2px solid #707070;
    height: 2rem;
    width: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const PopupStyled = styled.div`
  background-color: #13161a;
  height: 90%;
  width: 50rem;
  border-radius: 0.75em;
  padding: 1rem;

  button {
    position: float;
    align-self: flex-end;
    background: none;
    border: none;
    outline: none;
    color: white;
    border: 2px solid white;
    border-radius: 1em;
    padding: 0.5em 1rem;
    cursor: pointer;
    width: 5rem;
  }
`;

const PopupWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InstructionWrapper = styled.div`
  background-color: #212427;
  padding: 1rem;
  border-radius: 0.5em;
  width: 80%;
`;
