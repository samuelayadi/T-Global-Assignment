import React, { useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Dimensions,
  Modal,
  Pressable,
  View,
  ViewProps,
} from "react-native";
import { shadows } from "../../theme/shadows";
import { tokens } from "../../theme/tokens";

type Props = {
  visible: boolean;
  onClose: () => void;
  height?: number;
  children: React.ReactNode;
  containerProps?: ViewProps;
};

export default function BottomSheet({
  visible,
  onClose,
  height,
  children,
  containerProps,
}: Props) {
  const screenH = Dimensions.get("window").height;

  const sheetH = useMemo(
    () => height ?? Math.round(screenH * 0.78),
    [height, screenH]
  );

  const y = useRef(new Animated.Value(sheetH + 40)).current;
  const o = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(o, {
          toValue: 1,
          duration: 180,
          useNativeDriver: true,
        }),
        Animated.spring(y, {
          toValue: 0,
          useNativeDriver: true,
          speed: 30,
          bounciness: 0,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(o, {
          toValue: 0,
          duration: 160,
          useNativeDriver: true,
        }),
        Animated.timing(y, {
          toValue: sheetH + 40,
          duration: 160,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, o, y, sheetH]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={{ flex: 1 }}>
        <Animated.View
          pointerEvents="none"
          style={{
            ...StyleSheetFill,
            backgroundColor: tokens.colors.overlay,
            opacity: o,
          }}
        />
        <Pressable style={StyleSheetFill} onPress={onClose} />

        <View className="flex-1 justify-end">
          <Animated.View
            className="bg-white rounded-t-[22px] px-4 pt-4 pb-6 self-center w-[95%]"
            style={[
              { height: sheetH, transform: [{ translateY: y }] },
              shadows.sheet,
            ]}
            {...containerProps}
          >
            <View className="items-center pb-3">
              <View className="h-[11px] w-[75px] rounded-full bg-[#E9EAEB]" />
            </View>
            {children}
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

const StyleSheetFill = {
  position: "absolute" as const,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};
