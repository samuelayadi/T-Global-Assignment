import { View } from "react-native";
import AppText from "../components/ui/AppText";
import Screen from "../components/ui/Screen";

export default function PublicationScreen() {
  return (
    <Screen className="px-4 pt-4">
      <AppText variant="title">Publication</AppText>
      <View className="h-2" />
      <AppText className="text-subtext">Placeholder screen</AppText>
    </Screen>
  );
}
