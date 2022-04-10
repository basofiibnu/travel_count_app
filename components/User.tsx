import Link from 'next/link';
import React, { useState, Fragment } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdOutlineDelete } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import TimeAgo from 'timeago-react';
import { Auth, authValue } from '../atoms/states';
import Modal from './Modal';

interface UserData {
  id: string;
  profilePic: string;
  name: string;
  email: string;
  createdAt: string;
  location: string;
  getUserList: () => void;
}

const User = ({
  id,
  profilePic,
  name,
  email,
  createdAt,
  location,
  getUserList,
}: UserData) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { Token } = useRecoilValue<Auth>(authValue);

  const onDelete = async () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/api/Tourist/${id}`;
    setLoading(true);
    try {
      const response = await fetch(baseUrl, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const data = await response.json();
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      setLoading(false);
      setShowDelete(false);

      getUserList();
    }, 2000);
  };

  return (
    <Fragment>
      <tr className="cursor-pointer border-b border-gray-200 transition-all duration-150 ease-in-out hover:bg-gray-100">
        <td className="py-6 pl-0 text-left md:pl-3">
          <Link
            href={{
              pathname: '/profile/[id]',
              query: {
                id: id,
              },
            }}
          >
            <div className="flex flex-row items-center gap-4">
              <img
                src={profilePic}
                alt="user-pic"
                className="hidden h-10 w-10 rounded-full md:block"
              />
              <div>
                <p className="font-medium hover:underline">{name}</p>
                <p className="text-gray-500">{email}</p>
              </div>
            </div>
          </Link>
        </td>
        <td>
          <TimeAgo locale="id_ID" datetime={createdAt} />
        </td>
        <td>{location}</td>
        <td>
          <div className="flex flex-row items-center gap-4">
            <Link
              href={{
                pathname: '/edit/[id]',
                query: {
                  id: id,
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
              onClick={() => setShowDelete(true)}
            >
              <MdOutlineDelete />
            </button>
          </div>
        </td>
      </tr>

      {showDelete && (
        <Modal
          title={`Are you sure want to delete ${name}?`}
          submitMsg="Delete"
          declineMsg="No, I'll delete it later"
          showModal={showDelete}
          setShowModal={setShowDelete}
          onSubmit={onDelete}
          loadingModal={loading}
        />
      )}
    </Fragment>
  );
};

export default User;
