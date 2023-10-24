"use client";

import { useEffect, useState } from "react";

export default function useWindow() {
  const [width, setWidth] = useState<number | undefined>();
  useEffect(() => {
    if (typeof window === "undefined") return;
    setWidth(window.innerWidth);
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
