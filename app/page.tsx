"use client";

import Image from "next/image";
import useSWR from "swr";
import Loading from "./components/Loading";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api", fetcher);
  console.log(data);

  if (!data) return <Loading />;

  return <main className="min-h-screen"></main>;
}
