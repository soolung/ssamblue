import { Button, TextInput } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import ChangeLoginType from '@/components/login/changeLoginType';

interface PropsType {
  changeLoginType: (type: 'oauth' | 'password') => void;
}

const PasswordLogin = ({ changeLoginType }: PropsType) => {
  return (
    <Container>
      <InputContainer>
        <TextInput areaSize={'LARGE'} inputMode={'text'} icon={'Person'} iconColor={'GRAY_200'} labelText={''} />
        <TextInput areaSize={'LARGE'} inputMode={'text'} icon={'Lock'} iconColor={'GRAY_200'} labelText={''} />
      </InputContainer>
      <Button size={'LARGE'} state={'ENABLED'} text={'로그인'} />
      <ChangeLoginType text={"간편 인증 서비스로 로그인하기"} arrow={'left'} onClick={() => changeLoginType('oauth')} />
    </Container>
  )
}

export default PasswordLogin;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
