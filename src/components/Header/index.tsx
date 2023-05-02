import Image from "next/image";
import Logo from "@/assets/logo.svg";
import * as S from "./style";

const Header = () => {
  return (
    <S.Header>
      <Image src={Logo} alt="logo" />
    </S.Header>
  );
};

export default Header;
