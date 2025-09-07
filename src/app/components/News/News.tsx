"use client";
import React, { useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import HeadLines from "./HeadLines";
import type { News } from "@/app/types";
import { Skeleton } from "@mui/material";
import { useFetch } from "@/app/utils/useFetch";
import Carousel from "./Carousel";
import { gsap } from "gsap/gsap-core";

const News = () => {
  const { data: news, loading: newsLoading } = useFetch<News[]>("news");
  const itemRef = useRef<HTMLDivElement>(null);
  const delay = 0.5;

  useEffect(() => {
    if (itemRef.current) {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, delay: delay, ease: "power2.out" }
      );
    }
  }, [delay]);

  return (
    <>
      <section
        id="News"
        className="md:p-10 p-5 gap-10
            flex flex-col 
            bg-[rgba(8,8,96,1)]
          "
      >
        <Carousel />
        <div ref={itemRef} className="flex flex-col gap-4 lg:flex-row ">
          {news && <NewsCard news={news[0]} />}
          {newsLoading && (
            <Skeleton variant="rectangular" width={600} height={700}></Skeleton>
          )}
          <HeadLines data={news} />
        </div>
      </section>
    </>
  );
};

export default News;
