import EvilIcons from "@expo/vector-icons/EvilIcons";
import {
  ArrowLeft2,
  ArrowRight,
  Building4,
  Calendar2,
  Clock,
} from "iconsax-react-nativejs";
import { useMemo } from "react";
import { Image, Pressable, ScrollView, View } from "react-native";
import BottomSheet from "../../../components/overlays/BottomSheet";
import AppCard from "../../../components/ui/AppCard";
import AppText from "../../../components/ui/AppText";
import { useRooster } from "../../../hooks/useRooster";
import { tokens } from "../../../theme/tokens";

export default function ShiftDetailsSheet() {
  const { selectedShiftId, setSelectedShiftId, shifts } = useRooster();

  const shift = useMemo(
    () => shifts.find((s) => s.id === selectedShiftId) ?? null,
    [shifts, selectedShiftId]
  );

  const visible = Boolean(selectedShiftId && shift);

  return (
    <BottomSheet
      visible={visible}
      onClose={() => setSelectedShiftId(null)}
      height={620}
    >
      {!shift ? null : (
        <View className="flex-1">
          {/* Header */}
          <View className="flex-row items-center justify-between">
            <Pressable
              onPress={() => setSelectedShiftId(null)}
              className="h-9 w-9 rounded-xl border border-[#F3F4F9] items-center justify-center"
            >
              <ArrowLeft2 size="16" color="#535862" />
            </Pressable>

            <AppText
              variant="h1"
              style={{ fontFamily: "InterSemiBold", fontSize: 18 }}
            >
              Shift Details
            </AppText>

            <Pressable
              onPress={() => setSelectedShiftId(null)}
              className="h-9 w-9 rounded-xl border border-[#F3F4F9] items-center justify-center"
            >
              <EvilIcons name="close" size={20} color="#535862" />
            </Pressable>
          </View>

          <View className="flex-row w-full mt-5 items-center justify-between">
            <View className="w-[50%]">
              <View className=" flex-row items-center gap-2">
                <Clock size={24} color="#4E5D69" variant="Broken" />
                <AppText className="text-[#242424]">8:00am - 9:00pm</AppText>
              </View>
            </View>

            <View className="w-[1px] bg-black/20 self-stretch" />

            <View className="w-[50%]">
              <View className="flex-row items-center justify-center gap-2">
                <Calendar2 size={24} color="#4E5D69" variant="Broken" />
                <AppText className="text-[#242424]">10 - 02 - 2024</AppText>
              </View>
            </View>
          </View>

          <ScrollView
            className="mt-7 w-full"
            showsVerticalScrollIndicator={false}
          >
            <View className="flex gap-2">
              <AppText className="text-[#242424]">Beschrijving</AppText>
              <AppText
                className="text-[#4E5D69] leading-[24px]"
                style={{ color: "#4E5D69" }}
              >
                {shift.description}
              </AppText>
            </View>

            <View className="flex-row w-full mt-5 items-center justify-between">
              <View className=" w-[50%] flex items-start">
                <View className="gap-4">
                  <AppText className="text-subtext">Dienst</AppText>
                  <AppCard tone="orange" className="px-2 py-1 rounded-[12px]">
                    <AppText
                      className="text-[13px]"
                      style={{ color: "#F97316" }}
                    >
                      {shift.serviceLabel}
                    </AppText>
                  </AppCard>
                </View>
              </View>

              <View className="w-[0.5px] bg-black/20 self-stretch" />
              <View className="  w-[50%] flex justify-center items-center">
                <View className="gap-4">
                  <View className="flex-row items-start gap-2">
                    <Building4 size={16} color="#7E919F" />
                    <AppText
                      className="text-[#7E919F]"
                      style={{ color: "#7E919F" }}
                    >
                      Kamers
                    </AppText>
                  </View>
                  <AppText
                    className="text-[14px] text-[#4E5D69]"
                    style={{ color: "#4E5D69" }}
                  >
                    {shift.locationLabel}
                  </AppText>
                </View>
              </View>
            </View>

            <View className="h-4" />

            <AppText className="text-subtext">Team</AppText>
            <View className="h-2" />

            {shift.teamSlots.map((t, idx) => {
              const bg =
                t.variant === "orange"
                  ? tokens.colors.orangeCard
                  : tokens.colors.purpleCard;
              const c =
                t.variant === "orange" ? "#F97316" : tokens.colors.primary;

              return (
                <View
                  key={`${t.time}-${idx}`}
                  className="rounded-full px-3 py-3 mb-7"
                  style={{ backgroundColor: bg }}
                >
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row gap-2 items-center">
                      <GroupAvatar />
                      <AppText className="text-[13px] text-subtext">
                        {t.label}
                      </AppText>
                    </View>
                    <AppText
                      className="text-[13px] font-semibold"
                      style={{ color: c }}
                    >
                      {t.time}
                    </AppText>
                  </View>
                </View>
              );
            })}

            <View className="flex-row items-center mt-4 justify-between">
              <AppText className="text-subtext">Notities</AppText>
              <View className="flex-row items-center">
                <View className="px-3 py-1 flex flex-row items-center gap-3 rounded-full bg-gray-100">
                  <AppText className="text-[12px] text-subtext">
                    {shift.notes.length} notities
                  </AppText>
                  <ArrowRight size="20" color="#242424" />
                </View>
              </View>
            </View>

            {shift.notes.map((n) => (
              <View key={n.id} className="flex-row items-center mt-6">
                <Image
                  source={require("../../../../assets/images/user_one.png")}
                  className="w-10 h-10 rounded-full border border-white"
                />
                <View className="flex-1 ml-3">
                  <View className="flex-row items-center justify-between">
                    <AppText className="text-[13px] font-semibold">
                      {n.author}
                    </AppText>
                    <AppText
                      variant="sub_medium"
                      className="text-[12px] text-subtext"
                      style={{ color: "#4E5D69" }}
                    >
                      {n.timeAgo}
                    </AppText>
                  </View>
                  <View className="h-1" />
                  <AppText
                    variant="sub_medium"
                    className="text-[13px] text-subtext"
                    style={{ color: "#242424" }}
                  >
                    {n.text}
                  </AppText>
                </View>
              </View>
            ))}

            <View className="h-10" />
          </ScrollView>
        </View>
      )}
    </BottomSheet>
  );
}

export function GroupAvatar() {
  return (
    <View className="flex flex-row items-center">
      <Image
        source={require("../../../../assets/images/user_one.png")}
        className="w-10 h-10 rounded-full border border-white"
      />
      <Image
        source={require("../../../../assets/images/user_two.png")}
        className="w-10 h-10 rounded-full border border-white -ml-4"
      />
    </View>
  );
}
