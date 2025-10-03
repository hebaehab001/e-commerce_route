"use client";

import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import {HiShoppingBag} from "react-icons/hi";
import { BiSolidCategory } from "react-icons/bi";
import { TbCircleDashedLetterB } from "react-icons/tb";
import React from "react";
import Link from "next/link";

export default function SideBar({ Categories, Brands }) {
  return (
    <>
      {/* <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      > */}
      {/* <div className="h-full px-3 pb-4 overflow-none bg-white dark:bg-gray-800"> */}
      {/* <Link
            href="/product"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <svg
              className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
            </svg>
            <span className="flex-1 ms-3 whitespace-nowrap">All Products</span>
          </Link> */}
      <Sidebar
        aria-label="Sidebar with multi-level dropdown example"
        className="fixed top-0 left-0 border-0 rounded-none"
      >
        <SidebarLogo href="#">Flowbite</SidebarLogo>
        <SidebarItems>
          <SidebarItemGroup>
            <SidebarItem as={Link} href="/product" icon={HiShoppingBag}>
              All Products
            </SidebarItem>
            <SidebarCollapse icon={BiSolidCategory} label="Categories">
              {Categories.data.map((category) => (
                <SidebarItem as={Link} key={category._id} href="#">
                  {category.name}
                </SidebarItem>
              ))}
            </SidebarCollapse>
            <SidebarCollapse icon={TbCircleDashedLetterB} label="Brands">
              {Brands.data.map((brand) => (
                <SidebarItem as={Link} key={brand._id} href="#">
                  {brand.name}
                </SidebarItem>
              ))}
            </SidebarCollapse>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>
      {/* </div> */}
      {/* // </aside> */}
    </>
  );
}
