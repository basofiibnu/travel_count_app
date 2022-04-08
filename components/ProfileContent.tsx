import Link from 'next/link';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { User } from '../typings';

interface DetailUser {
  userData: User;
  loading: boolean;
}

const ProfileContent = ({ userData }: DetailUser) => {
  return (
    <div className="min-h-screen basis-4/5">
      <div className="px-7 py-5">
        <div className="mt-2 w-full border-b border-gray-200 pb-5">
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
                pathname: '/edit/id',
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
            >
              Delete
            </button>
          </div>
        </div>

        <div className="mt-7">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">
              General Information
            </h2>
          </div>
          <div className="mb-5 flex flex-row items-center justify-start">
            <div className="w-64">
              <p className="text-md text-gray-500">Tourist Name</p>
              <p className="text-lg text-black">
                {userData.tourist_name}
              </p>
            </div>
            <div className="w-64">
              <p className="text-md text-gray-500">Created at</p>
              <p className="text-lg text-black">
                {userData.createdat.substring(0, 10)}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="w-64">
              <p className="text-md text-gray-500">
                Tourist Location
              </p>
              <p className="text-lg text-black">
                {userData.tourist_location}
              </p>
            </div>
            <div className="w-64">
              <p className="text-md text-gray-500">Tourist Email</p>
              <p className="text-lg text-black">
                {userData.tourist_email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
