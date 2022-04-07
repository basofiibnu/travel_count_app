import React from 'react';
import Router from 'next/router';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import Head from 'next/head';

const Login = () => {
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
              <div className="flex w-full max-w-sm flex-col gap-6">
                <label>
                  <div className="flex w-full flex-row items-center gap-3 rounded-md border border-gray-300 py-4 px-6 transition-all duration-150 ease-in-out hover:border-gray-400 focus:border-gray-400">
                    <AiOutlineUser />
                    <input
                      type="text"
                      placeholder="Username"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>
                <label>
                  <div className="flex w-full flex-row items-center gap-3 rounded-md border border-gray-300 py-4 px-6 transition-all duration-150 ease-in-out hover:border-gray-400 focus:border-gray-400">
                    <RiLockPasswordLine />
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </label>
                <div className="flex flex-row items-center justify-between">
                  <span className="cursor-pointer text-sm font-semibold text-gray-400">
                    Register
                  </span>
                  <button className="rounded-md bg-blue-800 px-5 py-3 text-sm text-gray-100 transition-all duration-150 ease-in-out hover:bg-blue-900 hover:text-white">
                    Sign In
                  </button>
                </div>
              </div>

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
