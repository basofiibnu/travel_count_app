import type { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Sidebar from '../components/Sidebar';

import { authState } from '../atoms/states';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [userData, setUserData] = useState([]);
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
      Router.push('/login');
    } else {
      getUserList();
    }
  }, [auth]);

  useEffect(() => {
    getUserList(page);
  }, [page]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Travel Count App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row">
        <Sidebar data={auth} />
        <Content
          userList={userData}
          onPageChange={setPage}
          currentPage={page}
          loading={loading}
          getUserList={getUserList}
        />
      </div>
    </div>
  );
};

export default Home;
