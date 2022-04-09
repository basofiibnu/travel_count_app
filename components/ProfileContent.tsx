import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { User } from '../typings';

interface DetailUser {
  userData: User;
  loading?: boolean;
  showDelete: boolean;
  setShowDelete: (e: boolean) => void;
}

interface Info {
  name: string;
  content: string;
}

const InfoContent = ({ name, content }: Info) => (
  <div className="w-full md:w-64">
    <p className="text-md text-gray-500">{name}</p>
    <p className="text-lg text-black">{content}</p>
  </div>
);

const ProfileContent = ({
  userData,
  showDelete,
  setShowDelete,
}: DetailUser) => {
  return (
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
        <div className="mt-10 flex flex-row items-center justify-between border-b border-gray-200 pb-8">
          <div className="flex flex-row items-center gap-5">
            <img
              src={userData.tourist_profilepicture}
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <h1 className="text-2xl font-semibold">
              {userData.tourist_name}
            </h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Link
              href={{
                pathname: '/edit/[id]',
                query: {
                  id: userData.id,
                },
              }}
            >
              <button
                type="button"
                className="text-md rounded-lg border border-gray-300 py-2 px-4 text-black transition-all duration-150 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-white"
              >
                Edit
              </button>
            </Link>
            <button
              type="button"
              className="text-md rounded-lg border border-gray-300 py-2 px-4 text-black transition-all duration-150 ease-in-out hover:scale-110 hover:bg-red-500 hover:text-white"
              onClick={() => setShowDelete(!showDelete)}
            >
              Delete
            </button>
          </div>
        </div>

        <div className="mt-5 md:mt-7">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              General Information
            </h2>
          </div>
          <div className="mb-3 flex flex-col items-center justify-start gap-3 md:mb-5 md:flex-row">
            <InfoContent
              name="Tourist Name"
              content={userData.tourist_name}
            />
            <InfoContent
              name="Created At"
              content={userData.createdat.substring(0, 10)}
            />
          </div>
          <div className="flex flex-col items-center justify-start gap-3 md:flex-row">
            <InfoContent
              name="Tourist Location"
              content={userData.tourist_location}
            />
            <InfoContent
              name="Tourist Email"
              content={userData.tourist_email}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
