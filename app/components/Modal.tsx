"use client";

import { AnimatePresence, motion } from "framer-motion";
import { containerAnimation } from "../utils/animations";
import { useContext } from "react";
import { MenuContext } from "../contexts/menuContext";

export default function Modal({ children }: { children: React.ReactNode }) {
  const { isOpen } = useContext(MenuContext);
  return (
    <motion.div
      className="h-full w-screen bg-black bg-opacity-30 fixed z-20"
      exit={{ opacity: 0 }}
      variants={containerAnimation}
    >
      {children}
    </motion.div>
  );
}
