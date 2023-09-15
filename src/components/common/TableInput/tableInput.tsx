import styled from 'styled-components';
import { ReactNode } from 'react';
import { palette, Text } from '@k99hyerin/dj-simblue';

interface PropsType {
  text: string;
  children: ReactNode;
}

const TableInput = ({ text, children }: PropsType) => {
  return (
    <Container>
      <tbody>
      <tr>
        <Header>
          <Text typo={'PARAGRAPH_SMALL'} textColor={'GRAY_800'}>{text}</Text>
        </Header>
        <Input>{children}</Input>
      </tr>
      </tbody>
    </Container>
  )
}

export default TableInput;

const Container = styled.table`
  width: 100%;
  border-top: 1px solid ${palette.GRAY_100};
  border-bottom: 1px solid ${palette.GRAY_100};
  border-collapse: collapse;
`;

const Header = styled.th`
  background-color: ${palette.GRAY_50};
  padding: 8px 12px;
  text-align: left;
  width: 110px;
`;

const Input = styled.td`
  cursor: pointer;
  padding: 8px 12px;

  input {
    width: 100%;
  }
`;
