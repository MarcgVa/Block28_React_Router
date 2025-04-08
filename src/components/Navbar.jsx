import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom'
import Blue from '../pages/blue'
import Red from '../pages/red'
import Home from '../pages/home'
import { current } from '@reduxjs/toolkit'

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="absolute top-0 w-full bg-white shadow-sm fill-zinc-100 z-10"
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex ">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "current:text-amber-300 border-b-4 border-b-indigo-600 inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    : "inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 default: border-transparent text-gray-500"
                }
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/blue"
                className={({ isActive }) =>
                  isActive
                    ? "current:text-amber-300 border-b-4 border-b-indigo-600 inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    : "inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 default: border-transparent text-gray-500"
                }
                end
              >
                Blue
              </NavLink>
              <NavLink
                to="/red"
                className={({ isActive }) =>
                  isActive
                    ? "current:text-amber-300 border-b-4 border-b-indigo-600 inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 "
                    : "inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700 default: border-transparent text-gray-500"
                }
                end
              >
                Red
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
// inline-flex items-center px-4 pt-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700