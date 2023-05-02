import MenuItem from "./MenuItem";
import MenuBox from "./MenuBox";
import * as S from "./style";

const SideBar = () => {
  return (
    <S.SideBar>
      <MenuBox title="신청">
        <MenuItem imoge="📝" name="만들기" />
        <MenuItem imoge="💾" name="기록보기" />
      </MenuBox>
      <MenuBox title="배너">
        <MenuItem imoge="🏳️" name="등록하기" />
        <MenuItem imoge="🏴" name="관리하기" />
      </MenuBox>
      <MenuBox title="이석증">
        <MenuItem imoge="📅" name="오늘의 이석증" />
        <MenuItem imoge="👀" name="확인하기" />
        <MenuItem imoge="🙏" name="처리하기" />
      </MenuBox>
      <MenuBox title="그룹">
        <MenuItem imoge="👥" name="만들기" />
        <MenuItem imoge="🤟" name="관리하기" />
      </MenuBox>
    </S.SideBar>
  );
};

export default SideBar;
