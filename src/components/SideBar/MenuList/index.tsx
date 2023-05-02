import { ReactNode } from "react";
import * as S from "./style";

interface PropsInterface {
  children: ReactNode;
  title: string;
}

const MenuList = ({ children, title }: PropsInterface) => {
  return (
    <S.MenuList>
      <S.Title>{title}</S.Title>
      {children}
    </S.MenuList>
  );
};

export default MenuList;
