"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconUserQuestion, IconHome, IconUsersGroup } from "@tabler/icons-react";

export function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "#home",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "#about",
          icon: <IconUserQuestion className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Team",
          link: "#team",
          icon: (
            <IconUsersGroup className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];

    return (
        <div className="relative text-xs shadow-2xl w-full font-bold">
            <FloatingNav navItems={navItems}/>
        </div>
    );
}
