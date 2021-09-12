import { AppProps } from "next/app";
import ErrorBoundary from "~/components/common/error-boundary";

import "~/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
