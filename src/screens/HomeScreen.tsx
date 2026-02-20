import { SearchNormal1 } from "iconsax-react-nativejs";
import { FlatList, Image, View } from "react-native";
import AppInput from "../components/ui/AppInput";
import AppText from "../components/ui/AppText";
import Screen from "../components/ui/Screen";
import Skeleton from "../components/ui/Skeleton";
import PublicationCard from "../features/publications/components/PublicationCard";
import { usePublications } from "../hooks/usePublications";

export default function HomeScreen() {
  const { publications, loading, error, refresh } = usePublications();

  return (
    <Screen className="px-4 pt-4">
      <View className="flex-row items-center justify-between">
        <View>
          <View className="flex-row gap-2 items-center">
            <AppText variant="title">Welcome back</AppText>
            <AppText variant="title" style={{ fontSize: 20 }}>
              👋
            </AppText>
          </View>
          <AppText
            style={{
              color: "#4E5D69",
            }}
          >
            Start exploring publications
          </AppText>
        </View>
        <Image
          source={require("../../assets/images/male_doctor.png")}
          className="w-10 h-10 rounded-full border border-white"
        />
      </View>

      <View className="mt-10">
        <AppInput
          placeholder="Search publications"
          style={{ fontFamily: "ManropeMedium" }}
          leftIcon={<SearchNormal1 size="20" color="#717680" />}
        />
      </View>

      <View className="flex py-5">
        <AppText variant="sub_title">Latest publications</AppText>
      </View>

      {loading ? (
        <View>
          <Skeleton height={240} />
          <View className="h-4" />
          <Skeleton height={240} />
        </View>
      ) : error ? (
        <View className="pt-8">
          <AppText className="text-subtext">{error}</AppText>
          <View className="h-3" />
          <AppText className="text-subtext" onPress={refresh}>
            Tap to retry
          </AppText>
        </View>
      ) : (
        <FlatList
          data={publications}
          keyExtractor={(i) => i.id}
          renderItem={({ item }) => <PublicationCard item={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Screen>
  );
}
