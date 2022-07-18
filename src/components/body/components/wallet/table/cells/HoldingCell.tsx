import { ICoin } from "../../../../../../interfaces/wallet.interfaces";
import { CellWrapper } from "./cell.styled";

function HoldingCell({ obj }: { obj: ICoin }) {
  const getPrefix = () => {
    switch (obj.coin.toLowerCase()) {
      case "bitcoin":
        return "BTC";
      case "ethereum":
        return "ETH";
      case "binance":
        return "BIN";
    }
  };

  return <CellWrapper>{getPrefix() + " " + obj.holding}</CellWrapper>;
}

export default HoldingCell;
