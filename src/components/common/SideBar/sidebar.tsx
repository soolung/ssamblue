import MenuItem from "./menuItem";
import MenuBox from "./menuBox";
import styled from 'styled-components';
import { palette } from '@k99hyerin/dj-simblue';

const SideBar = () => {
  return (
    <Container>
      <MenuBox title="신청">
        <MenuItem emoji="📝" name="만들기" href="/application/create" />
        <MenuItem emoji="💾" name="기록보기" href="/application/record" />
      </MenuBox>
      <MenuBox title="배너">
        <MenuItem emoji="🏳️" name="등록하기" href="/banner/register" />
        <MenuItem emoji="🏴" name="관리하기" href="/banner/manage" />
      </MenuBox>
      <MenuBox title="이석증">
        <MenuItem emoji="📅" name="오늘의 이석증" href="/seat-ticket/today" />
        <MenuItem emoji="👀" name="확인하기" href="/seat-ticket/see" />
        <MenuItem emoji="🙏" name="처리하기" href="/seat-ticket/handle" />
      </MenuBox>
      <MenuBox title="그룹">
        <MenuItem emoji="👥" name="만들기" href="/group/create" />
        <MenuItem emoji="🤟" name="관리하기" href="/group/manage" />
      </MenuBox>
    </Container>
  );
};

export default SideBar;

const Container = styled.aside`
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  left: 0;

  width: 325px;
  height: 100%;
  padding: 60px 0;
  background-color: ${palette.GRAY_50};
  border-right: 2px solid ${palette.GRAY_100};
`;
