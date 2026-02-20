import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { fetchRooms, fetchShifts } from "../../services/rooster.service";
import type { RoosterState } from "./types";

export const RoosterContext = createContext<RoosterState | null>(null);

export function RoosterProvider({ children }: { children: React.ReactNode }) {
  const [rooms, setRooms] = useState<RoosterState["rooms"]>([]);
  const [selectedRoomId, setSelectedRoomId] = useState("room1");
  const [selectedDayKey, setSelectedDayKey] = useState("2024-01-18");
  const [selectedShiftId, setSelectedShiftId] = useState<string | null>(null);

  const [shifts, setShifts] = useState<RoosterState["shifts"]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [roomsData, shiftsData] = await Promise.all([
        fetchRooms(),
        fetchShifts(),
      ]);
      setRooms(roomsData);
      setSelectedRoomId((prev) =>
        roomsData.some((r) => r.id === prev)
          ? prev
          : roomsData[0]?.id ?? "room1"
      );
      setShifts(shiftsData);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load rooster");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const value = useMemo<RoosterState>(
    () => ({
      rooms,
      selectedRoomId,
      selectedDayKey,
      shifts,
      loading,
      error,
      selectedShiftId,
      setSelectedShiftId,
      setSelectedRoomId,
      setSelectedDayKey,
      refresh,
    }),
    [
      rooms,
      selectedRoomId,
      selectedDayKey,
      shifts,
      loading,
      error,
      selectedShiftId,
      refresh,
    ]
  );

  return (
    <RoosterContext.Provider value={value}>{children}</RoosterContext.Provider>
  );
}
