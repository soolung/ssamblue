"use client";

import { palette, Text } from '@k99hyerin/dj-simblue';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useGoogleLogin } from '@/hooks/useGoogleLogin';

const GoogleCallback = () => {
  const { mutation } = useGoogleLogin();

  useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <Container>
      <Text typo={'DISPLAY_MEDIUM'}>
        <Red>로딩중</Red>학교...
      </Text>
    </Container>
  )
}

export default GoogleCallback;

const Container = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Red = styled.span`
  color: ${palette.PRIMARY_400};
`
