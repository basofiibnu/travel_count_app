import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ProfileContent from '../../components/ProfileContent';
import Sidebar from '../../components/Sidebar';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Travel Count App - Detail Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row">
        <Sidebar />
        <ProfileContent />
      </div>
    </div>
  );
};

export default Home;
