import type { Room, Shift } from "../../types/shared";

export type RoosterState = {
  rooms: Room[];
  selectedRoomId: string;
  selectedDayKey: string;
  shifts: Shift[];
  loading: boolean;
  error: string | null;
  selectedShiftId: string | null;
  setSelectedShiftId: (id: string | null) => void;
  setSelectedRoomId: (id: string) => void;
  setSelectedDayKey: (dayKey: string) => void;
  refresh: () => Promise<void>;
};
