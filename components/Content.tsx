import React from 'react';
import { HiUsers } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import TimeAgo from 'timeago-react';

const Content = () => {
  return (
    <div className="min-h-screen basis-4/5">
      <div className="px-7 py-5">
        <div className="mt-2 flex w-full flex-row items-center gap-4 border-b border-gray-300 pb-5">
          <div className="text-xl text-gray-400">
            <HiUsers />
          </div>
          <div className="text-lg text-gray-400">
            <p>List of all user will be shown here</p>
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold">List User</h1>
        </div>

        <div className="mt-10">
          <table className="w-full table-fixed border-collapse border-slate-500">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="py-3 text-left text-sm">Name</th>
                <th className="py-3 text-left text-sm">
                  Last Registered
                </th>
                <th className="py-3 text-left text-sm">Location</th>
                <th className="py-3 text-left text-sm">Operation</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr
                  className="border-b border-gray-200 transition-all duration-150 ease-in-out hover:bg-gray-100"
                  key={i}
                >
                  <td className="py-6 pl-3 text-left">
                    <div className="flex flex-row items-center gap-4">
                      <img
                        src="https://img.wattpad.com/36e971867b52fbf8cb42abc16dc229156dc88e1f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a574e5258616937583956584c413d3d2d3635333236303439352e313536363130343835646162313538373832323739373637373732382e6a7067?s=fit&w=720&h=720"
                        alt="user-pic"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Name</p>
                        <p className="text-gray-500">#userid</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <TimeAgo
                      locale="id_ID"
                      datetime={'2022-03-30T13:48:20.603Z'}
                    />
                  </td>
                  <td>Lake Frederic Edit</td>
                  <td>
                    <div className="flex flex-row items-center gap-4">
                      <button
                        type="button"
                        className="rounded-lg bg-blue-400 p-2 text-xl text-white transition-all duration-150 ease-in-out hover:scale-110 hover:bg-slate-500"
                      >
                        <FiEdit />
                      </button>
                      <button
                        type="button"
                        className="rounded-lg bg-red-400 p-2 text-xl text-white transition-all duration-150 ease-in-out hover:scale-110 hover:bg-red-500"
                      >
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 flex flex-row items-center justify-between">
            <div className="text-sm text-gray-500">
              Showing 10 of 10000
            </div>
            <div className="text-sm text-gray-500">
              <p className="cursor-pointer transition-all duration-150 ease-in-out hover:text-gray-700">
                1 2 3 4 5 6 7
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
