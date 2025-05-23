"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconBook } from "@tabler/icons-react";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-100 dark:text-white" />,
    },
    {
      name: "Service",
      link: "/service",
      icon: <IconUser className="h-4 w-4 text-neutral-100 dark:text-white" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <IconBook className="h-4 w-4 text-neutral-100 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-100 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};
export default Navbar;
