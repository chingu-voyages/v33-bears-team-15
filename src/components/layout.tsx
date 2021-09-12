import { ReactNode } from "react";
import Footer from "./footer";
import Header, { IHeader } from "./header";

export interface ILayout {
  children?: ReactNode;
  headerProps?: IHeader;
}

const Layout = ({ children, headerProps }: ILayout) => {
  return (
    <>
      <Header {...headerProps} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
