import styled from "styled-components";
import WalletTable from "./table/WalletTable";
import { columns } from "./wallet-table-config";
import { ReactComponent as AddIcon } from "../../../../assets/add-icon.svg";
import { ReactComponent as DeleteIcon } from "../../../../assets/delete-icon.svg";
import searchIcon from "../../../../assets/search-icon.svg";
import { ICoin, IWallet } from "../../../../interfaces/wallet.interfaces";
import { useWalletStore } from "../../../../stores/WalletStore";
import { usePopupContext } from "../../../popup/PopupContext";
import RecievePopup from "../../../popup/PopupContainer";
import { useState, useEffect } from "react";

function getRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Wallet({ name, coins }: IWallet) {
  const { currentWallet, setCurrentWallet, currentCoin } = useWalletStore();
  const { showPopup } = usePopupContext();
  const [currentCoins, setCurrentcoins] = useState([...coins]);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredCoins: ICoin[] = coins.filter((coin) =>
      coin.coin.includes(e.target.value.toLowerCase())
    );
    setCurrentcoins(filteredCoins);
  };

  const handleCoinAdd = () => {
    const getRandomCoin = () => {
      const coins = ["bitcoin", "ethereum", "binance"];
      const coin: ICoin = {
        coin: coins[getRandomInteger(0, 2)],
        holding: getRandomInteger(0, 100).toString(),
      };

      return coin;
    };

    const updatedCurrentWallet = { ...currentWallet };
    updatedCurrentWallet.coins!.push(getRandomCoin());
    setCurrentWallet!(updatedCurrentWallet as IWallet);
  };

  const handleCoinDelete = () => {
    const newCoinList = currentWallet?.coins.filter(
      (coin) => JSON.stringify(coin) !== JSON.stringify(currentCoin)
    );
    if (newCoinList !== undefined && currentWallet)
      setCurrentWallet!({
        ...currentWallet,
        coins: newCoinList,
      });
  };

  const cwStringDep = JSON.stringify(currentWallet?.coins);
  useEffect(() => {
    if (currentWallet !== undefined && currentWallet)
      setCurrentcoins(currentWallet?.coins);
  }, [cwStringDep]);

  return (
    <>
      <WalletWrapper>
        <div className="default__container">
          <TextInput
            placeholder="Search Your Coin."
            onChange={(e) => handleFilter(e)}
          />
          <DefaultBorderWrapper>
            <button onClick={handleCoinAdd}>
              <AddIcon />
              ADD COIN
            </button>
            {" | "}
            <button onClick={handleCoinDelete}>
              <DeleteIcon />
              DELETE
            </button>{" "}
          </DefaultBorderWrapper>
        </div>

        <WalletTitle>{name}</WalletTitle>

        <WalletTable data={currentCoins} columns={columns} />
      </WalletWrapper>
      {showPopup ? <RecievePopup /> : null}
    </>
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
