"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useState,
} from "react";

interface MenuData {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuData>({
  isOpen: false,
  setIsOpen: () => {},
});

export default function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
