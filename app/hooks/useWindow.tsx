"use client";

import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function useWindow() {
  const [width, setWidth] = useState<any>();
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
