import { Button, SsamblueLogo, TextInput } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import ChangeLoginType from '@/components/login/changeLoginType';

interface PropsType {
  changeLoginType: (type: 'oauth' | 'password') => void;
}

const PasswordLogin = ({ changeLoginType }: PropsType) => {
  return (
    <Container>
      <SsamblueLogo size={'MEDIUM'} />
      <ContentContainer>
        <InputContainer>
          <TextInput areaSize={'LARGE'} inputMode={'text'} icon={'Person'} iconColor={'GRAY_200'} labelText={''} />
          <TextInput areaSize={'LARGE'} inputMode={'text'} icon={'Lock'} iconColor={'GRAY_200'} labelText={''} />
        </InputContainer>
        <Button size={'LARGE'} color={'primary'} text={'로그인'} />
        <ChangeLoginType text={"간편 인증 서비스로 로그인하기"} arrow={'left'} onClick={() => changeLoginType('oauth')} />
      </ContentContainer>
    </Container>
  )
}

export default PasswordLogin;

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
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
