import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/states';

import ProfileContent from '../../components/ProfileContent';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import { User } from '../../typings';

const Profile: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState<User>();
  const [showDelete, setShowDelete] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [auth, setAuth]: any = useRecoilState(authState);

  const router = useRouter();
  const { Token } = auth;

  const getUserList = async () => {
    setLoading(true);

    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/Tourist/${router.query.id}`;

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

  const onDelete = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/Tourist/${router.query.id}`;
    setLoadingDelete(true);
    try {
      const response = await fetch(baseUrl, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setLoadingDelete(false);
      setShowDelete(false);

      router.push('/');
    }, 2000);
  };

  useEffect(() => {
    if (auth.length === 0) {
      const storage = window.localStorage.getItem('user');
      if (storage) {
        setAuth(JSON.parse(storage));
      } else {
        router.push('/login');
      }
    }
  }, [auth]);

  useEffect(() => {
    if (router.query.id) {
      getUserList();
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
          <ProfileContent
            userData={userDetail}
            loading={loading}
            showDelete={showDelete}
            setShowDelete={setShowDelete}
          />
        )}
      </div>

      {showDelete && (
        <Modal
          title={`Are you sure want to delete ${userDetail?.tourist_name}?`}
          submitMsg="Delete"
          declineMsg="No, I'll delete it later"
          showModal={showDelete}
          setShowModal={setShowDelete}
          onSubmit={onDelete}
          loadingModal={loadingDelete}
        />
      )}
    </div>
  );
};

export default Profile;
