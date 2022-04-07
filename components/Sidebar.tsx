import React from 'react';
import { SiYourtraveldottv } from 'react-icons/si';
import { FiHome } from 'react-icons/fi';
import { CgAddR, CgLogOut } from 'react-icons/cg';

const Sidebar = () => {
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
            src="https://img.wattpad.com/36e971867b52fbf8cb42abc16dc229156dc88e1f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a574e5258616937583956584c413d3d2d3635333236303439352e313536363130343835646162313538373832323739373637373732382e6a7067?s=fit&w=720&h=720"
            alt="user-pic"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-medium text-gray-400">
            Administrator
          </p>
          <p className="text-lg font-bold">Mr. Lorem Ipsum</p>
        </div>
      </div>

      <div className="mt-14">
        <div>
          <div className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50">
            <p className="flex flex-row gap-3 font-medium text-gray-500 transition-all duration-100 ease-in-out hover:text-gray-800">
              <span className="text-xl">
                <FiHome />
              </span>
              Home
            </p>
          </div>
          <div className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50">
            <p className="flex flex-row gap-3 font-medium text-gray-500 transition-all duration-100 ease-in-out hover:text-gray-800">
              <span className="text-xl">
                <CgAddR />
              </span>
              Add Users
            </p>
          </div>
          <div className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50">
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
