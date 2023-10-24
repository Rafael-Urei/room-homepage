"use client";

import Link from "next/link";
import { Close } from "./Icons";
import { useContext } from "react";
import { MenuContext } from "../contexts/menuContext";
import { motion } from "framer-motion";
import { textAnimation } from "../utils/animations";

export function Menu() {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  return (
    <motion.div
      className="w-full h-28 flex items-center justify-between px-8 bg-white"
      exit={{ opacity: 0, y: -20 }}
    >
      <button
        className="flex items-center justify-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Close />
      </button>
      <ul className="flex items-center justify-center gap-6 text-black">
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
    </motion.div>
  );
}
