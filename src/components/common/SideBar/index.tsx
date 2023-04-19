import MenuList from "./MenuList";
import * as S from "./style";

const SideBar = () => {
  return (
    <S.SideBar>
      <MenuList title="신청">
        <S.MenuLink>📝 만들기</S.MenuLink>
        <S.MenuLink>💾 기록보기</S.MenuLink>
      </MenuList>
      <MenuList title="배너">
        <S.MenuLink>🏳️ 등록하기</S.MenuLink>
        <S.MenuLink>🏴 관리하기</S.MenuLink>
      </MenuList>
      <MenuList title="이석증">
        <S.MenuLink>📅 오늘의 이석증</S.MenuLink>
        <S.MenuLink>👀 확인하기</S.MenuLink>
        <S.MenuLink>🙏 처리하기</S.MenuLink>
      </MenuList>
      <MenuList title="그룹">
        <S.MenuLink>👥 만들기</S.MenuLink>
        <S.MenuLink>🤟 관리하기</S.MenuLink>
      </MenuList>
    </S.SideBar>
  );
};

export default SideBar;
