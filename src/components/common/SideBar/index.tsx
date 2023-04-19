import MenuItem from "./MenuItem";
import MenuList from "./MenuList";
import * as S from "./style";

const SideBar = () => {
  return (
    <S.SideBar>
      <MenuList title="신청">
        <MenuItem imoge="📝" text="만들기" />
        <MenuItem imoge="💾" text="기록보기" />
      </MenuList>
      <MenuList title="배너">
        <MenuItem imoge="🏳️" text="등록하기" />
        <MenuItem imoge="🏴" text="관리하기" />
      </MenuList>
      <MenuList title="이석증">
        <MenuItem imoge="📅" text="오늘의 이석증" />
        <MenuItem imoge="👀" text="확인하기" />
        <MenuItem imoge="🙏" text="처리하기" />
      </MenuList>
      <MenuList title="그룹">
        <MenuItem imoge="👥" text="만들기" />
        <MenuItem imoge="🤟" text="관리하기" />
      </MenuList>
    </S.SideBar>
  );
};

export default SideBar;
