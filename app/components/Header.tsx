"use client";

import Link from "next/link";
import { Hamburger, Logo } from "./Icons";
import useWindow from "../hooks/useWindow";
import Nav from "./Nav";
import { useContext } from "react";
import { MenuContext } from "../contexts/menuContext";

export default function Header() {
  const { width } = useWindow();
  const { setIsOpen } = useContext(MenuContext);
  return (
    <header className="fixed w-full h-28 px-14 flex gap-8 items-center mobile:justify-center laptop:justify-start z-20">
      {width && width < 680 && (
        <button
          type="button"
          className="absolute left-[30px]"
          onClick={() => setIsOpen((prev) => !prev)}
        >
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
