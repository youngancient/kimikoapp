import React from 'react';
import {  FaHome,  FaGift} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';




const Psidebar = () => {
  return (
    <div className="bg-blue-900 fixed text-white dark:text-white h-screen w-48 py-8 ">
      <div className="text-xl flex justify-center items-center  font-bold mb-10">
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
      <ul className="space-y-6 text-lg">

        <Link href="/dashboard/patient" >
        <li className="flex flex-col w-3/4 m-auto  items-center space-y-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaHome /> <span>Dashboard</span>
        </li>
        </Link>
        
        <Link href="/dashboard/patient">
        
        <li className="flex flex-col w-3/4 m-auto  items-center   space-y-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaGift /> <span>Rewards</span>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Psidebar;
