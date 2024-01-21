"use client";
import Link from "next/link";
import React from "react";
import AnimatedColors from "./AnimatedColors";

const LINKS = [
  // {
  //   label: "Home --->",
  //   href: "#",
  // },
  // {
  //   label: "Work --->",
  //   href: "#",
  // },
  // {
  //   label: "About --->",
  //   href: "#",
  // },
];

const Navbar = () => {
  const [openCollapse, setOpenCollapse] = React.useState(false);
  return (
    <nav class=" ">
      <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 px-12">
        <Link href="/#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <AnimatedColors />
          {/* <span class="self-center text-2xl font-semibold whitespace-nowrap ">
            Arpit
          </span> */}
        </Link>
        {/* <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          class="md:hidden text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  dark:focus:ring-blue-800"
          type="button"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  class="block py-2 px-3  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark-bg dark:border-gray-700">
            {LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  class="block py-2 px-3  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
