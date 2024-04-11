"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const [showSubLinks, setShowSubLinks] = useState<boolean>(true);
  const [showUserSubLinks, setShowUserSubLinks] = useState<boolean>(false);

  const links = [
    {
      name: "New Request",
      href: "/dashboard/new-request",
    },
    {
      name: "Estimate",
      href: "/",
    },
    {
      name: "Events",
      href: "/dashboard/events",
    },
    {
      name: "Partial Request",
      href: "/",
    },
  ];

  const userLinks = [
    {
      name: "admins",
      href: "/",
    },
    {
      name: "clients",
      href: "/",
    },
    {
      name: "cordinators",
      href: "/",
    },
  ];
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setShowSubLinks(!showSubLinks)}
          className="flex h-[48px] w-full items-center justify-between rounded-md border-2 border-primary px-4"
        >
          <span>Events</span>
          {showSubLinks ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {showSubLinks && (
          <div className="ml-4 flex flex-col gap-2 pl-6 pt-2.5">
            {links.map((link: any, idx: number) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                ${pathname === link.href && "z-10 border-2 border-primary before:-left-7 before:border-primary"}
                ${pathname !== link.href && "text-white before:-left-[26.5px] before:border-white"}
                ${idx === 0 && "z-10 before:-top-2 before:h-8"}
                ${idx > 0 && "before:-top-14 before:h-20"}
                relative flex h-[48px] w-full items-center justify-start rounded-md px-4 before:absolute before:w-5 before:rounded-bl-2xl before:border-b-2 before:border-l-2`}
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      <button
        onClick={() => setShowSubLinks(!showSubLinks)}
        className="flex h-[48px] w-full items-center justify-between rounded-md px-4"
      >
        Positions
      </button>
      <button
        onClick={() => setShowSubLinks(!showSubLinks)}
        className="flex h-[48px] w-full items-center justify-between rounded-md px-4"
      >
        Contractors
      </button>
      <div className="relative">
        <button
          onClick={() => setShowUserSubLinks(!showUserSubLinks)}
          className="flex h-[48px] w-full items-center justify-between rounded-md px-4"
        >
          <span>Users</span>
          {showSubLinks ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {showUserSubLinks && (
          <div className="ml-4 flex flex-col gap-2 pl-6 pt-2.5">
            {userLinks.map((link: any, idx: number) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                ${pathname === link.href && "border-2 border-primary before:border-primary"}
                ${pathname !== link.href && "text-white before:border-white"}
                ${idx === 0 && "z-10 before:-left-[26.5px] before:-top-2 before:h-8"}
                ${idx > 0 && "before:-left-[26.5px] before:-top-14 before:h-20"}
                relative flex h-[48px] w-full items-center justify-start rounded-md px-4 before:absolute before:w-5 before:rounded-bl-2xl before:border-b-2 before:border-l-2`}
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => setShowSubLinks(!showSubLinks)}
        className="flex h-[48px] w-full items-center justify-between rounded-md border-2 border-primary px-4"
      >
        Profile
      </button>
    </>
  );
}
