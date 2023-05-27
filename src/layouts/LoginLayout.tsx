"use client";

import { ReactNode } from "react";
import styled from "styled-components";
import { palette, SsamblueLogo } from '@k99hyerin/dj-simblue';

interface PropsType {
  children: ReactNode;
  height: number | string;
}

const LoginLayout = ({ children, height }: PropsType) => {
  return (
    <>
      <StyledLoginLayout>
        <Container style={{ height: height }}>
          <SsamblueLogo size={'MEDIUM'} />
          {children}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  background-color: ${palette.MONO_WHITE};
  padding: 96px 64px 58px;
  border-radius: 36px;
  transition: all 0.5s;
`;
