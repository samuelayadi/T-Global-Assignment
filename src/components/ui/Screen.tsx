import React from "react";
import { View, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ViewProps & {
  children: React.ReactNode;
};

export default function Screen({ children, className, ...props }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className={` ${className ?? ""}`} {...props}>
        {children}
      </View>
    </SafeAreaView>
  );
}
