import { Image, View } from "react-native";
import AppCard from "../../../components/ui/AppCard";
import AppText from "../../../components/ui/AppText";
import Chip from "../../../components/ui/Chip";
import type { Publication } from "../../../types/shared";
import { formatMeta } from "../utils/formatMeta";

type Props = { item: Publication };

export default function PublicationCard({ item }: Props) {
  return (
    <AppCard
      tone="surface"
      className="overflow-hidden mb-4 pt-2 bg-white border border-[#D9E5F2]"
    >
      <Image
        source={require("../../../../assets/images/publications.png")}
        className="mx-auto w-[95%] h-[170px] rounded-xl"
      />

      <View className="p-4">
        <View className="flex-row">
          <Chip label={item.tags[0]} tone="blue" />
          <View className="w-2" />
          <Chip label={item.tags[1]} tone="pink" />
        </View>

        <View className="h-3" />
        <AppText
          className=" font-semibold"
          style={{ fontFamily: "ManropeSemiBold" }}
        >
          {item.title}
        </AppText>
        <View className="h-1" />
        <AppText variant="sub_medium" style={{ color: "#4E5D69" }}>
          {item.excerpt}
        </AppText>

        <View className="h-3" />
        <View className="flex-row items-center gap-3">
          <Image
            source={require("../../../../assets/images/male_doctor.png")}
            className="w-10 h-10 rounded-full border border-white"
          />
          <View className="flex gap-1">
            <AppText variant="sub" style={{ fontFamily: "ManropeSemiBold" }}>
              {item.author}
            </AppText>
            <AppText variant="sub">
              {formatMeta(item.dateLabel, item.readTimeLabel)}
            </AppText>
          </View>
        </View>
      </View>
    </AppCard>
  );
}
