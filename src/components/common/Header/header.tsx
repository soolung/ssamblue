import { palette, SsamblueLogo } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import Profile from '@/components/common/Header/profile';
import useUser from '@/hooks/useUser';

const Header = () => {
    const {user} = useUser();
    console.info('header', user)

    return (
        <StyledHeader>
            <SsamblueLogo size={'DEFAULT'} />
            <Profile name={user.name} />
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
