import { Component, ErrorInfo, ReactNode } from 'react';
import Layout from '~/components/layouts/default';
import Link from '~components/common/link';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(_: Error, errorInfo: ErrorInfo) {
    console.error(errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Layout>
          <h1 className="font-black text-8xl text-center fill-color pb-14">OPS</h1>

          <h2 className="font-medium text-2xl text-center pb-12">
            Something really bad happened. Don&apos;t worry it&apos;s not your fault!
          </h2>
          <Link
            href="/"
            className="w-32 h-32 rounded-full bg-black text-gray-50 flex items-center justify-center hover:bg-red-800 hover:text-black hover:-rotate-12 transition-all duration-200 font-medium"
          >
            Return Home
          </Link>
        </Layout>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
