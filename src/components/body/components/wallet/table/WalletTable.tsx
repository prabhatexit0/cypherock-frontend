import styled from "styled-components";
import {
  ICoin,
  IWalletTableColumn,
} from "../../../../../interfaces/wallet.interfaces";
import { CoinCell, HoldingCell, ValueCell, ActionCell } from "./cells";
import { useWalletStore } from "../../../../../stores/WalletStore";

type WalletTablePropType = {
  data: ICoin[];
  columns: IWalletTableColumn[];
};

function WalletTable({ data, columns }: WalletTablePropType) {
  const { setCurrentCoin } = useWalletStore();

  const handleCoinSelect = (id: string, coin: ICoin) => {
    setCurrentCoin!(coin);
  };

  return (
    <TableWrapper>
      <div className="tool__container">
        <h3>Total Coins - {data.length}</h3>
        <Select>
          <option value="high-low">Amount High Low</option>
          <option value="low-high">Amount Low High</option>
          <option value="a-z">Arrange A-Z</option>
          <option value="Z-A">Arrange Z-A</option>
        </Select>
      </div>
      <Table>
        <Thead>
          <tr>
            {columns.map((column) => (
              <th>{column.header}</th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {data.map((obj, idx) => (
            <Tr
              key={idx}
              id={"tr" + idx}
              onClick={(e) => handleCoinSelect("tr" + idx, obj)}
            >
              <CoinCell coin={obj.coin} />
              <HoldingCell obj={obj} />
              <ValueCell obj={obj} />
              <ActionCell />
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableWrapper>
  );
}

export default WalletTable;

const TableWrapper = styled("div")`
  .tool__container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.border};
    margin-bottom: 1rem;

    h3 {
      margin: 0;
      text-align: end;
    }
  }
`;

const Select = styled("select")`
  border: none;
  outline: none;
  background-color: transparent;
  padding: 1rem;
  color: ${(props) => props.theme.font};

  option {
    background-color: ${(props) => props.theme.secondary};
    padding: 1rem;
  }
`;

const Table = styled("table")`
  height: max-content;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0px 10px;
  border: 0;
  table-layout: fixed;

  tr,
  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }
`;

const Thead = styled("thead")`
  th {
    font-size: 0.75rem;
  }
`;

const Tbody = styled("tbody")`
  overflow-y: scroll;
`;

const Tr = styled("tr")`
  background-color: ${(props) => props.theme.secondary};
  text-transform: uppercase;
  font-size: 0.75rem;
`;
