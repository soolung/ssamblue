import { useRouter } from "next/router";
import MenuItem from "./MenuItem";
import MenuBox from "./MenuBox";
import * as S from "./style";

const SideBar = () => {
  const router = useRouter();

  return (
    <S.SideBar>
      <MenuBox title="신청">
        <MenuItem imoge="📝" text="만들기" />
        <MenuItem imoge="💾" text="기록보기" />
      </MenuBox>
      <MenuBox title="배너">
        <MenuItem imoge="🏳️" text="등록하기" />
        <MenuItem imoge="🏴" text="관리하기" />
      </MenuBox>
      <MenuBox title="이석증">
        <MenuItem imoge="📅" text="오늘의 이석증" />
        <MenuItem imoge="👀" text="확인하기" />
        <MenuItem imoge="🙏" text="처리하기" />
      </MenuBox>
      <MenuBox title="그룹">
        <MenuItem imoge="👥" text="만들기" />
        <MenuItem imoge="🤟" text="관리하기" />
      </MenuBox>
    </S.SideBar>
  );
};

export default SideBar;
