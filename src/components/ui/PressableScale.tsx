import { useRef } from "react";
import { Animated, Pressable, PressableProps } from "react-native";

type Props = PressableProps & {
  scaleTo?: number;
};

export default function PressableScale({
  scaleTo = 0.98,
  style,
  ...props
}: Props) {
  const s = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.spring(s, {
      toValue: scaleTo,
      useNativeDriver: true,
      speed: 40,
      bounciness: 0,
    }).start();
  };
  const onPressOut = () => {
    Animated.spring(s, {
      toValue: 1,
      useNativeDriver: true,
      speed: 40,
      bounciness: 0,
    }).start();
  };

  return (
    <Animated.View style={[{ transform: [{ scale: s }] }, style]}>
      <Pressable onPressIn={onPressIn} onPressOut={onPressOut} {...props} />
    </Animated.View>
  );
}
