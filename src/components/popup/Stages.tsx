import {
  InstructionWrapper,
  DeviceStageWrapper,
  VerifyStageWrapper,
} from "./stages.styles";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";
import tickMark from "../../assets/tick-mark.png";
import { usePopupContext } from "./PopupContext";

type InstructionPropTypes = {
  instruction: string;
  id: number;
  status?: boolean;
  handleOnClick: (id: number) => void;
};

function Instruction({
  instruction,
  id,
  handleOnClick,
  status = false,
}: InstructionPropTypes) {
  return (
    <InstructionWrapper isDone={status} onClick={() => handleOnClick(id)}>
      <div>
        <RightArrow /> {instruction}
      </div>
      {status ? <img src={tickMark} alt="" /> : null}
    </InstructionWrapper>
  );
}
export function DeviceStage() {
  const { deviceInstructions, setDeviceInstructions } = usePopupContext();

  const handleOnClick = (id: number) => {
    const ins = [...deviceInstructions!];
    ins[id] = true;
    setDeviceInstructions!(ins);
  };

  return (
    <DeviceStageWrapper>
      <div className="sub-text">Follow the instruction on device</div>
      <Instruction
        handleOnClick={handleOnClick}
        id={0}
        instruction="Select the Wallet On device"
        status={deviceInstructions![0]}
      />
      <Instruction
        handleOnClick={handleOnClick}
        id={1}
        instruction="Select the Coin on device"
        status={deviceInstructions![1]}
      />
      <Instruction
        handleOnClick={handleOnClick}
        id={2}
        instruction="Tap 1 card of any 4 Cards"
        status={deviceInstructions![2]}
      />
    </DeviceStageWrapper>
  );
}

export function VerifyStage() {
  return <VerifyStageWrapper></VerifyStageWrapper>;
}
