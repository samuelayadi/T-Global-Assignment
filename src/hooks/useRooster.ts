import { useContext } from "react";
import { RoosterContext } from "../context/rooster/RoosterContext";

export function useRooster() {
  const ctx = useContext(RoosterContext);
  if (!ctx) throw new Error("useRooster must be used within RoosterProvider");
  return ctx;
}
