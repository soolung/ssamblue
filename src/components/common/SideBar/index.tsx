import MenuList from "./MenuList";
import * as S from "./style";

const SideBar = () => {
  return (
    <S.SideBar>
      <MenuList title="신청">
        <S.MenuItem>
          📝<S.MenuLink>만들기</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          💾<S.MenuLink>기록보기</S.MenuLink>
        </S.MenuItem>
      </MenuList>
      <MenuList title="배너">
        <S.MenuItem>
          🏳️<S.MenuLink>등록하기</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          🏴<S.MenuLink>관리하기</S.MenuLink>
        </S.MenuItem>
      </MenuList>
      <MenuList title="이석증">
        <S.MenuItem>
          📅<S.MenuLink>오늘의 이석증</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          👀<S.MenuLink>확인하기</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          🙏<S.MenuLink>처리하기</S.MenuLink>
        </S.MenuItem>
      </MenuList>
      <MenuList title="그룹">
        <S.MenuItem>
          👥<S.MenuLink>만들기</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          🤟<S.MenuLink>관리하기</S.MenuLink>
        </S.MenuItem>
      </MenuList>
    </S.SideBar>
  );
};

export default SideBar;
