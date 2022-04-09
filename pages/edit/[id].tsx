import type { NextPage } from 'next';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import { useRecoilState } from 'recoil';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { GrLocation } from 'react-icons/gr';

import { authState } from '../../atoms/states';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Input from '../../components/Input';
import { ClipLoader } from 'react-spinners';
import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { User } from '../../typings';

const EditUser: NextPage = () => {
  const [auth, setAuth]: any = useRecoilState(authState);
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>();
  const [status, setStatus] = useState<number>();
  const [location, setLocation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>();

  const { Token } = auth;

  const router = useRouter();

  const onUpdateUser = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch('/api/updateUser', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        location,
        id: router.query.id,
        token: auth.Token,
      }),
    });

    const data = await response.json();

    const { message, status } = data;
    setStatus(status);
    setMessage(message);

    setLoading(false);

    if (status === 200) {
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  };

  const getUserDetail = async (id: string) => {
    setLoading(true);

    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/Tourist/${id}`;

    try {
      const response = await fetch(baseUrl, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });
      const data = await response.json();

      setUserData(data);
      setName(data.tourist_name);
      setLocation(data.tourist_location);
      setEmail(data.tourist_email);
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
        router.push('/login');
      }
    }
  }, [auth]);

  useEffect(() => {
    if (router.query.id) {
      getUserDetail(router.query.id.toString());
    }
  }, [router.query.id]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>
          Travel Count App - Edit {userData?.tourist_name}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col lg:flex-row">
        <Sidebar data={auth} />
        <div className="min-h-screen basis-4/5">
          <div className="px-7 py-5">
            <div className="mt-2 hidden w-full border-b border-gray-200 pb-5 lg:block">
              <div className="flex cursor-pointer flex-row items-center gap-4 text-gray-400 transition-all duration-150 ease-in-out hover:text-gray-700">
                <span className="text-xl">
                  <FiArrowLeft />
                </span>
                <Link href="/">
                  <p className="text-lg">Back</p>
                </Link>
              </div>
            </div>

            <div className="mt-5 md:mt-10">
              <h1 className="text-3xl font-semibold tracking-wide">
                Edit User
              </h1>
            </div>

            <form onSubmit={onUpdateUser}>
              <div className="mt-10 flex w-full flex-col gap-7">
                <div className="w-full lg:w-1/2">
                  <p className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                    Tourist Name
                  </p>
                  <Input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full bg-transparent text-sm outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    icon={<AiOutlineUser />}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                    Tourist Email
                  </p>
                  <Input
                    type="email"
                    placeholder="jane@unknown.com"
                    className="w-full bg-transparent text-sm outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    icon={<AiOutlineMail />}
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700">
                    Tourist Location
                  </p>
                  <Input
                    type="text"
                    placeholder="Jakarta, Indonesia"
                    className="w-full bg-transparent text-sm outline-none"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    icon={<GrLocation />}
                  />
                </div>
                <div className="w-1/2">
                  {loading ? (
                    <ClipLoader size={30} color="#1E40AF" />
                  ) : (
                    <div className="flex flex-row items-center gap-5">
                      <button
                        type="submit"
                        className="rounded-md bg-blue-700 px-5 py-3 text-sm font-semibold text-gray-100 transition-all duration-150 ease-in-out hover:bg-blue-800 hover:text-white"
                      >
                        Update
                      </button>
                      {status && (
                        <p
                          className={`text-sm capitalize tracking-wide ${
                            status === 200
                              ? 'text-green-600'
                              : 'text-red-600'
                          }`}
                        >
                          {message}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
