"use client";

import Header from "./components/Header/Header";
import News from "./components/News/News";
import StatisticSection from "./components/Statistic/StatisticSection";
import Table from "./components/Table/Table";

export default function Home() {
  return (
    <>
      <Header />
      <StatisticSection />
      <News />
      <Table />
    </>
  );
}
