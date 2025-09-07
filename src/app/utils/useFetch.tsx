"use client";
import { useEffect, useState } from "react";

export function useFetch<T>(key: string) {
  const baseUrl = process.env.NEXT_PUBLIC_URL!;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${baseUrl}/${key}`, { signal });
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const freshData: T = await res.json();

        setData(freshData);
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          // Fetch was aborted → do nothing
          return;
        }
        setError(err instanceof Error ? err.message : String(err));
        setLoading(false);
      }
    }

    load();

    return () => {
      controller.abort(); // cleanup → cancel fetch
    };
  }, [baseUrl, key]);

  return { data, loading, error };
}
