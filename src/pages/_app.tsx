import type { AppProps } from 'next/app';
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component ponent {...pageProps} />;
}

export default MyApp;
