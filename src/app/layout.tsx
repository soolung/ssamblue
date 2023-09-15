"use client";

import { ReactNode } from "react";
import "@/styles/global.css";
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

interface PropsType {
    children: ReactNode;
}

const queryClient = new QueryClient();

const RootLayout = ({ children }: PropsType) => {

    return (
        <html lang="ko">
        <body>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </RecoilRoot>
        </body>
        </html>
    );
};

export default RootLayout;
