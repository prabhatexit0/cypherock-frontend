import styled from "styled-components";
import WalletTable from "./table/WalletTable";
import { columns } from "./wallet-table-config";
import { ReactComponent as AddIcon } from "../../../../assets/add-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/delete-icon.svg";
import searchIcon from "../../../../assets/search-icon.svg";
import { ICoin, IWallet } from "../../../../interfaces/wallet.interfaces";
import { useWalletStore } from "../../../../stores/WalletStore";

function Wallet({ name, coins }: IWallet) {
  const { currentWallet, setCurrentWallet } = useWalletStore();

  const handleCoinAdd = () => {
    let coin: ICoin = {
      coin: "bitcoin",
      holding: "12",
      value: "12300",
    };
  };

  return (
    <WalletWrapper>
      <div className="default__container">
        <TextInput placeholder="Search Your Coin." />
        <DefaultBorderWrapper>
          <button>
            <AddIcon onClick={handleCoinAdd} />
            ADD ICON
          </button>
          {" | "}
          <button>
            <DeleteIcon />
            DELETE
          </button>{" "}
        </DefaultBorderWrapper>
      </div>

      <WalletTitle>{name}</WalletTitle>

      <WalletTable data={coins} columns={columns} />
    </WalletWrapper>
  );
}

export default Wallet;

const WalletWrapper = styled("div")`
  height: 100%;
  padding: 1rem 2rem;

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
  align-items: center;
  gap: 1rem;

  width: max-content;
  border: none;
  padding: 0.75rem 1.5rem;
  border-collapse: collapse;
  border-radius: 0.5em;
  color: #473f37;
  background: ${(props) => props.theme.secondary};
  outline: 1px solid #343231;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: #beb4a8;
    font-size: 0.75rem;
  }
`;

const TextInput = styled.input<{ disabled?: boolean }>`
  width: 18rem;
  border: none;
  padding: 0.75rem 3rem;
  border-collapse: collapse;
  border-radius: 0.5em;
  color: ${(props) => props.theme.font};
  background: transparent url(${searchIcon}) no-repeat 13px center;
  background-color: ${(props) => props.theme.secondary};

  outline: 1px solid #343231;
  &:focus {
    outline-offset: calc(0.15rem - 2px);
    outline: 2px solid ${(props) => props.theme.primary};
  }
`;

const WalletTitle = styled("h2")`
  color: ${(props) => props.theme.primary};
  margin-bottom: 1.5rem;
`;
