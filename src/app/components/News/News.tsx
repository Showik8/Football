"use client";
import React from "react";
import NewsCard from "./NewsCard";
import HeadLines from "./HeadLines";
import type { News } from "@/app/types";
import { Skeleton } from "@mui/material";
import { useFetch } from "@/app/utils/useFetch";

const News = () => {
  const { data: news, loading: newsLoading } = useFetch<News[]>("news");

  return (
    <>
      <section
        id="News"
        className="w-screen  md:p-10 p-5 gap-10
            flex flex-col md:flex-row justify-around 
            bg-[rgba(8,8,96,1)]
          "
      >
        {news && <NewsCard news={news[0]} />}
        {newsLoading && (
          <Skeleton variant="rectangular" width={600} height={700}></Skeleton>
        )}

        <HeadLines data={news} />
      </section>
    </>
  );
};

export default News;
