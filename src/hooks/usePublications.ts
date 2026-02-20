import { useContext } from "react";
import { PublicationsContext } from "../context/publications/PublicationsContext";

export function usePublications() {
  const ctx = useContext(PublicationsContext);
  if (!ctx)
    throw new Error("usePublications must be used within PublicationsProvider");
  return ctx;
}
