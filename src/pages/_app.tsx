import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { store } from '../redux/store';
import ErrorBoundary from '~/components/common/error-boundary';
import Head from '~/components/common/head';
import useTheme from '~/hooks/use-theme';

import 'slick-carousel/slick/slick.css';
import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useTheme();

  return (
    <Provider store={store}>
      <Head />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Provider>
  );
}

export default MyApp;
