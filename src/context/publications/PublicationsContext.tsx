import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchPublications } from "../../services/publications.service";
import type { PublicationsState } from "./types";

export const PublicationsContext = createContext<PublicationsState | null>(
  null
);

export function PublicationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [publications, setPublications] = useState<
    PublicationsState["publications"]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPublications();
      setPublications(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load publications");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo<PublicationsState>(
    () => ({ publications, loading, error, refresh }),
    [publications, loading, error, refresh]
  );

  return (
    <PublicationsContext.Provider value={value}>
      {children}
    </PublicationsContext.Provider>
  );
}
