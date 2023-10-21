"use client";

import Link from "next/link";
import { Hamburger, Logo } from "./Icons";
import useWindow from "../hooks/useWindow";
import Nav from "./Nav";

export default function Header() {
  const { width } = useWindow();
  return (
    <header className="fixed w-full h-28 px-14 flex gap-8 items-center mobile:justify-center laptop:justify-start z-10">
      {width < 680 && (
        <button className="absolute left-[40px]">
          <Hamburger />
        </button>
      )}
      <Link href="#header">
        <Logo />
      </Link>
      <Nav />
    </header>
  );
}
