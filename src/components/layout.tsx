import { ReactNode } from 'react';
import SEO, { ISEO } from './common/SEO';
import Footer from './footer';
import Header, { IHeader } from './header';

export interface ILayout {
  children?: ReactNode;
  headerProps?: IHeader;
  customMeta?: ISEO;
}

const Layout = ({ children, headerProps, customMeta }: ILayout) => {
  return (
    <>
      <SEO {...customMeta} />
      <Header {...headerProps} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
