"use client";
import { useEffect, useState } from "react";

export function useFetch<T>(key: string) {
  const baseUrl = process.env.NEXT_PUBLIC_URL!;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function load() {
      try {
        const res = await fetch(`${baseUrl}/${key}`);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const freshData: T = await res.json();

        if (isMounted) {
          setData(freshData);
          setLoading(false);
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
  }, [baseUrl, key]);

  return { data, loading, error };
}
