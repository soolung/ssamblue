import { ReactNode } from "react";
import styled from 'styled-components';
import { palette, Text } from '@k99hyerin/dj-simblue';

interface PropsInterface {
  children: ReactNode;
  title: string;
}

const MenuBox = ({ children, title }: PropsInterface) => {
  return (
    <Container>
      <Text typo={'PARAGRAPH_SMALL'} textColor={'GRAY_700'}>{title}</Text>
      <MenuList>{children}</MenuList>
    </Container>
  );
};

export default MenuBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  padding: 20px 24px;
  width: 100%;
  border-bottom: 2px solid ${palette.GRAY_100};
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
