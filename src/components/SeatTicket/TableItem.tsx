import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  dataLength: number;
  children: ReactNode;
}

const TableItem = ({ dataLength, children }: PropsType) => {
  return <StyledTableItem dataLength={dataLength}>{children}</StyledTableItem>;
};

export default TableItem;

const StyledTableItem = styled.div<{ dataLength: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / ${(props) => props.dataLength});
  height: 100%;
`;
