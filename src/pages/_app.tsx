import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component ponent {...pageProps} />;
}

export default MyApp;