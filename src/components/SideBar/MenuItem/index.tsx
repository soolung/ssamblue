import * as S from "./style";

interface PropsInterface {
  imoge: string;
  text: string;
  onClick?: () => void;
}

const MenuItem = ({ imoge, text, onClick }: PropsInterface) => {
  return (
    <S.MenuItem>
      {imoge}
      <S.MenuLink onClick={onClick}>{text}</S.MenuLink>
    </S.MenuItem>
  );
};

export default MenuItem;
