import { ReactNode } from 'react';
import SEO, { ISEO } from '../common/SEO';
import Footer from '../common/footer';
import Header, { IHeader } from '../common/header';
import useAuth from '~/hooks/use-auth';

export interface IDefaultLayout {
  children?: ReactNode;
  headerProps?: IHeader;
  customMeta?: ISEO;
  withFooter?: boolean;
}

const DefaultLayout = ({
  children,
  headerProps,
  customMeta,
  withFooter = true,
}: IDefaultLayout) => {
  useAuth();

  return (
    <>
      <SEO {...customMeta} />
      <Header {...headerProps} />
      <main>{children}</main>
      {withFooter && <Footer />}
    </>
  );
};

export default DefaultLayout;
