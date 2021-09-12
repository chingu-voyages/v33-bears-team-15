import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export interface ILayout {
  home?: boolean;
  children?: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
