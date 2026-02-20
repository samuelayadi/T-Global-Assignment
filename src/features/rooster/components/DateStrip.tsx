import { ScrollView, View } from "react-native";
import AppText from "../../../components/ui/AppText";
import PressableScale from "../../../components/ui/PressableScale";
import { useRooster } from "../../../hooks/useRooster";
import { tokens } from "../../../theme/tokens";
import { makeDays } from "../utils/time";

export default function DateStrip() {
  const { selectedDayKey, setSelectedDayKey } = useRooster();
  const days = makeDays();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="w-full border-b-2 py-4 border-[#F3F4F6]"
      contentContainerStyle={{ width: "100%" }}
    >
      <View className="w-[95%] mx-auto flex flex-row gap-3 justify-between">
        {days.map((d) => {
          const active = d.key === selectedDayKey;
          return (
            <PressableScale
              key={d.key}
              onPress={() => setSelectedDayKey(d.key)}
              className={`flex gap-1 items-center ${
                active ? "bg-[#F3F4F6]" : ""
              }  w-[42px] h-[64px] py-2 px-1 rounded-full`}
            >
              <View
                className={`rounded-full items-center justify-center ${
                  active ? "bg-[#5653FC]" : "bg-transparent"
                }`}
                style={{ width: 25, height: 25, borderRadius: 28 }}
              >
                <AppText
                  variant="nunito_14"
                  className={`text-subtext ${active && "text-white"}`}
                >
                  {d.day}
                </AppText>
              </View>
              <AppText
                variant="nunito_12"
                className={`${active ? "text-[#4E5D69]" : "text-[#7E919F]"}`}
              >
                {d.label}
              </AppText>
              <View
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: active
                    ? tokens.colors.primary
                    : "transparent",
                }}
              />
            </PressableScale>
          );
        })}
      </View>
    </ScrollView>
  );
}
