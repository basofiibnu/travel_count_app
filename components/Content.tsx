import React, { Fragment } from 'react';
import { HiUsers } from 'react-icons/hi';
import Pagination from './Pagination';
import { PuffLoader } from 'react-spinners';

import { ContentProps } from '../typings';
import User from './User';

const Content = ({
  userData,
  onPageChange,
  currentPage,
  loading,
  getUserList,
}: ContentProps) => {
  return (
    <Fragment>
      {userData && (
        <div className="min-h-screen basis-4/5">
          <div className="px-7 py-5">
            <div className="mt-2 hidden w-full flex-row items-center gap-4 border-b border-gray-300 pb-5 md:flex">
              <div className="text-xl text-gray-400">
                <HiUsers />
              </div>
              <div className="text-lg text-gray-400">
                <p>List of all user will be shown here</p>
              </div>
            </div>
            <div className="mt-5 md:mt-10">
              <h1 className="text-3xl font-semibold">List User</h1>
            </div>

            <div className="mt-10 overflow-x-auto">
              <table className="w-auto table-fixed border-collapse border-slate-500 md:w-full md:table-auto">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-3 text-left text-sm">Name</th>
                    <th className="py-3 text-left text-sm">
                      Last Registered
                    </th>
                    <th className="py-3 text-left text-sm">
                      Location
                    </th>
                    <th className="py-3 text-left text-sm">
                      Operation
                    </th>
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
                  {!loading && !userData.data && (
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
                    userData.data &&
                    userData.data.map((user, i) => (
                      <User
                        createdAt={user.createdat}
                        key={i}
                        name={user.tourist_name}
                        email={user.tourist_email}
                        id={user.id}
                        location={user.tourist_location}
                        profilePic={user.tourist_profilepicture}
                        getUserList={getUserList}
                      />
                    ))}
                </tbody>
              </table>
              <div className="mt-4 flex flex-row items-center justify-between">
                <div className="hidden text-sm text-gray-500 md:block">
                  Showing {userData.per_page} user of{' '}
                  {userData.totalrecord} users
                </div>
                <div className="text-sm">
                  <Pagination
                    totalCount={userData.totalrecord}
                    currentPage={currentPage}
                    pageSize={userData.per_page}
                    siblingCount={2}
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Content;
