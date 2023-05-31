import { Button, SsamblueLogo, TextInput } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import ChangeLoginType from '@/components/login/changeLoginType';
import { useLogin } from '@/hooks/useLogin';

interface PropsType {
  changeLoginType: (type: 'oauth' | 'password') => void;
}

const PasswordLogin = ({ changeLoginType }: PropsType) => {
  const { handleData, mutation } = useLogin();

  return (
    <Container>
      <SsamblueLogo size={'MEDIUM'} />
      <ContentContainer>
        <InputContainer>
          <TextInput
            areaSize={'LARGE'}
            inputMode={'email'}
            icon={'Person'}
            iconColor={'GRAY_200'}
            labelText={''}
            onChange={handleData}
            name={'email'}
            placeholder={'@bssm.hs.kr'}
          />
          <TextInput
            areaSize={'LARGE'}
            inputMode={'text'}
            type={'password'}
            icon={'Lock'}
            iconColor={'GRAY_200'}
            labelText={''}
            onChange={handleData}
            name={'password'}
            placeholder={'비밀번호를 입력하세요'}
          />
        </InputContainer>
        <Button
          size={'LARGE'}
          color={'primary'}
          text={'로그인'}
          onClick={() => mutation.mutate()}
        />
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
