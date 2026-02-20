import { useEffect, useRef } from "react";
import { Animated, View, ViewProps } from "react-native";

type Props = ViewProps & {
  width?: number | string;
  height?: number;
  radius?: number;
};

export default function Skeleton({
  width = "100%",
  height = 12,
  radius = 10,
  style,
  ...props
}: Props) {
  const a = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(a, {
          toValue: 0.9,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(a, {
          toValue: 0.4,
          duration: 700,
          useNativeDriver: true,
        }),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, [a]);

  return (
    <Animated.View style={[{ opacity: a }]}>
      <View
        style={[
          { width, height, borderRadius: radius, backgroundColor: "#E5E7EB" },
          style,
        ]}
        {...props}
      />
    </Animated.View>
  );
}
