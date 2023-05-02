import GlobalStyled from "@/styles/global";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

interface SeoConfigInterface {
  title: string;
  description: string;
}

const App = ({ Component, pageProps }: AppProps) => {
  const SeoConfig: SeoConfigInterface = {
    title: "쌤청이",
    description: "선생님들만의 심청이, 쌤청이입니다.",
  };

  return (
    <>
      <NextSeo {...SeoConfig} />
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  );
};

export default App;
