"use client";

import { useEffect, useState } from "react";

export default function useWindow() {
  const initValue = window.innerWidth;
  const [width, setWidth] = useState<number>(initValue);
  useEffect(() => {
    if (typeof window === "undefined") return;
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { width };
}
