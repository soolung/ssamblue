import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
}

const TableRow = ({ children }: PropsType) => {
  return <StyledTableRow>{children}</StyledTableRow>;
};

export default TableRow;

const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: #ffffff;
  border-bottom: 1px solid #e8e8e8;
`;
