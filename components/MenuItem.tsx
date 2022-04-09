import Link from 'next/link';
import React, { Fragment } from 'react';

interface MenuProps {
  link: boolean;
  name: string;
  icon: JSX.Element;
  href?: string;
  onClick?: () => void;
}

const MenuItem = ({ link, name, icon, href, onClick }: MenuProps) => {
  return (
    <Fragment>
      {link && href ? (
        <Link href={href}>
          <div className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50">
            <p className="flex flex-row gap-3 font-medium text-gray-500 transition-all duration-100 ease-in-out hover:text-gray-800">
              <span className="text-xl">{icon}</span>
              {name}
            </p>
          </div>
        </Link>
      ) : (
        <div
          className="mb-3 flex cursor-pointer flex-row items-center rounded-lg px-2 py-3 transition-all duration-100 ease-in-out hover:bg-gray-50"
          onClick={onClick}
        >
          <p className="flex flex-row gap-3 font-medium text-gray-500 transition-all duration-100 ease-in-out hover:text-gray-800">
            <span className="text-xl">{icon}</span>
            {name}
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default MenuItem;
