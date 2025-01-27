"use client";
import Link from "next/link";
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";
import { useClerk } from "@clerk/nextjs";

export default function SideNav() {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut(); // Logs the user out
    window.location.href = "/"; // Redirects user to the home page
  };

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <div className="flex text-xl ml-5 mb-3 items-center">
          <PowerIcon className="w-6 mr-2" />
          <button
            className="hidden md:block text-blue-600 hover:underline"
            onClick={handleSignOut} // Fix: Directly call handleSignOut
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
