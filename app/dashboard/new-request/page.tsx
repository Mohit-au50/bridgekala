"use client";

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ClickData = {
  eventName: boolean;
  eventEnd: boolean;
  clientName: boolean;
};

export default function Page() {
  const router = useRouter();
  const header = [
    { name: "Event Name", propertyName: "eventName" },
    { name: "Event Start", propertyName: "eventStart" },
    { name: "Event End", propertyName: "eventEnd" },
    { name: "Client Name", propertyName: "clientName" },
    { name: "Contact Info", propertyName: "contactInfo" },
    { name: "Venue", propertyName: "venue" },
  ];

  const itemsPerPage = 9;
  const [data, setData] = useState<any[]>(generateData(45));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  const validPage = Math.max(1, Math.min(currentPage, totalPages));
  const firstIndex = (validPage - 1) * itemsPerPage;
  const lastIndex = Math.min(validPage * itemsPerPage, totalItems);
  const [currentItems, setCurrentItems] = useState(
    data.slice(firstIndex, lastIndex),
  );
  const [isClicked, setIsClicked] = useState<ClickData>({
    eventName: false,
    eventEnd: false,
    clientName: false,
  });

  // Function to generate random data
  function generateData(count: number) {
    return Array.from({ length: count }).map((_, index: number) => ({
      name: `0${index + 1} name`,
      date1: `Jan ${index + 1} 2024`,
      date2: `Jan ${index + 3} 2024`,
      clientName: `${index + 1} bridgekala`,
      info: "+91 0000000000",
      venue: "somewhere",
    }));
  }

  // Function to handle header click event
  function handleClick(propertyName: keyof ClickData) {
    setIsClicked((prevData: ClickData) => {
      const updatedState = { ...prevData };
      if (prevData[propertyName]) {
        updatedState[propertyName] = !prevData[propertyName];
      } else {
        return Object.entries(prevData).reduce((updatedState, [key, value]) => {
          updatedState[key as keyof ClickData] = key === propertyName;
          return updatedState;
        }, {} as ClickData);
      }
      return updatedState;
    });
  }

  // Function to handle page navigation
  const goToPage = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () =>
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

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
          <PlusIcon className="h-10 w-10 rounded-md border-2 bg-gradient-to-t from-primary to-blue-500 p-2 text-white" />
        </div>
      </div>

      <div className="">
        <div className="scrollbar-hide w-full">
          <div className="mb-2 grid w-full grid-cols-6 bg-primary">
            {header.map(({ name, propertyName }: any, index: number) => (
              <button
                key={index}
                onClick={() => handleClick(propertyName)}
                className={`group flex cursor-pointer items-center gap-2 whitespace-nowrap border-0 p-4 font-medium focus:ring-0`}
              >
                <span className="block">{name}</span>
                {isClicked[propertyName as keyof ClickData] !== undefined ? (
                  isClicked[propertyName as keyof ClickData] ? (
                    <span className="pointer-events-none hidden group-hover:block">
                      <BarsArrowUpIcon className="h-5 w-5" />
                    </span>
                  ) : (
                    <span className="pointer-events-none hidden group-hover:block">
                      <BarsArrowDownIcon className="h-5 w-5" />
                    </span>
                  )
                ) : null}
              </button>
            ))}
          </div>

          <div className="w-full space-y-2">
            {currentItems.map((item: any, index: number) => (
              <div
                key={index}
                onClick={() => router.push("/dashboard/events")}
                className="grid w-full cursor-pointer grid-cols-6 border-b-2 border-primary p-2"
              >
                <p>{item.name}</p>
                <p>{item.date1}</p>
                <p>{item.date2}</p>
                <p>{item.clientName}</p>
                <p>{item.info}</p>
                <p>{item.venue}</p>
              </div>
            ))}
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
                  pageNumber === currentPage ? "font-bold text-primary" : ""
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
