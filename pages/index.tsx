import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-row py-2">
      <Head>
        <title>Travel Count App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
