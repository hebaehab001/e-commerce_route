"use client";
import { HiShoppingBag } from "react-icons/hi";
import { BiSolidCategory } from "react-icons/bi";
import { TbCircleDashedLetterB } from "react-icons/tb";
import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function SideBar({ Categories, Brands }) {
  const [isOpenc, setIsOpenc] = React.useState(false);
  const [isOpenb, setIsOpenb] = React.useState(false);
  return (
    <>
      <Sidebar className="z-50">
        <SidebarHeader>
          <Link href="/" className="flex ms-2 md:me-24">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 me-3"
              alt="FlowBite Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              E-commerce
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent className=" bg-amber-700">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="product">
                  <HiShoppingBag /> <span>All Products</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <Collapsible open={isOpenc} onOpenChange={setIsOpenc}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <BiSolidCategory />
                  <span>Categories</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {Categories.data.map((category) => (
                    <SidebarMenuSubItem as={Link} key={category._id} href="#">
                      <SidebarMenuButton>{category.name}</SidebarMenuButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
          <Collapsible open={isOpenb} onOpenChange={setIsOpenb}>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton>
                  <TbCircleDashedLetterB />
                  <span>Brands</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {Brands.data.map((brand) => (
                    <SidebarMenuSubItem as={Link} key={brand._id} href="#">
                      <SidebarMenuButton>{brand.name}</SidebarMenuButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </>
  );
}
