import { CellWrapper } from "./cell.styled";
import { ICoin } from "../../../../../../interfaces/wallet.interfaces";

function ValueCell({ obj }: { obj: ICoin }) {
  const getValue = () => {
    return 1000 * parseFloat(obj.holding);
  };
  return <CellWrapper>{`USD ${getValue()}`}</CellWrapper>;
}

export default ValueCell;
