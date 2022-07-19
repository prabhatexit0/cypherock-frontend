import styled from "styled-components";
export const InstructionWrapper = styled.div`
  background-color: ${(props) => props.theme.secondary};
  padding: 1rem;
  border-radius: 0.75em;
  width: 90%;
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
