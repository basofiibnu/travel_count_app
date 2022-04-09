import type { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

import { authState } from '../atoms/states';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserData } from '../typings';

const Home: NextPage = () => {
  const [userData, setUserData] = useState<UserData>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [auth, setAuth]: any = useRecoilState(authState);
  const Router = useRouter();
  const { Token } = auth;

  const getUserList = async (pageValue: number = page) => {
    setLoading(true);

    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/Tourist?page=${pageValue}`;

    try {
      const response = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (auth.length === 0) {
      const storage = window.localStorage.getItem('user');
      if (storage) {
        setAuth(JSON.parse(storage));
      } else {
        Router.push('/login');
      }
    }
  }, [auth]);

  useEffect(() => {
    getUserList(page);
  }, [page, Token]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Travel Count App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:flex-row">
        <Sidebar data={auth} />
        {userData ? (
          <Content
            userData={userData}
            onPageChange={setPage}
            currentPage={page}
            loading={loading}
            getUserList={getUserList}
          />
        ) : (
          <div className="flex min-h-screen items-center justify-center px-5 text-center">
            <p className="text-2xl lowercase tracking-wide">
              there is no data that can be retrieved because api url
              is served under http, not https.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
