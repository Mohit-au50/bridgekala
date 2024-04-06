"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Page() {
  const header = [
    "Event Name",
    "Event Start",
    "Event End",
    "Client Name",
    "Contact Info",
    "Venue",
  ];

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Generate random data
  const data = Array.from({ length: 52 }).map((_, index: number) => ({
    name: `filled name ${index}`,
    date1: `Jan 09 2024`,
    date2: `Jan 10 2024`,
    clientName: "bridgekala",
    info: "+91 0000000000",
    vanue: "somewhere",
  }));

  // Calculate pagination
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  // Ensure currentPage is within valid range
  const validPage = Math.max(1, Math.min(currentPage, totalPages));

  // Recalculate indices using validPage
  const firstIndex = (validPage - 1) * itemsPerPage;
  const lastIndex = Math.min(validPage * itemsPerPage, totalItems);
  const currentItems = data.slice(firstIndex, lastIndex);

  // Handle page change
  function goToPage(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between p-4">
        <h1 className="font-serif text-2xl font-bold tracking-wider">
          Event Request
        </h1>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 rounded-md border-2 bg-white pl-2">
            <MagnifyingGlassIcon className="h-5 w-5 text-black" />
            <input
              type="text"
              placeholder="search"
              className="h-10 w-[200px] rounded-md border-0 text-black focus:ring-0"
            />
          </div>
          <PlusIcon className="h-10 w-10 rounded-full bg-white p-2 text-black" />
        </div>
      </div>

      <div className="">
        <div className="scrollbar-hide w-full">
          <div className="mb-2 grid w-full grid-cols-6 bg-[#d175b6]">
            {header.map((name, index: number) => (
              <button
                key={index}
                className={`font-mediums group flex cursor-pointer items-center gap-2 whitespace-nowrap border-0 p-4 focus:ring-0`}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="w-full space-y-2">
            {currentItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="grid w-full grid-cols-6 border-b-2 border-[#d175b6] p-2"
                >
                  <p>{item.name}</p>
                  <p>{item.date1}</p>
                  <p>{item.date2}</p>
                  <p>{item.clientName}</p>
                  <p>{item.info}</p>
                  <p>{item.vanue}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid h-14 w-full place-items-center bg-black">
        <div className="flex justify-between gap-2">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2.5">
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => goToPage(pageNumber)}
                className={
                  pageNumber === currentPage ? "font-bold text-[#d175b6]" : ""
                }
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <ArrowRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
