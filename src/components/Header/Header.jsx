"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "What I do?",
    href: "/whatido",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <header className="relative w-full border-b bg-white p-2">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2">
            {/* // add logo here */}
            <span className="font-bold text-3xl text-secondary font-love-light">
              Zeel
            </span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    exact
                    to={item.href}
                    className={({ isActive }) =>
                      `-m-3 flex items-center rounded-md p-3 text-lg font-semibold hover:bg-gray-50 ${
                        isActive ? "text-secondary" : "text-black"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2">
                      <span className="font-bold text-3xl text-secondary font-love-light">
                        Zeel
                      </span>
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span
                            className={({ isActive }) => {
                              `ml-3 text-lg font-bold text-secondary ${
                                isActive ? "text-secondary" : "text-black"
                              }`;
                            }}
                          >
                            {item.name}
                          </span>
                        </NavLink>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
