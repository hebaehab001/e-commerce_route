"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { FiHeart } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { BsCart3 } from "react-icons/bs";
import { signOut, useSession } from "next-auth/react";
import { useSidebar } from "@/components/ui/sidebar";
import { SearchIcon } from "lucide-react";
export default function NavBar() {
  const { state } = useSidebar();
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return <p>Signed in as {session.user.email}</p>;
  }
  return (
    <>
      <nav
        className={`${
          state == "expanded"
            ? "left-[15rem] w-[calc(100vw-15rem)]"
            : "left-0 w-full"
        }  sticky top-0 z-40  bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700`}
      >
        <div className=" flex justify-between px-5 py-3 lg:px-5 lg:pl-4">
          <div className="flex items-center justify-start rtl:justify-end">
            <SidebarTrigger />
            <form>
              <InputGroup>
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
              </InputGroup>
            </form>
          </div>
          {status === "authenticated" ? (
            <div className="flex">
              <Button variant="outline" size="icon" className="rounded-full">
                <BsCart3 />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <FiHeart />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Item>
                    <ItemMedia>
                      <Avatar className="size-10">
                        <AvatarImage
                          src={session?.user?.avatar}
                          className="grayscale"
                        />
                        <AvatarFallback>
                          {session?.user?.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </ItemMedia>
                    <ItemContent className="gap-1">
                      <ItemTitle>{session?.user?.name}</ItemTitle>
                      <ItemDescription>{session?.user?.email}</ItemDescription>
                    </ItemContent>
                  </Item>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>fbnfng@yuhjr</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link
                      href="/login"
                      onClick={() => {
                        signOut({ callbackUrl: "/login" });
                      }}
                    >
                      Log out
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <Link href="/login">
              <Button variant="outline">logIn</Button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}
