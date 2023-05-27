"use client";

import Header from "@/components/common/Header/header";
import { ReactNode } from "react";
import styled from "styled-components";
import { palette } from '@k99hyerin/dj-simblue';

interface PropsType {
  children: ReactNode;
  backgroundColor?: string;
}

const AppLayout = ({ children, backgroundColor }: PropsType) => {
  return (
    <>
      <Header />
      <StyledAppLayout style={{ backgroundColor }}>{children}</StyledAppLayout>
    </>
  );
};

export default AppLayout;

const StyledAppLayout = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${palette.MONO_WHITE};
`;
