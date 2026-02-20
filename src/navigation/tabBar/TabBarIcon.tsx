import { Calendar2, Document, Home, User } from "iconsax-react-nativejs";
import { View } from "react-native";

type Props = {
  name: "home" | "calendar" | "doc" | "user";
  color: string;
  focused: boolean;
};

export default function TabBarIcon({ name, color, focused }: Props) {
  const dot = focused ? "opacity-100" : "opacity-70";

  if (name === "calendar") {
    return (
      <>
        <View
          className={`w-full flex h-1 -mt-1.5 rounded-b-full ${
            focused ? "" : "invisible"
          } bg-primary`}
        ></View>
        <View className="items-center justify-center pt-2">
          {focused ? (
            <Calendar2 size="24" color="#5653FC" variant="Bold" />
          ) : (
            <Calendar2 size="24" color="#717680" />
          )}
        </View>
      </>
    );
  }

  if (name === "doc") {
    return (
      <>
        <View
          className={`w-full flex h-1 -mt-1.5 rounded-b-full ${
            focused ? "" : "invisible"
          } bg-primary`}
        ></View>
        <View className="items-center justify-center pt-2">
          {focused ? (
            <Document size="24" color="#5653FC" variant="Bold" />
          ) : (
            <Document size="24" color="#717680" />
          )}
        </View>
      </>
    );
  }

  if (name === "user") {
    return (
      <>
        <View
          className={`w-full flex h-1 -mt-1.5 rounded-b-full ${
            focused ? "" : "invisible"
          } bg-primary`}
        ></View>
        <View className="items-center justify-center pt-2 ">
          {focused ? (
            <User size="24" color="#5653FC" variant="Bold" />
          ) : (
            <User size="24" color="#717680" />
          )}
        </View>
      </>
    );
  }

  return (
    <>
      <View
        className={`w-full flex h-1 -mt-1.5 rounded-b-full ${
          focused ? "" : "invisible"
        } bg-primary`}
      ></View>
      <View className="items-center justify-center pt-2">
        {focused ? (
          <Home size="24" color="#5653FC" variant="Bold" />
        ) : (
          <Home size="24" color="#717680" />
        )}
      </View>
    </>
  );
}
