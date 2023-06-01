"use client";

import { ReactNode } from "react";
import "@/styles/global.css";
import { QueryClient, QueryClientProvider } from 'react-query';

interface PropsType {
  children: ReactNode;
}

const queryClient = new QueryClient();

const RootLayout = ({ children }: PropsType) => {
  return (
    <html lang="ko">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
