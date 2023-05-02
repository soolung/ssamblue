import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { ReactNode } from "react";
import * as S from "./style";

interface PropsInterface {
  children: ReactNode;
}

const Frame = ({ children }: PropsInterface) => {
  return (
    <S.MainLayout>
      <Header />
      <SideBar />
      {children}
    </S.MainLayout>
  );
};

export default Frame;
