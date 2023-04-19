import * as S from "./style";

interface PropsType {
  imoge: string;
  text: string;
  onClick?: () => void;
}

const MenuItem = ({ imoge, text, onClick }: PropsType) => {
  return (
    <S.MenuItem>
      {imoge}
      <S.MenuLink onClick={onClick}>{text}</S.MenuLink>
    </S.MenuItem>
  );
};

export default MenuItem;
