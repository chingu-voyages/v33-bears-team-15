import { AppProps } from 'next/app';
import ErrorBoundary from '~/components/common/error-boundary';
import useTheme from '~/hooks/use-theme';

import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useTheme();

  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
