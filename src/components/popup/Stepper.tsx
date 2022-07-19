import styled from "styled-components";
import { useEffect, useRef } from "react";
import React from "react";

export type StepType = {
  value: number;
  label: string;
};

export type StepperPropTypes = {
  steps: StepType[];
  activeStep: number;
};

function Stepper({ steps, activeStep }: StepperPropTypes) {
  const stepRef: React.MutableRefObject<HTMLSpanElement>[] = Array(
    steps.length
  ).fill(useRef<HTMLSpanElement>());
  useEffect(() => {
    stepRef[activeStep].current.classList.add("active");
    for (let i = 0; i < activeStep; i++) {
      stepRef[i].current.classList.add("done");
    }
  }, [activeStep]);

  return (
    <StepperWrapper>
      {steps.map((step, idx) => (
        // @ts-ignore
        <StepWrapper ref={stepRef[idx]}>
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

  .active {
    background-color: white;
  }
`;
