import styled from "styled-components";

export type StepType = {
  value: number;
  label: string;
};

export type StepperPropTypes = {
  steps: StepType[];
};

function Stepper({ steps }: StepperPropTypes) {
  return (
    <StepperWrapper>
      {steps.map((step) => (
        <StepWrapper>
          <StepCount>{step.value}</StepCount>
          <StepLabel>{step.label}</StepLabel>
        </StepWrapper>
      ))}
    </StepperWrapper>
  );
}

const StepperWrapper = styled.div`
  height: 5rem;
  margin: 2rem;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StepCount = styled.span`
  border: 2px solid ${(props) => props.theme.font};
  padding: 1rem;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StepLabel = styled.span`
  font-size: 0.85rem;
`;

export default Stepper;

const StepWrapper = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
