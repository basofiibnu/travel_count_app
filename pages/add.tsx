import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import { useRecoilState } from 'recoil';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { authState } from '../atoms/states';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [auth, setAuth]: any = useRecoilState(authState);
  const router = useRouter();

  useEffect(() => {
    if (auth.length === 0) {
      router.push('/login');
    }
  }, [auth]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Travel Count App - Add User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row">
        <Sidebar data={auth} />
        <div className="min-h-screen basis-4/5">
          <div className="px-7 py-5">
            <div className="mt-2 flex w-full flex-row items-center gap-4 border-b border-gray-300 pb-5">
              <div className="text-xl text-gray-400">
                <AiOutlineUserAdd />
              </div>
              <div className="text-lg text-gray-400">
                <p>Add Your Tourist Data Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
