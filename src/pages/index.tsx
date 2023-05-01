import { NextSeo } from "next-seo";

interface SeoConfigInterface {
  title: string;
  description: string;
}

const Home = () => {
  const SeoConfig: SeoConfigInterface = {
    title: "쌤청이",
    description: "선생님들만의 심청이, 쌤청이입니다.",
  };

  return (
    <>
      <NextSeo {...SeoConfig} />
    </>
  );
};

export default Home;
