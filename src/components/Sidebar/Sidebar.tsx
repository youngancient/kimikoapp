import React from 'react';
import { FaRegHeart, FaHome, FaPills, FaRobot, FaClipboardList, FaGift, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div className="bg-blue-500 shadow-md fixed text-white dark:text-white h-screen w-48 py-5 ">
       <div className="text-xl bg-white mx-3 py-2 flex justify-center items-center  font-bold mb-10">
      <Link href="/">
        <Image
            src="/Logo.svg"
            alt="N"
            width="142"
            height="40"
            className=""
        />
        </Link>
        </div>
      <ul className="space-y-8 flex flex-col text-lg">

        <Link href="/dashboard/professional">
        <li className="flex flex-col w-3/4 m-auto  items-center space-y-2 cursor-pointer hover:bg-blue-400 p-2 rounded">
          <FaHome /> <span className='font-semibold text-sm'>Add Patient</span>
        </li>
        </Link>
        
        <Link href="/dashboard/professional/patient-progress">
        <li className="flex flex-col w-3/4 m-auto items-center space-y-2 cursor-pointer hover:bg-blue-400 p-2 rounded">
          <FaClipboardList /> <span className='font-semibold text-sm'>Progress</span>
        </li>
        </Link>

       
      </ul>
    </div>
  );
};

export default Sidebar;
