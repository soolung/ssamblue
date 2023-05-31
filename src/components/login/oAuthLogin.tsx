import { Button, Icon, SsamblueLogo } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import ChangeLoginType from '@/components/login/changeLoginType';

interface PropsType {
  changeLoginType: (type: 'oauth' | 'password') => void;
}

const OAuthLogin = ({ changeLoginType }: PropsType) => {
  return (
    <Container>
      <SsamblueLogo size={'MEDIUM'} />
      <ContentContainer>
        <ButtonContainer>
          <Button size={'LARGE'} color={'white'} text={'구글 학교 계정으로 로그인'}>
            <Icon iconName={'Google'} size={'MEDIUM'} />
          </Button>
          <Button size={'LARGE'} color={'white'} text={'BSM 계정으로 로그인'}>
            <Icon iconName={'BSM'} size={'MEDIUM'} />
          </Button>
        </ButtonContainer>
        <ChangeLoginType text={"비밀번호로 로그인하기"} arrow={'right'} onClick={() => changeLoginType('password')} />
      </ContentContainer>
    </Container>
  );
}

export default OAuthLogin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
