import { View } from "react-native";
import AppText from "../../../components/ui/AppText";
import { tokens } from "../../../theme/tokens";

type Props = { label: string; active?: boolean };

export default function TimeIndicatorRow({ label, active }: Props) {
  return (
    <View className="flex-row items-center">
      <View className="w-[54px]">
        <AppText className="text-[12px] text-subtext">{label}</AppText>
      </View>

      <View className="flex-1">
        <View
          className="h-[2px] rounded-full"
          style={{
            backgroundColor: active ? tokens.colors.primary : "transparent",
          }}
        />
      </View>
    </View>
  );
}
