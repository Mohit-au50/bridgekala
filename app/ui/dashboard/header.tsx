import {
  BellAlertIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../logo";

export default function Header() {
  return (
    <div className="grid h-20 w-full place-items-center text-sm">
      <div className="flex items-center gap-x-4">
        <InformationCircleIcon className="h-6 w-6" />
        <BellAlertIcon className="h-6 w-6" />
        <div>
          <p>
            Hi, <span className="text-green-400">Bridgkala</span>
          </p>
          <p>Welcome back!</p>
        </div>
        <Logo />
      </div>
    </div>
  );
}
