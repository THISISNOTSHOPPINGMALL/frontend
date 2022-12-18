import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Header } from '../components/defaultLayout/header';
import Head from 'next/head';

import createEmotionCache from '../utility/createEmotionCache';
import '../styles/global.css';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

import '../styles/global.css';

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>SHOPPINGMALL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <div>
        <header>
          <Header />
        </header>
      </div>
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default MyApp;
