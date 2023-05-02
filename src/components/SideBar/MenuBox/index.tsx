import { ReactNode } from "react";
import * as S from "./style";

interface PropsInterface {
  children: ReactNode;
  title: string;
}

const MenuBox = ({ children, title }: PropsInterface) => {
  return (
    <S.MenuBox>
      <S.Title>{title}</S.Title>
      <S.MenuList>{children}</S.MenuList>
    </S.MenuBox>
  );
};

export default MenuBox;
