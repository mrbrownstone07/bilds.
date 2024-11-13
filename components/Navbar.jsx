"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconUser, IconHome, IconMessage } from "@tabler/icons-react";

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
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Contact",
          link: "#contact",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];

    return (
        <div className="relative text-xs shadow-2xl w-full font-bold">
            <FloatingNav navItems={navItems}/>
        </div>
    );
}
