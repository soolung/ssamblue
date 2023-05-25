import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

const RootLayout = ({ children }: PropsType) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
