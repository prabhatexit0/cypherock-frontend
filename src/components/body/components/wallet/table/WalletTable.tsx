import styled from "styled-components";
import { ICoin, IWalletTableColumn } from "../wallet.interfaces";
import { CoinCell, HoldingCell, ValueCell, ActionCell } from "./cells";

type WalletTablePropType = {
  data: ICoin[];
  columns: IWalletTableColumn[];
};

function WalletTable({ data, columns }: WalletTablePropType) {
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
            <Tr key={idx}>
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
    padding: 1rem;
    text-align: left;
  }
`;

const Thead = styled("thead")``;

const Tbody = styled("tbody")`
  height: 10rem;
  overflow-y: scroll;
`;

const Tr = styled("tr")`
  background-color: ${(props) => props.theme.secondary};
  text-transform: uppercase;
`;
