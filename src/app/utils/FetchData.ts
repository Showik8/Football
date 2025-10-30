import type { Matches, News, Statistics } from "../types";
import { env } from "process";

type FetchResult<T> = {
  data: T | null;
  error: string | null;
};

type ApiData = {
  news: News[];
  matches: Matches[];
  statistics: Statistics;
};

export default async function FetchData(): Promise<FetchResult<ApiData>> {
  const baseUrl = env.NEXT_PUBLIC_URL!;

  try {
    const [newsRes, matchesRes, statisticsRes] = await Promise.all([
      fetch(`${baseUrl}/news`),
      fetch(`${baseUrl}/matches`),
      fetch(`${baseUrl}/statistic`),
    ]);

    if (!newsRes.ok || !matchesRes.ok || !statisticsRes.ok) {
      throw new Error(
        `Fetch failed: news(${newsRes.status}), matches(${matchesRes.status}), statistics(${statisticsRes.status})`
      );
    }

    const [news, matches, statistics] = await Promise.all([
      newsRes.json() as Promise<News[]>,
      matchesRes.json() as Promise<Matches[]>,
      statisticsRes.json() as Promise<Statistics>,
    ]);

    const data: ApiData = { news, matches, statistics };

    return { data, error: null };
  } catch (err: unknown) {
    return {
      data: null,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
