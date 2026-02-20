import { Text, TextProps, TextStyle } from "react-native";

type Variant =
  | "title"
  | "sub_title"
  | "h1"
  | "body"
  | "sub"
  | "sub_medium"
  | "nunito_12"
  | "nunito_14"
  | "inter_14";

type Props = TextProps & {
  variant?: Variant;
  className?: string;
};

const sizeClass: Record<Variant, string> = {
  title: "text-[24px]",
  sub_title: "text-[20px]",
  h1: "text-[14px]",
  body: "text-[14px]",
  sub: "text-[12px] text-subtext",
  sub_medium: "text-[12px]",
  nunito_12: "text-[12px]",
  nunito_14: "text-[14px]",
  inter_14: "text-[14px]",
};

const family: Record<Variant, string> = {
  title: "ManropeBold",
  sub_title: "ManropeBold",
  h1: "ManropeBold",
  body: "ManropeMedium",
  sub: "ManropeRegular",
  sub_medium: "ManropeMedium",
  nunito_12: "NunitoSansMedium",
  nunito_14: "NunitoSansSemiBold",
  inter_14: "InterSemibold",
};

const weight: Partial<Record<Variant, TextStyle["fontWeight"]>> = {
  nunito_12: "500",
  nunito_14: "600",
};

export default function AppText({
  className,
  variant = "body",
  style,
  ...props
}: Props) {
  const base = "text-text";

  return (
    <Text
      className={`${base} ${sizeClass[variant]} ${className ?? ""}`}
      style={[
        { fontFamily: family[variant] },
        weight[variant] ? ({ fontWeight: weight[variant] } as TextStyle) : null,
        style,
      ]}
      {...props}
    />
  );
}
