"use client"
import { Menu, X } from "lucide-react";
import { useState } from 'react';
import Link from "next/link";



function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
  <header className="p-5 fixed bg-gray-800 w-full shadow-2xl">
    <Link href='/'>
      <h1 className="md:text-4xl text-xl font-bold text-blue-500">Ticket.net</h1>
      <div className=" flex whitespace-nowrap space-x-5 md:text-3xl text-sm lg:text-2xl">
        <h2 className="text-white">Bringing your Events</h2>
        <div className="relative">
            <div className="absolute bg-blue-500 -left-2 -top-1
            -bottom-1 -right-2 md:-top-0 md:-bottom-0
            md:-right-3 -rotate-1 h-"  />

                <p className="relative text-white text-sm md:text-3xl"> To life</p>
            
        </div>
      </div>
    </Link>


{/* Nav Toggle Button */}
<div className="absolute top-10 right-5 flex md:hidden">
        {isNavOpen ? (
          <X className="w-8 h-8 text-white cursor-pointer" onClick={toggleNav} />
        ) : (
          <Menu className="w-8 h-8 text-white cursor-pointer" onClick={toggleNav} />
        )}
      </div>

      {/* Nav Icons */}
      <nav
        className={`absolute md:-mt-10 top-24 md:ml-96 right-1 w-48 bg-white shadow-md rounded-lg p-5 md:p-0 md:bg-transparent md:static md:shadow-none md:flex ${
          isNavOpen ? 'block' : 'hidden'
        } md:block space-y-3 md:space-y-0 md:space-x-3`}
      >
        <Link href='/'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">Indonesia</h1>
        </Link>

        <Link href='/korea'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">Korea</h1>
        </Link>

        <Link href='/malaysia'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">Malaysia</h1>
        </Link>

        <Link href='/thailand'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">Thailand</h1>
        </Link>

        <Link href='/philippines'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">Philippines</h1>
        </Link>

        <Link href='/china'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">China</h1>
        </Link>

        <Link href='/singapore'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">Singapore</h1>
        </Link>

        <Link href='/taiwan'>
          <h1 className="w-full md:w-24 text-center mx-auto text-blue-900 font-semibold md:border border-b mb-1 border-blue-900 p-2 rounded-md hover:opacity-50 cursor-pointer">Taiwan</h1>
        </Link>
      </nav>
    </header>
  );
}


export default Header