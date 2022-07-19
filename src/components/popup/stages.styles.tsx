import styled from "styled-components";
export const InstructionWrapper = styled.div<{ isDone: boolean }>`
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;
  border-radius: 0.75em;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  color: ${(props) => (props.isDone ? "#A4A9D6" : props.theme.font)};
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const DeviceStageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  .sub-text {
    align-self: flex-start;
    margin-left: 5%;
  }
`;

export const VerifyStageWrapper = styled.div``;
