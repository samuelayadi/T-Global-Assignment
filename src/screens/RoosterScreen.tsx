import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useMemo } from "react";
import { Pressable, ScrollView, View } from "react-native";
import AppText from "../components/ui/AppText";
import Screen from "../components/ui/Screen";
import Skeleton from "../components/ui/Skeleton";
import DateStrip from "../features/rooster/components/DateStrip";
import RoomSelector from "../features/rooster/components/RoomSelector";
import ShiftCard from "../features/rooster/components/ShiftCard";
import ShiftDetailsSheet from "../features/rooster/components/ShiftDetailsSheet";
import { useRooster } from "../hooks/useRooster";

export default function RoosterScreen() {
  const {
    shifts,
    loading,
    error,
    selectedDayKey,
    selectedRoomId,
    setSelectedShiftId,
    refresh,
  } = useRooster();

  const filtered = useMemo(
    () =>
      shifts.filter(
        (s) => s.dayKey === selectedDayKey && s.roomId === selectedRoomId
      ),
    [shifts, selectedDayKey, selectedRoomId]
  );

  return (
    <Screen>
      {/* Header */}
      <View className="w-[95%] mx-auto pt-2 flex-row items-center justify-between">
        <AppText variant="title">Mijn rooster</AppText>
        <Pressable className="h-10 w-10 rounded-[12px] border border-[#E5E7EB] items-center justify-center">
          <MaterialCommunityIcons
            name="dots-vertical"
            size={20}
            color="#242424"
          />
        </Pressable>
      </View>

      <View className="mt-5" />
      <DateStrip />
      <RoomSelector />

      {/* Timeline */}
      <View className=" ">
        {loading ? (
          <View className="pt-4">
            <Skeleton height={20} width={140} />
            <View className="h-3" />
            <Skeleton height={84} />
            <View className="h-3" />
            <Skeleton height={84} />
          </View>
        ) : error ? (
          <View className="pt-5">
            <AppText className="text-[14px] text-subtext">{error}</AppText>
            <View className="h-3" />
            <Pressable
              onPress={refresh}
              className="self-start py-2 rounded-full bg-gray-100"
            >
              <AppText>Retry</AppText>
            </Pressable>
          </View>
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="mt-5 w-[95%] mx-auto"
            contentContainerClassName="gap-4"
          >
            {filtered.length === 0 ? (
              <View className="pt-10 items-center">
                <AppText className="text-subtext">No shifts</AppText>
              </View>
            ) : (
              filtered.map((s) => (
                <ShiftCard
                  key={s.id}
                  shift={s}
                  onPress={() => setSelectedShiftId(s.id)}
                />
              ))
            )}

            <View className="h-28" />
          </ScrollView>
        )}
      </View>

      {/* Overlay sheet */}
      <ShiftDetailsSheet />
    </Screen>
  );
}
