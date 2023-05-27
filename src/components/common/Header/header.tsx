import { Storage } from "@/api/storage";
import { palette, SsamblueLogo } from '@k99hyerin/dj-simblue';
import { ACCESS_KEY } from '@/constants/token';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import Profile from '@/components/common/Header/profile';

const Header = () => {
  const router = useRouter();

  // 로그인 상태 테스트입니다
  const loginStatus = Storage.getItem(ACCESS_KEY);

  return (
    <StyledHeader>
      <SsamblueLogo size={'DEFAULT'} />
      <Profile name={"김한울"} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;
  background-color: ${palette.MONO_WHITE};
  border-bottom: 2px solid ${palette.GRAY_100};
  padding: 0 24px;
`;
