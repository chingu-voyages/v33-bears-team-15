import { ReactNode } from "react";
import Footer from "./footer";
import BottomPanel from "./bottom-panel";
import Header from "./header";
import styles from "./layout.module.css";

export interface ILayout {
  children?: ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <section className={styles.layout}>
      <Header />
      <main className={styles.mainSection}>{children}</main>
      <BottomPanel />
      <Footer />
    </section>
  );
};

export default Layout;
