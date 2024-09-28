import { LayoutStyles } from "@/styles/layoutStyles";
import { ReactNode, FunctionComponent, useState } from "react";


export interface ILayout {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayout> = ({ children }) => {
  const [account, setAccount] = useState<String>('');

  return (
      <>
      {children}
      </>
  );
};

export default Layout;
