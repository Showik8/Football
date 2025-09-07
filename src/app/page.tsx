import Header from "./components/Header/Header";
import News from "./components/News/News";
import StatisticSection from "./components/Statistic/StatisticSection";
import Table from "./components/Table/Table";
import { Suspense } from "react";
import Hero from "./components/HeroSection/Hero";

export default async function Home() {
  return (
    <>
      <Suspense
        fallback={
          <>
            <div className="h-full bg-blue-950"></div>
          </>
        }
      >
        <Hero />
        <Header />
        <News />
        <StatisticSection />
        <Table />
      </Suspense>
    </>
  );
}
