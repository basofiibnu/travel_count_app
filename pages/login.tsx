import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import Head from 'next/head';
import Input from '../components/Input';
import { ClipLoader } from 'react-spinners';

import { useSetRecoilState } from 'recoil';
import { authState } from '../atoms/states';

const Login = () => {
  const [isSignin, setIsSignin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const Router = useRouter();

  const setAuthState = useSetRecoilState(authState);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      `/api/${isSignin ? 'login' : 'register'}`,
      {
        method: 'POST',
        body: isSignin
          ? JSON.stringify({
              email: email,
              password: password,
            })
          : JSON.stringify({
              email: email,
              password: password,
              name: username,
            }),
      },
    );

    const data = await response.json();
    const { data: responseData } = data;

    setLoading(false);
    window.localStorage.setItem(
      'user',
      JSON.stringify(responseData.data),
    );
    setAuthState(responseData.data);

    Router.push('/');
  };

  return (
    <div>
      <Head>
        <title>Travel Count App - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen">
        <div className="flex flex-row">
          <div className="basis-2/5 p-5">
            <div className="text-4xl text-[#324FC7]">
              <SiYourtraveldottv />
            </div>
            <div className="flex h-screen flex-col items-center justify-center gap-28">
              {isSignin && (
                <form className="w-full max-w-sm" onSubmit={onSubmit}>
                  <div className="flex flex-col gap-6">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent text-sm outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      icon={<AiOutlineMail />}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full bg-transparent text-sm outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      icon={<RiLockPasswordLine />}
                    />
                    <div className="flex flex-row items-center justify-between">
                      <p
                        className="cursor-pointer text-sm font-semibold text-gray-400"
                        onClick={() => setIsSignin(false)}
                      >
                        Register
                      </p>

                      {loading ? (
                        <ClipLoader size={30} color="#1E40AF" />
                      ) : (
                        <button className="rounded-md bg-blue-800 px-5 py-3 text-sm text-gray-100 transition-all duration-150 ease-in-out hover:bg-blue-900 hover:text-white">
                          Sign In
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              )}

              {!isSignin && (
                <form className="w-full max-w-sm">
                  <div className="flex flex-col gap-6">
                    <Input
                      type="text"
                      placeholder="Username"
                      className="w-full bg-transparent text-sm outline-none"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      icon={<AiOutlineUser />}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent text-sm outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      icon={<AiOutlineMail />}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full bg-transparent text-sm outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      icon={<RiLockPasswordLine />}
                    />
                    <div className="flex flex-row items-center justify-between">
                      <p
                        className="cursor-pointer text-sm font-semibold text-gray-400"
                        onClick={() => setIsSignin(true)}
                      >
                        Sign In
                      </p>
                      {loading ? (
                        <ClipLoader size={30} color="#1E40AF" />
                      ) : (
                        <button
                          type="submit"
                          className="rounded-md bg-blue-800 px-5 py-3 text-sm text-gray-100 transition-all duration-150 ease-in-out hover:bg-blue-900 hover:text-white"
                        >
                          Register
                        </button>
                      )}
                    </div>
                  </div>
                </form>
              )}

              <div className="flex w-full max-w-sm flex-row items-center justify-between text-sm">
                <div className="text-gray-400">Login with</div>
                <div className="flex cursor-pointer flex-row gap-5 font-semibold lowercase text-blue-800">
                  <span>Facebook</span>
                  <span>Twitter</span>
                  <span>Google</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-auto basis-3/5 bg-[url('https://wallpaperaccess.com/full/1431757.jpg')] bg-cover lg:block">
            <div className="px-24 py-24">
              <p className="mb-3 text-sm font-medium text-white opacity-40">
                Start counting your
              </p>
              <p className="text-7xl font-medium text-gray-200">
                Travel User
                <p className="mt-2 text-sm font-medium text-white opacity-40">
                  Build for datacakra portfolio test
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
