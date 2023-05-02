import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import * as S from "./style";

const Frame = () => {
  return (
    <S.MainLayout>
      <Header />
      <SideBar />
    </S.MainLayout>
  );
};

export default Frame;
