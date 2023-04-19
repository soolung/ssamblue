import Icon from "components/common/Icon";
import LogoIcon from "assets/logo.svg";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <Icon src={LogoIcon} />
    </S.Header>
  );
};

export default Header;
