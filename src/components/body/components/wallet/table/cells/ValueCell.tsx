import { CellWrapper } from "./cell.styled";
import { ICoin } from "../../../../../../interfaces/wallet.interfaces";
import { useEffect, useState, useCallback } from "react";

function ValueCell({ obj }: { obj: ICoin }) {
  const [value, setValue] = useState<string>("Loading...");

  const getValue = async () => {
    let coins = await await (
      await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
    ).json();

    switch (obj.coin) {
      case "bitcoin":
        return coins[0].current_price * parseInt(obj.holding);
      case "ethereum":
        return coins[1].current_price * parseInt(obj.holding);
      case "binance":
        return coins[4].current_price * parseInt(obj.holding);
      default:
        return 1000 * parseFloat(obj.holding);
    }
  };

  const handleValue = useCallback(async () => {
    let val = await getValue();
    setValue(val.toString());
  }, []);

  useEffect(() => {
    handleValue();
  }, []);

  return <CellWrapper>{`USD ${value}`}</CellWrapper>;
}

export default ValueCell;
