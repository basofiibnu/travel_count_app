import React from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { FiHome } from 'react-icons/fi';
import { CgAddR, CgLogOut } from 'react-icons/cg';
import { Auth, authState } from '../atoms/states';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

interface SidebarProps {
  data: Auth;
}

const Sidebar = ({ data }: SidebarProps) => {
  const setAuthState = useSetRecoilState(authState);
  const Router = useRouter();

  const Logout = async () => {
    window.localStorage.removeItem('data');
    setAuthState([]);

    Router.push('/login');
  };

  return (
    <div className="min-h-screen basis-1/5 border-r px-5 pt-12">
      <div className="flex flex-row items-center gap-3">
        <p className="text-4xl text-[#324FC7]">
          <SiYourtraveldottv />
        </p>
        <p className="text-2xl font-semibold">Travel Count</p>
      </div>

      <div className="mt-14 flex flex-row items-center justify-start gap-5">
        <div>
          <img
            src="https://random.imagecdn.app/500/150"
            alt="user-pic"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-medium text-gray-400">
            Administrator
          </p>
          <p className="text-lg font-bold">{data.Name}</p>
        </div>
      </div>

      <div className="mt-14">
        <div>
          <Link href={'/'}>
            <div className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50">
              <p className="flex flex-row gap-3 font-medium text-gray-500 transition-all duration-100 ease-in-out hover:text-gray-800">
                <span className="text-xl">
                  <FiHome />
                </span>
                Home
              </p>
            </div>
          </Link>
          <Link href="/add">
            <div className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50">
              <p className="flex flex-row gap-3 font-medium text-gray-500 transition-all duration-100 ease-in-out hover:text-gray-800">
                <span className="text-xl">
                  <CgAddR />
                </span>
                Add Users
              </p>
            </div>
          </Link>
          <div
            className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50"
            onClick={() => Logout()}
          >
            <p className="flex flex-row gap-3 font-medium text-gray-500 transition-all duration-100 ease-in-out hover:text-gray-800">
              <span className="text-xl">
                <CgLogOut />
              </span>
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
