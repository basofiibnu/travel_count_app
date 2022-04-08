import React from 'react';
import { HiUsers } from 'react-icons/hi';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import TimeAgo from 'timeago-react';
import Pagination from './Pagination';
import { PuffLoader } from 'react-spinners';
import Link from 'next/link';

import { UserData } from '../typings';

const Content = ({
  userList,
  onPageChange,
  currentPage,
  loading,
}: UserData) => {
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
          <table className="w-full table-auto border-collapse border-slate-500">
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
              {loading && (
                <tr>
                  <td colSpan={4}>
                    <div className="flex min-h-screen flex-col items-center justify-center">
                      <PuffLoader size={100} color="#9CA3AF" />
                      <p className="mt-3 text-lg text-gray-400">
                        Fetching your data...
                      </p>
                    </div>
                  </td>
                </tr>
              )}
              {!loading && !userList.data && (
                <tr>
                  <td colSpan={4}>
                    <div className="flex min-h-screen flex-col items-center justify-center">
                      <p className="mt-3 text-lg text-gray-400">
                        No users data found
                      </p>
                    </div>
                  </td>
                </tr>
              )}
              {!loading &&
                userList.data &&
                userList.data.map((user, i) => (
                  <tr
                    className="cursor-pointer border-b border-gray-200 transition-all duration-150 ease-in-out hover:bg-gray-100"
                    key={i}
                  >
                    <td className="py-6 pl-3 text-left">
                      <Link
                        href={{
                          pathname: '/profile/[id]',
                          query: {
                            id: user.id,
                          },
                        }}
                      >
                        <div className="flex flex-row items-center gap-4">
                          <img
                            src={user.tourist_profilepicture}
                            alt="user-pic"
                            className="h-10 w-10 rounded-full"
                          />
                          <div>
                            <p className="font-medium hover:underline">
                              {user.tourist_name}
                            </p>
                            <p className="text-gray-500">
                              {user.tourist_email}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td>
                      <TimeAgo
                        locale="id_ID"
                        datetime={user.createdat}
                      />
                    </td>
                    <td>{user.tourist_location}</td>
                    <td>
                      <div className="flex flex-row items-center gap-4">
                        <Link
                          href={{
                            pathname: '/edit/[id]',
                            query: {
                              id: user.id,
                            },
                          }}
                        >
                          <button
                            type="button"
                            className="rounded-lg bg-blue-400 p-2 text-xl text-white transition-all duration-150 ease-in-out hover:scale-110 hover:bg-slate-500"
                          >
                            <FiEdit />
                          </button>
                        </Link>
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
              Showing {userList.per_page} user of{' '}
              {userList.totalrecord} users
            </div>
            <div className="text-sm">
              <Pagination
                totalCount={userList.totalrecord}
                currentPage={currentPage}
                pageSize={userList.per_page}
                siblingCount={2}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
