import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/Hero";
import dynamic from "next/dynamic";
import FetchData from "@/app/utils/FetchData";
import { Analytics } from "@vercel/analytics/next";

const StatisticSection = dynamic(
  () => import("./components/Statistic/StatisticSection"),
  { loading: () => <div className="h-full bg-blue-950"></div> }
);

const News = dynamic(() => import("./components/News/News"), {
  loading: () => <div className="h-full bg-blue-950"></div>,
});

const Table = dynamic(() => import("./components/Table/Table"), {
  loading: () => <div className="h-full bg-blue-950"></div>,
});

export default async function Home() {
  const { data, error } = await FetchData();
  if (!data || error) return <div>Error loading data</div>;
  const { news, matches, statistics } = data;

  return (
    <>
      <Header />
      <Hero />
      <StatisticSection statistic={statistics} />
      <News news={news} matches={matches} />
      <Table />
      <Analytics />
    </>
  );
}
