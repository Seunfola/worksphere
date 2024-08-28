'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between w-full">
      <div className="flex items-center">
        <Link href="/" className="flex items-center text-gray-700 font-bold text-xl">
          <img
            src="/WorkSphere.png" 
            alt="Company Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <div className="flex flex-col">
            <span>WorkConnect</span>
            <p className="text-sm italic text-gray-600 font-thin">Connecting talents</p>
          </div>
        </Link>
      </div>

      <div className="flex-grow flex justify-center">
        <div className="relative hidden lg:block">
          <input
            type="text"
            className="w-96 p-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
            placeholder="Quick Search (ctrl + D)"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/notifications" className="relative">
          <FontAwesomeIcon
            icon={faBell}
            className="text-gray-400 hover:text-gray-600"
          />
          <span className="absolute top-0 right-0 block h-2 w-2 bg-red-500 rounded-full" />
        </Link>
        <Link href="/profile/employerProfile" className="flex items-center">
          <FontAwesomeIcon
            icon={faUserCircle}
            size="2x"
            className="text-gray-400 hover:text-gray-600"
          />
          <div className="ml-2 hidden sm:block">
            <p className="text-sm font-medium text-gray-700">Talent</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
