import { ReactNode } from "react";
import * as S from "./style";

interface PropsType {
  children: ReactNode;
  title: string;
}

const MenuList = ({ children, title }: PropsType) => {
  return (
    <S.MenuList>
      <S.Title>{title}</S.Title>
      {children}
    </S.MenuList>
  );
};

export default MenuList;
