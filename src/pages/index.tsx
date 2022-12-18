import type { NextPage } from 'next';

import { Layout } from '../components/defaultLayout';
import Shopping from './shopping';

const Home: NextPage = () => {
  return (
    <Layout>
      <Shopping />
    </Layout>
  );
};

export default Home;
