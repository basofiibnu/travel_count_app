import React, { Fragment } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ClipLoader } from 'react-spinners';

interface ModalProps {
  showModal: boolean;
  setShowModal: (e: boolean) => void;
  onSubmit: (e?: string | any) => void;
  loadingModal?: boolean;
  title: string;
  submitMsg: string;
  declineMsg: string;
}

const Modal = ({
  showModal,
  setShowModal,
  onSubmit,
  loadingModal,
  title,
  submitMsg,
  declineMsg,
}: ModalProps) => {
  return (
    <Fragment>
      <div className="fixed top-0 left-0 z-50 mx-auto h-screen w-full bg-black/20">
        <div className="absolute left-[3vw] top-[30vh] md:left-1/4 lg:left-1/3">
          <div className="border-1 container mx-auto max-h-80 w-full max-w-md rounded-lg border-indigo-400 bg-indigo-900 p-6 md:w-auto">
            <div className="flex min-w-[250px] max-w-2xl items-center justify-between pb-5 md:min-w-[400px]">
              <div className="text-md font-semibold text-indigo-100">
                <p>{title}</p>
              </div>
              <div className="cursor-pointer">
                <IoMdClose
                  color="#fff"
                  onClick={() => {
                    setShowModal(!showModal);
                  }}
                />
              </div>
            </div>
            {loadingModal ? (
              <div className="flex w-full flex-row items-center justify-center">
                <ClipLoader color="#fff" />
              </div>
            ) : (
              <div className="flex flex-row items-center justify-start gap-3">
                <button
                  className="mt-5 w-auto rounded-lg bg-red-500 px-5 py-2.5 text-center text-sm font-medium text-white transition-all duration-150 ease-in-out hover:bg-red-700 hover:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed"
                  type="button"
                  onClick={onSubmit}
                >
                  {submitMsg}
                </button>
                <button
                  className="mt-5 w-auto rounded-lg bg-gray-100 px-5 py-2.5 text-center text-sm font-medium text-black transition-all duration-150 ease-in-out hover:bg-gray-700 hover:text-gray-100 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed"
                  type="button"
                  onClick={() => setShowModal(!showModal)}
                >
                  {declineMsg}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
