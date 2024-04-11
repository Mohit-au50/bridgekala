import { PowerIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";

export default function SideBar() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl border-2 border-primary p-4">
      <div className="flex h-full flex-col justify-between">
        <div className="scrollbar-hide w-full overflow-auto text-sm">
          <NavLinks />
        </div>

        <button className="flex h-[48px] w-full items-center justify-center gap-2 rounded-md bg-black p-3 text-sm font-medium text-white shadow-[0px_0px_7px_#d175b6]">
          <PowerIcon className="w-6" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
