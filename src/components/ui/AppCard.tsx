import { View, ViewProps } from "react-native";
import { tokens } from "../../theme/tokens";

type Props = ViewProps & {
  tone?: "surface" | "purple" | "orange" | "blue";
};

export default function AppCard({
  tone = "surface",
  style,
  className,
  ...props
}: Props) {
  const bg =
    tone === "purple"
      ? tokens.colors.purpleCard
      : tone === "orange"
      ? tokens.colors.orangeCard
      : tone === "blue"
      ? tokens.colors.blueCard
      : "white";

  return (
    <View
      className={`rounded-[16px] ${className ?? ""}`}
      style={[{ backgroundColor: bg }, style]}
      {...props}
    />
  );
}
