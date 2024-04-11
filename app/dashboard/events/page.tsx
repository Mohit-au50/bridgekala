"use client";
import Navbar from "@/app/ui/events/navbar";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

type Props = {};

export default function page({}: Props) {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const handleNavClick = (index: number) => {
    setActiveIndex(index);
  };

  const navLinks = [
    "Event Details",
    "Assign Coordinator",
    "Session Management",
    "Generate SOW",
  ];

  const header = ["Position", "Time", "Info", "Quantity"];
  return (
    <div className="h-full">
      <h1 className="px-4 pt-4 font-serif text-2xl font-bold tracking-wider">
        Event Request
      </h1>
      <div className="p-4">
        <div className="scrollbar-hide scrollbar-hide flex w-fit items-center overflow-x-scroll rounded-xl border-2 border-primary font-medium">
          {navLinks.map((title: string, index: number) => (
            <Navbar
              key={index}
              title={title}
              isActive={activeIndex === index}
              onClick={() => handleNavClick(index)}
            />
          ))}
        </div>

        {activeIndex === 0 && (
          <div className="w-full p-4">{navLinks[activeIndex]}</div>
        )}
        {activeIndex === 1 && (
          <div className="w-full p-4">
            <div className="flex items-center justify-between gap-x-4">
              <div className="w-1/2">
                <p>{navLinks[activeIndex]}</p>
                <div className="flex h-10 w-full items-center justify-between rounded border-2 border-white px-4">
                  <input
                    type="text"
                    placeholder="search"
                    className="flex-1  border-0 bg-transparent focus:ring-0"
                  />
                  <ChevronDownIcon className="h-6 w-6 text-white" />
                </div>
                <p className="mt-1 text-sm text-primary">Add new Coordinator</p>
              </div>
              <div className="w-1/2">
                <p>
                  Event Name <span className="text-sm">(Venue Here)</span>
                </p>
                <div className="space-y-1 text-sm">
                  <p className="flex items-center justify-between rounded border-[2px] border-primary p-1 px-2">
                    <span>Start 12-12-2024</span>
                    <span>End 15-12-2024</span>
                  </p>
                  <p className="rounded border-[2px] border-primary p-1 px-2">
                    Venue Address:{" "}
                    <span>Some Location 12, Name Here, City, State</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex w-full justify-between gap-4 py-4">
              <div className="h-auto w-1/4">
                <p className="mb-2">Assign Contractor</p>
                <div className="space-y-3 rounded-2xl border-2 border-primary p-3">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-xl border-2 border-primary p-2.5"
                    >
                      <p className="text-sm">
                        Meeting Room {index + 1}{" "}
                        <span className="text-primary">12 Positions</span>
                      </p>
                      <p className="text-[10px]">
                        Start from 12 Jan, 2024 - End at 15 Jan, 2024
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-3/4 pt-7">
                <p>Positions</p>
                <div className="scrollbar-hide w-full overflow-hidden rounded-2xl border-2 border-primary">
                  <div className="mb-2 grid w-full grid-cols-5 border-b-2 border-primary">
                    {header.map((name: any, index: number) => (
                      <button
                        key={index}
                        className={`group flex cursor-pointer items-center gap-2 whitespace-nowrap border-0 p-2 font-medium focus:ring-0`}
                      >
                        <span className="block">{name}</span>
                      </button>
                    ))}
                  </div>

                  <div className="w-full">
                    {Array.from({ length: 5 }).map((_, index: number) => (
                      <div
                        key={index}
                        className="grid w-full cursor-pointer grid-cols-5 border-b-2 border-primary p-1 pl-2"
                      >
                        <p>Camera {index + 1} (video)</p>
                        <p>9 am - 7 pm</p>
                        <p>LP default</p>
                        <p>20</p>
                        <div className="flex h-8 w-full items-center justify-between rounded border-2 border-white px-2">
                          <input
                            type="text"
                            placeholder="search"
                            className="flex-1  border-0 bg-transparent focus:ring-0"
                          />
                          <ChevronDownIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full text-center">
              <button className="rounded-xl bg-primary p-2 px-4 shadow-[0px_0px_7px_#d175b6]">
                Save Edits
              </button>
            </div>
          </div>
        )}
        {activeIndex === 2 && (
          <div className="w-full p-4">{navLinks[activeIndex]}</div>
        )}
        {activeIndex === 3 && (
          <div className="w-full p-4">{navLinks[activeIndex]}</div>
        )}
      </div>
    </div>
  );
}
