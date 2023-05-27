import { Button, Icon } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import ChangeLoginType from '@/components/login/changeLoginType';

interface PropsType {
  changeLoginType: (type: 'oauth' | 'password') => void;
}

const OAuthLogin = ({ changeLoginType }: PropsType) => {
  return (
    <Container>
      <ButtonContainer>
        <Button size={'LARGE'} state={'ENABLED'} text={'구글 학교 계정으로 로그인'}>
          <Icon iconName={'Error'} size={'SMALL'} />
        </Button>
        <Button size={'LARGE'} state={'ENABLED'} text={'BSM 계정으로 로그인'}>
          <Icon iconName={'Error'} size={'SMALL'} />
        </Button>
      </ButtonContainer>
      <ChangeLoginType text={"비밀번호로 로그인하기"} arrow={'right'} onClick={() => changeLoginType('password')} />
    </Container>
  );
}

export default OAuthLogin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
