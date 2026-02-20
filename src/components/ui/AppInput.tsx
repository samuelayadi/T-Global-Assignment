import React from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { tokens } from "../../theme/tokens";

type Props = TextInputProps & {
  leftIcon?: React.ReactNode;
};

export default function AppInput({ leftIcon, style, ...props }: Props) {
  return (
    <View
      className="flex-row items-center rounded-[12px] border border-divider px-3"
      style={{ height: 44, backgroundColor: tokens.colors.surface }}
    >
      {leftIcon ? <View className="mr-2">{leftIcon}</View> : null}
      <TextInput
        placeholderTextColor="#94A3B8"
        className="flex-1 text-[14px] text-text"
        style={style}
        {...props}
      />
    </View>
  );
}
