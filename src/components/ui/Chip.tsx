import { View } from "react-native";
import AppText from "./AppText";

type Props = {
  label: string;
  tone?: "blue" | "pink" | "neutral";
};

export default function Chip({ label, tone = "neutral" }: Props) {
  const bg =
    tone === "blue"
      ? "bg-chipBlue"
      : tone === "pink"
      ? "bg-chipPink"
      : "bg-gray-100";

  const text =
    tone === "blue" ? "#026AA2" : tone === "pink" ? "#C11574" : "text-gray-100";
  return (
    <View
      className={`px-4 py-1 rounded-full ${bg}`}
      style={{ borderRadius: 20 }}
    >
      <AppText variant="sub_medium" style={{ fontSize: 10, color: text }}>
        {label}
      </AppText>
    </View>
  );
}
