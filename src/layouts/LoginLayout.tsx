"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { Icon, palette, Text } from '@k99hyerin/dj-simblue';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '로그인 | 쌤청이',
}

interface PropsType {
    children: ReactNode;
    height: number | string;
}

const LoginLayout = ({ children, height }: PropsType) => {
    const router = useRouter();

    return (
        <>
            <StyledLoginLayout>
                <Container style={{ height: height }}>
                    {children}
                    <SignUpContainer>
                        <Icon iconName={'Help'} size={'MEDIUM'} color={'GRAY_400'} />
                        <Text typo={'LABEL_MEDIUM'} textColor={'GRAY_400'}>
                            계정이 없으신가요?
                        </Text>
                        <TextButton typo={'LABEL_MEDIUM'} textColor={'PRIMARY_400'}
                                    onClick={() => router.push("/signup")}>
                            구글 계정으로 회원가입
                        </TextButton>
                    </SignUpContainer>
                </Container>
            </StyledLoginLayout>
        </>
    );
};

export default LoginLayout;

const StyledLoginLayout = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${palette.GRAY_50};
`;

const Container = styled.section`
  background-color: ${palette.MONO_WHITE};
  padding: 96px 64px 58px;
  border-radius: 36px;
  transition: height 450ms;
  width: 565.54px;
  position: relative;
`;

const SignUpContainer = styled.div`
  position: absolute;
  top: -24px;
  left: 36px;

  display: flex;
  align-items: center;
  gap: 4px;
`;

const TextButton = styled(Text)`
  cursor: pointer;
`;
