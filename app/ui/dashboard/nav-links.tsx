"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavLinks() {
  const pathname = usePathname();
  const [showSubLinks, setShowSubLinks] = useState<boolean>(true);

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
      href: "/",
    },
    {
      name: "Partial Request",
      href: "/",
    },
  ];
  return (
    <>
      <div className="relative">
        <button
          onClick={() => setShowSubLinks(!showSubLinks)}
          className="flex h-[48px] w-full items-center justify-between rounded-md border-2 border-[#d175b6] px-4"
        >
          <span>Events</span>
          {showSubLinks ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {showSubLinks && (
          <div className="flex flex-col gap-2 border-l-2 border-[#d175b6] pl-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                ${pathname === link.href && " border-2 border-[#d175b6]"}
                ${pathname !== link.href && "text-white"}
                flex h-[48px] w-full items-center justify-start rounded-md px-4`}
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
          onClick={() => setShowSubLinks(!showSubLinks)}
          className="flex h-[48px] w-full items-center justify-between rounded-md px-4"
        >
          <span>Events</span>
          {showSubLinks ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
        {/* {showSubLinks && (
          <div className="flex flex-col gap-2 border-l-2 border-[#d175b6] pl-4 pt-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                ${pathname === link.href && " border-2 border-[#d175b6]"}
                ${pathname !== link.href && "text-white"}
                flex h-[48px] w-full items-center justify-start rounded-md px-4`}
              >
                <p>{link.name}</p>
              </Link>
            ))}
          </div>
        )} */}
      </div>
      <button
        onClick={() => setShowSubLinks(!showSubLinks)}
        className="flex h-[48px] w-full items-center justify-between rounded-md border-2 border-[#d175b6] px-4"
      >
        Profile
      </button>
    </>
  );
}
