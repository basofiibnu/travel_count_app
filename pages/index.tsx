import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Travel Count App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
