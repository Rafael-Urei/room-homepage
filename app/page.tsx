"use client";

import useSWR from "swr";
import Loading from "./components/Loading";
import { Suspense, useContext, useState } from "react";
import { AngleLeft, AngleRight, Arrow, Hamburger } from "./components/Icons";
import Link from "next/link";
import useWindow from "./hooks/useWindow";
import { AnimatePresence, motion } from "framer-motion";
import {
  containerAnimation,
  imageAnimation,
  invertedTextAnimation,
  textAnimation,
  titleAnimation,
} from "./utils/animations";
import Modal from "./components/Modal";
import { Menu } from "./components/Menu";
import { MenuContext } from "./contexts/menuContext";

interface PostsTypes {
  id: string;
  title: string;
  description: string;
  image: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data } = useSWR("/api/post", fetcher);
  const [selectedPost, setSelectedPost] = useState(1);
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const { width } = useWindow();

  if (!data) return <Loading />;
  const posts = data.posts;
  const currentPost = posts.filter(
    (post: PostsTypes) => post.id === selectedPost.toString()
  );

  function nextPost() {
    if (selectedPost > posts.length - 1) {
      setSelectedPost((prev) => (prev = 1));
    } else {
      setSelectedPost((prev) => prev + 1);
    }
  }

  function prevPost() {
    if (selectedPost === 1) {
      setSelectedPost((prev) => (prev = posts.length));
    } else {
      setSelectedPost((prev) => prev - 1);
    }
  }

  return (
    <main className="min-h-screen">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
      >
        <AnimatePresence>
          {isOpen && (
            <Modal>
              <Menu />
            </Modal>
          )}
        </AnimatePresence>
        {currentPost.map((post: PostsTypes) => {
          return (
            <div key={post.id} className="flex mobile:flex-col laptop:flex-row">
              {width && width > 680 ? (
                <Suspense>
                  <motion.img
                    src={width > 680 ? post.image[0] : post.image[1]}
                    initial="hidden"
                    animate="visible"
                    variants={imageAnimation}
                  />
                </Suspense>
              ) : (
                <div className="w-full relative">
                  <img
                    src={width && width > 680 ? post.image[0] : post.image[1]}
                    className="w-full"
                  />
                  <div
                    className={
                      width && width > 680
                        ? "hidden"
                        : "flex absolute bottom-0 right-0"
                    }
                  >
                    <button
                      type="button"
                      className="flex items-center justify-center mobile:py-4 mobile:px-[30px] laptop:py-7 laptop:px-[33px] bg-black duration-200 hover:bg-very-dark-gray"
                      onClick={prevPost}
                    >
                      <AngleLeft />
                    </button>
                    <button
                      type="button"
                      className="flex items-center justify-center mobile:py-3 mobile:px-[30px] laptop:py-7 laptop:px-[33px] bg-black duration-200 hover:bg-very-dark-gray"
                      onClick={nextPost}
                    >
                      <AngleRight />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col justify-center">
                <div className="flex flex-1 flex-col mobile:px-9 mobile:pt-[50px] mobile:pb-[50px] laptop:px-20 laptop:pt-[80px] laptop:pb-[40px] mobile:gap-4 laptop:gap-4 standard:gap-9 justify-center">
                  <div className="flex flex-col mobile:gap-4 standard:gap-4">
                    <motion.h1
                      variants={titleAnimation}
                      className="font-bold tracking-tighter mobile:text-4xl laptop:text-3xl desktop:text-5xl standard:text-6xl text-black"
                    >
                      {post.title}
                    </motion.h1>
                    <motion.p
                      variants={textAnimation}
                      className="mobile:h-auto laptop:h-[170px] flex items-center justify-center text-sm laptop:text-sm desktop:text-base standard:text-lg text-dark-gray"
                    >
                      {post.description}
                    </motion.p>
                  </div>
                  <Link
                    className="flex items-center text-black hover:text-dark-gray mobile:text-sm mobile:tracking-[.50em] laptop:tracking-[.50em] desktop:tracking-[.75em] standard:tracking-[.90em] gap-6 duration-200"
                    href="#"
                  >
                    SHOP NOW{" "}
                    <motion.div variants={textAnimation}>
                      <Arrow />
                    </motion.div>
                  </Link>
                </div>
                <div className={width && width > 680 ? "flex" : "hidden"}>
                  <button
                    type="button"
                    className="flex items-center justify-center mobile:py-4 mobile:px-[30px] laptop:py-7 laptop:px-[33px] bg-black duration-200 hover:bg-very-dark-gray"
                    onClick={prevPost}
                  >
                    <AngleLeft />
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center mobile:py-3 mobile:px-[30px] laptop:py-7 laptop:px-[33px] bg-black duration-200 hover:bg-very-dark-gray"
                    onClick={nextPost}
                  >
                    <AngleRight />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </motion.section>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerAnimation}
        className="flex mobile:flex-col laptop:flex-row items-center"
      >
        <img src={data.about.image[0]}></img>
        <div className="flex flex-col flex-1 p-9 desktop:px-16 standard:px-16 gap-3 standard:gap-6">
          <motion.h1
            className="mobile:tracking-[.50em] mobile:text-xs laptop:tracking-[.20em] desktop:tracking-[.45em] standard:text-2xl font-bold"
            variants={titleAnimation}
          >
            {data.about.title.toUpperCase()}
          </motion.h1>
          <motion.p
            className="mobile:text-sm laptop:text-xs desktop:text-base standard:text-lg text-dark-gray"
            variants={invertedTextAnimation}
          >
            {data.about.description}
          </motion.p>
        </div>
        <img src={data.about.image[1]}></img>
      </motion.section>
    </main>
  );
}
