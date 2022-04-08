import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/states';

import ProfileContent from '../../components/ProfileContent';
import Sidebar from '../../components/Sidebar';

const Profile: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState();
  const [auth, setAuth]: any = useRecoilState(authState);

  const router = useRouter();
  const { Token } = auth;

  const getUserList = async (id: string) => {
    setLoading(true);

    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/Tourist/${id}`;

    try {
      const response = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const data = await response.json();
      setUserDetail(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (auth.length === 0) {
      router.push('/login');
    }
  }, [auth]);

  useEffect(() => {
    if (router.query.id) {
      const id = router.query.id.toString();
      getUserList(id);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Travel Count App - Detail Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-row">
        <Sidebar data={auth} />
        {userDetail && (
          <ProfileContent userData={userDetail} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default Profile;
