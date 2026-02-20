import React from "react";
import { PublicationsProvider } from "./publications/PublicationsContext";
import { RoosterProvider } from "./rooster/RoosterContext";

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RoosterProvider>
      <PublicationsProvider>{children}</PublicationsProvider>
    </RoosterProvider>
  );
}
