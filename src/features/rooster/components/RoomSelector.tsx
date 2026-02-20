import { ArrowDown2 } from "iconsax-react-nativejs";
import { Pressable, View } from "react-native";
import AppText from "../../../components/ui/AppText";
import { useRooster } from "../../../hooks/useRooster";

export default function RoomSelector() {
  const { rooms, selectedRoomId, setSelectedRoomId } = useRooster();
  const selected = rooms.find((r) => r.id === selectedRoomId) ?? rooms[0];

  const cycleRoom = () => {
    if (rooms.length <= 1) return;
    const idx = rooms.findIndex((r) => r.id === selectedRoomId);
    const next = rooms[(idx + 1) % rooms.length];
    setSelectedRoomId(next.id);
  };

  return (
    <View className="px-4 py-3 flex-row items-center justify-between border-b-2 border-[#F3F4F6]">
      <AppText variant="inter_14">{selected?.name ?? "Room1"}</AppText>

      <Pressable
        onPress={cycleRoom}
        className="h-8 w-8 border border-divider border-[#E5E7EB] rounded-xl items-center justify-center"
      >
        <ArrowDown2 size="12" color="#242424" />
      </Pressable>
    </View>
  );
}
