import palette from "@/styles/palette";
import * as S from "./style";

interface PropsInterface {
  imoge: string;
  onClick?: () => void;
  name: string;
}

const MenuItem = ({ imoge, onClick, name }: PropsInterface) => {
  return (
    <S.MenuItem>
      {imoge}
      <S.MenuLink onClick={onClick}>{name}</S.MenuLink>
    </S.MenuItem>
  );
};

export default MenuItem;
