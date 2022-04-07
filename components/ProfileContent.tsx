import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

const ProfileContent = () => {
  return (
    <div className="min-h-screen basis-4/5">
      <div className="px-7 py-5">
        <div className="mt-2 w-full border-b border-gray-200 pb-5">
          <div className="flex cursor-pointer flex-row items-center gap-4 text-gray-400 transition-all duration-150 ease-in-out hover:text-gray-700">
            <span className="text-xl">
              <FiArrowLeft />
            </span>
            <p className="text-lg">Back</p>
          </div>
        </div>
        <div className="mt-10 flex flex-row items-center justify-between border-b border-gray-200 pb-8">
          <div className="flex flex-row items-center gap-5">
            <img
              src="https://img.wattpad.com/36e971867b52fbf8cb42abc16dc229156dc88e1f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a574e5258616937583956584c413d3d2d3635333236303439352e313536363130343835646162313538373832323739373637373732382e6a7067?s=fit&w=720&h=720"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <h1 className="text-2xl font-semibold">User Name</h1>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button
              type="button"
              className="text-md rounded-lg border border-gray-300 py-2 px-4 text-black transition-all duration-150 ease-in-out hover:scale-110 hover:bg-blue-500 hover:text-white"
            >
              Edit
            </button>
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
              <p className="text-lg text-black">Name</p>
            </div>
            <div className="w-64">
              <p className="text-md text-gray-500">Created at</p>
              <p className="text-lg text-black">Name</p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="w-64">
              <p className="text-md text-gray-500">
                Tourist Location
              </p>
              <p className="text-lg text-black">Name</p>
            </div>
            <div className="w-64">
              <p className="text-md text-gray-500">Tourist Email</p>
              <p className="text-lg text-black">Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
