import React from 'react';
import {  FaHome,  FaGift} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';




const Psidebar = () => {
  return (
    <div className="bg-blue-500 shadow-md fixed text-white dark:text-white h-screen w-52 py-8 ">
      <div className="text-xl bg-white mx-3 py-2 flex justify-center items-center  font-bold mb-10">
      <Link href="/">
        <Image
            src="/Logo.svg"
            alt="N"
            width="102"
            height="40"
            className=""
        />
        </Link>
        </div>
      <ul className="space-y-8 flex flex-col text-xl">

        <Link href="/dashboard/patient" >
        <li className="flex flex-col w-3/4 text-md font-semibold m-auto  items-center space-y-2 cursor-pointer hover:bg-blue-400 p-2 rounded">
          <FaHome /> <span>Dashboard</span>
        </li>
        </Link>
        
        <Link href="/dashboard/patient/rewards">
        
        <li className="flex flex-col text-md  font-semibold w-3/4 m-auto  items-center   space-y-2 cursor-pointer hover:bg-blue-400 p-2 rounded">
          <FaGift /> <span>Rewards</span>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Psidebar;
