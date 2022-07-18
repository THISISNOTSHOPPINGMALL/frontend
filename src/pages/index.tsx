import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '../components/defaultLayout';
import { MainShopping } from '../section/MainShopping';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SHOPPINGMALL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <MainShopping />
      </Layout>
    </div>
  );
};

export default Home;
