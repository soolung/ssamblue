"use client";

import Header from "@/components/common/Header/header";
import { ReactNode } from "react";
import styled from "styled-components";
import { palette, Text } from '@k99hyerin/dj-simblue';
import SideBar from '@/components/common/SideBar/sidebar';
import Head from 'next/head';
import { Metadata } from 'next';

interface PropsType {
  children: ReactNode;
  backgroundColor?: string;
  title: string;
}

export const metadata: Metadata = {
    title: '쌤청이',
}

const AppLayout = ({ children, backgroundColor, title }: PropsType) => {
  return (
    <>
      <Header />
      <SideBar />
      <StyledAppLayout style={{ backgroundColor }}>
        <Text typo={'HEADING_LARGE'}>{title}</Text>
        {children}
      </StyledAppLayout>
    </>
  );
};

export default AppLayout;

const StyledAppLayout = styled.main`
  display: flex;
  flex-direction: column;
  background-color: ${palette.MONO_WHITE};
  margin: 60px 0 0 325px;
  padding: 54px 36px;
  gap: 36px;
`;
