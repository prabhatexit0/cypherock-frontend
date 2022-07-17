import { useState } from "react";
import styled from "styled-components";

function WalletPage() {
  const text = "Select or Add a Wallet";
  const [selected, setSelected] = useState(true);

  return (
    <>
      {!selected ? (
        <WalletDisplayWrapper>{text}</WalletDisplayWrapper>
      ) : (
        <Wallet />
      )}
    </>
  );
}

export default WalletPage;

const WalletDisplayWrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
`;

function Wallet() {
  return (
    <WalletWrapper>
      <div className="default__container">
        <h4>Synchronized</h4>
      </div>

      <div className="default__container">
        <TextInput placeholder="Search Your Coin." />
        <DefaultBorderWrapper>
          <button>ADD COIN</button>
          {" | "}
          <button>DELETE</button>{" "}
        </DefaultBorderWrapper>
      </div>

      <WalletTitle>Wallet 1</WalletTitle>
    </WalletWrapper>
  );
}

const WalletWrapper = styled("div")`
  border: 1px solid white;
  height: 100%;
  padding: 2rem;

  .default__container {
    display: flex;
    justify-content: end;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1.5rem;
    gap: 1rem;
  }
`;

const DefaultBorderWrapper = styled("div")`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;

  width: max-content;
  border: none;
  padding: 0.75rem 1.5rem;
  border-collapse: collapse;
  border-radius: 0.5em;
  color: ${(props) => props.theme.font};
  background: ${(props) => props.theme.bg};
  outline: 2px solid ${(props) => props.theme.secondary};

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.font};
  }
`;

const TextInput = styled.input<{ disabled?: boolean }>`
  width: 15rem;
  border: none;
  padding: 0.75rem 1.5rem;
  border-collapse: collapse;
  border-radius: 0.5em;
  color: ${(props) => props.theme.font};
  background-color: ${(props) => props.theme.bg};
  outline: 2px solid ${(props) => props.theme.secondary};
  &:focus {
    outline-offset: calc(0.15rem - 2px);
    outline: 2px solid ${(props) => props.theme.primary};
  }
`;

const WalletTitle = styled("h2")`
  color: ${(props) => props.theme.primary};
  margin: 0;
`;
