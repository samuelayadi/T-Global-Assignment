import { Image, View } from "react-native";
import AppCard from "../../../components/ui/AppCard";
import AppText from "../../../components/ui/AppText";
import PressableScale from "../../../components/ui/PressableScale";
import { tokens } from "../../../theme/tokens";
import type { Shift } from "../../../types/shared";

type Props = {
  shift: Shift;
  onPress: () => void;
};

export default function ShiftCard({ shift, onPress }: Props) {
  type Tone = "orange" | "purple" | "blue";

  const tone: Tone =
    shift.colorVariant === "orange"
      ? "orange"
      : shift.colorVariant === "purple"
      ? "purple"
      : "blue";

  const timeColor =
    shift.colorVariant === "orange"
      ? tokens.colors.orangeRing
      : shift.colorVariant === "purple"
      ? tokens.colors.purpleRing
      : tokens.colors.blueRing;

  return (
    <View className="flex gap-0">
      <PressableScale
        onPress={onPress}
        className="flex flex-row  gap-4 items-start justify-start"
      >
        <AppText className="text-[#535862]">{shift.activeTime}</AppText>
        <AppCard
          tone={tone}
          className={`px-4 py-3 flex-1 border-s-2 ${
            tone === "orange" && "border-orangeRing"
          } ${tone === "purple" && "border-purpleRing"}
        ${tone === "blue" && "border-blueRing"} h-[75px] flex justify-between`}
        >
          <View className="flex-row items-start justify-between ">
            <AppText variant="h1">{shift.title}</AppText>
            <AppText style={{ color: timeColor }}>
              {shift.startTime} - {shift.endTime}
            </AppText>
          </View>

          <View className="flex-row items-center">
            <Image
              source={require("../../../../assets/images/user_one.png")}
              className="rounded-full w-5 h-5"
            />
            <View className="w-2" />
            <AppText>
              {shift.assigneeName}{" "}
              <AppText variant="sub">{shift.statusLabel}</AppText>
            </AppText>
          </View>
        </AppCard>
      </PressableScale>
      {shift.active && <ActiveTimeWindowIndicator />}
    </View>
  );
}

export function ActiveTimeWindowIndicator() {
  return (
    <>
      <View className="flex flex-row items-center -mt-3">
        <View className="w-5 h-5 rounded-full bg-primary"></View>
        <View className="h-0.5 w-full rounded-full bg-primary"></View>
      </View>
    </>
  );
}
