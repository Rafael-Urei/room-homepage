"use client";

import Link from "next/link";
import useWindow from "../hooks/useWindow";

export default function Nav() {
  const { width } = useWindow();
  return (
    <nav className={width > 680 ? "block" : "hidden"}>
      <ul className="flex gap-6 text-white">
        <li className="duration-200 before:duration-200 relative before:absolute before:w-[0px] before:h-[2px] before:bottom-0 before:left-1/4 before:bg-white hover:before:h-[2px] hover:before:w-1/2">
          <Link href="#">home</Link>
        </li>
        <li className="duration-200 before:duration-200 relative before:absolute before:w-[0px] before:h-[2px] before:bottom-0 before:left-1/4 before:bg-white hover:before:h-[2px] hover:before:w-1/2">
          <Link href="#">shop</Link>
        </li>
        <li className="duration-200 before:duration-200 relative before:absolute before:w-[0px] before:h-[2px] before:bottom-0 before:left-1/4 before:bg-white hover:before:h-[2px] hover:before:w-1/2">
          <Link href="#">about</Link>
        </li>
        <li className="duration-200 before:duration-200 relative before:absolute before:w-[0px] before:h-[2px] before:bottom-0 before:left-1/4 before:bg-white hover:before:h-[2px] hover:before:w-1/2">
          <Link href="#">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
