"use client";
import { useEffect, useState } from "react";

export function useCachedFetch<T>(key: string, url: string, ttl = 60000) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        // 📌 Step 1: localStorage check
        const cached = localStorage.getItem(key);
        if (cached) {
          const { value, expires } = JSON.parse(cached);
          if (Date.now() < expires) {
            setData(value);
            setLoading(false);
          }
        }

        // 📌 Step 2: fetch fresh data
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const freshData: T = await res.json();

        if (isMounted) {
          setData(freshData);
          setLoading(false);

          // 📌 Step 3: save in cache
          localStorage.setItem(
            key,
            JSON.stringify({ value: freshData, expires: Date.now() + ttl })
          );
        }
      } catch (err: unknown) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : String(err));
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      isMounted = false;
    };
  }, [key, url, ttl]);

  return { data, loading, error };
}
