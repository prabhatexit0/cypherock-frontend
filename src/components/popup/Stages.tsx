import { InstructionWrapper, DeviceStageWrapper } from "./stages.styles";
import { ReactComponent as RightArrow } from "../../assets/right-arrow.svg";

type InstructionPropTypes = {
  instruction: string;
  status?: boolean;
};

function Instruction({ instruction, status = false }: InstructionPropTypes) {
  return (
    <InstructionWrapper>
      <RightArrow /> {instruction}
    </InstructionWrapper>
  );
}
export function DeviceStage() {
  return (
    <DeviceStageWrapper>
      <div className="sub-text">Follow the instruction on device</div>
      <Instruction instruction="Select the Wallet On device" />
      <Instruction instruction="Select the Coin on device" />
      <Instruction instruction="Tap 1 card of any 4 Cards" />
    </DeviceStageWrapper>
  );
}
