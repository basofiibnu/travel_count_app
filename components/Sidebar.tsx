import React, { useState } from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { FiHome } from 'react-icons/fi';
import { CgAddR, CgLogOut } from 'react-icons/cg';
import { Auth, authState } from '../atoms/states';
import Link from 'next/link';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import Modal from './Modal';
import MenuItem from './MenuItem';

interface SidebarProps {
  data: Auth;
}

const Sidebar = ({ data }: SidebarProps) => {
  const [showLogout, setShowLogout] = useState(false);
  const [loading, setLoading] = useState(false);
  const setAuthState = useSetRecoilState(authState);
  const Router = useRouter();

  const logout = async () => {
    setLoading(true);
    window.localStorage.removeItem('user');
    setAuthState([]);

    Router.push('/login');
  };

  return (
    <div className="basis-5/5 min-h-0 border-r px-5 pt-12 lg:min-h-screen lg:basis-1/5">
      <div className="flex flex-row items-center justify-between gap-3">
        <div className="flex flex-row items-center gap-3">
          <p className="text-4xl text-[#324FC7]">
            <SiYourtraveldottv />
          </p>
          <p className="text-2xl font-semibold">
            <Link href={'/'}>Travel Count</Link>
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 lg:hidden">
          <Link href={'/add'}>
            <span className="text-2xl">
              <CgAddR />
            </span>
          </Link>
          <div
            onClick={() => setShowLogout(true)}
            className="text-2xl"
          >
            <CgLogOut />
          </div>
        </div>
      </div>

      <div className="mt-14 hidden flex-row items-center justify-start gap-5 lg:flex">
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

      <div className="mt-14 hidden lg:block">
        <div>
          <MenuItem link href="/" name="Home" icon={<FiHome />} />
          <MenuItem
            link
            href="/add"
            name="Add User"
            icon={<CgAddR />}
          />
          <MenuItem
            onClick={() => setShowLogout(true)}
            link={false}
            name="Logout"
            icon={<CgLogOut />}
          />
        </div>
      </div>

      {showLogout && (
        <Modal
          title={`Are you sure want to logout?`}
          submitMsg="Logout"
          declineMsg="Later"
          showModal={showLogout}
          setShowModal={setShowLogout}
          onSubmit={logout}
          loadingModal={loading}
        />
      )}
    </div>
  );
};

export default Sidebar;
