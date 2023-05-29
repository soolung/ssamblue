import styled from "styled-components";

interface TableHeaderItemType {
  id: number;
  value: string;
}

interface PropsType {
  data: TableHeaderItemType[];
}

const TableHeader = ({ data }: PropsType) => {
  return (
    <StyledTableHeader>
      {data &&
        data.map((item) => (
          <TableHeaderItem dataLength={data.length}>
            {item.value}
          </TableHeaderItem>
        ))}
    </StyledTableHeader>
  );
};

export default TableHeader;

const StyledTableHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
`;

const TableHeaderItem = styled.div<{ dataLength: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / ${(props) => props.dataLength});
  height: 100%;
  background-color: #f3f3f3;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;
