// File: App.tsx
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Text, TextInput } from "react-native";
import "react-native-gesture-handler";

import AppProvider from "./src/context/AppProvider";
import RootNavigator from "./src/navigation/RootNavigator";
import "./src/style/global.css";

(Text as any).defaultProps = (Text as any).defaultProps ?? {};
(Text as any).defaultProps.allowFontScaling = false;

(TextInput as any).defaultProps = (TextInput as any).defaultProps ?? {};
(TextInput as any).defaultProps.allowFontScaling = false;

type AppFonts =
  | "ManropeRegular"
  | "ManropeMedium"
  | "ManropeSemiBold"
  | "ManropeBold"
  | "ManropeExtraBold"
  | "ManropeLight"
  | "ManropeExtraLight"
  | "InterSemiBold"
  | "InterMedium"
  | "NunitoSansBlack"
  | "NunitoSansBlackItalic"
  | "NunitoSansBold"
  | "NunitoSansBoldItalic"
  | "NunitoSansExtraBold"
  | "NunitoSansExtraBoldItalic"
  | "NunitoSansExtraLight"
  | "NunitoSansExtraLightItalic"
  | "NunitoSansItalic"
  | "NunitoSansLight"
  | "NunitoSansLightItalic"
  | "NunitoSansRegular"
  | "NunitoSansSemiBold"
  | "NunitoSansSemiBoldItalic";

export default function App(): JSX.Element | null {
  const [fontsLoaded] = useFonts<Record<AppFonts, number>>({
    ManropeRegular: require("./assets/fonts/Manrope-Regular.ttf"),
    ManropeMedium: require("./assets/fonts/Manrope-Medium.ttf"),
    ManropeSemiBold: require("./assets/fonts/Manrope-SemiBold.ttf"),
    ManropeBold: require("./assets/fonts/Manrope-Bold.ttf"),
    ManropeExtraBold: require("./assets/fonts/Manrope-ExtraBold.ttf"),
    ManropeLight: require("./assets/fonts/Manrope-Light.ttf"),
    ManropeExtraLight: require("./assets/fonts/Manrope-ExtraLight.ttf"),
    InterSemiBold: require("./assets/fonts/Inter_18pt-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter_18pt-Medium.ttf"),
    NunitoSansBlack: require("./assets/fonts/NunitoSans-Black.ttf"),
    NunitoSansBlackItalic: require("./assets/fonts/NunitoSans-BlackItalic.ttf"),
    NunitoSansBold: require("./assets/fonts/NunitoSans-Bold.ttf"),
    NunitoSansBoldItalic: require("./assets/fonts/NunitoSans-BoldItalic.ttf"),
    NunitoSansExtraBold: require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
    NunitoSansExtraBoldItalic: require("./assets/fonts/NunitoSans-ExtraBoldItalic.ttf"),
    NunitoSansExtraLight: require("./assets/fonts/NunitoSans-ExtraLight.ttf"),
    NunitoSansExtraLightItalic: require("./assets/fonts/NunitoSans-ExtraLightItalic.ttf"),
    NunitoSansItalic: require("./assets/fonts/NunitoSans-Italic.ttf"),
    NunitoSansLight: require("./assets/fonts/NunitoSans-Light.ttf"),
    NunitoSansLightItalic: require("./assets/fonts/NunitoSans-LightItalic.ttf"),
    NunitoSansRegular: require("./assets/fonts/NunitoSans-Regular.ttf"),
    NunitoSansSemiBold: require("./assets/fonts/NunitoSans-SemiBold.ttf"),
    NunitoSansSemiBoldItalic: require("./assets/fonts/NunitoSans-SemiBoldItalic.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
