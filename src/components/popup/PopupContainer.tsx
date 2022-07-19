import styled from "styled-components";
import { usePopupContext } from "./PopupContext";
import { useWalletStore } from "../../stores/WalletStore";
import Stepper, { StepType } from "./Stepper";
import { DeviceStage } from "./Stages";
import { useState } from "react";

export default function PopupContainer() {
  return (
    <BlackBackground>
      <Popup />
    </BlackBackground>
  );
}

function Popup() {
  const { setShowPopup } = usePopupContext();
  const { currentCoin } = useWalletStore();
  const [activeStep, setActiveStep] = useState(0);

  const handlePopupClose = () => {
    setShowPopup(false);
    console.log(currentCoin);
  };
  const steps: StepType[] = [
    {
      value: 1,
      label: "Device",
    },
    {
      value: 2,
      label: "Verification",
    },
    {
      value: 3,
      label: "Receive",
    },
  ];

  return (
    <PopupWrapper>
      <button onClick={handlePopupClose}>close</button>
      <h1>Recieve</h1>
      <Stepper activeStep={activeStep} steps={steps} />
      <StageWrapper>
        <DeviceStage />
      </StageWrapper>
    </PopupWrapper>
  );
}

const PopupWrapper = styled.div`
  height: 90%;
  width: 50rem;
  background: ${(props) => props.theme.bg};
  border-radius: 1em;

  button {
    background: none;
    border: 1px solid white;
    padding: 0.5rem 1rem;
    color: white;
    display: float;
    float: right;
    margin: 1rem;
    border-radius: 0.5em;
    cursor: pointer;

    &:hover {
      background: white;
      color: black;
    }
  }

  h1 {
    text-align: center;
    margin-top: 5rem;
  }
`;

const BlackBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  height: 100vh;
  width: 100vw;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StageWrapper = styled.div`
  height: max-content;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
