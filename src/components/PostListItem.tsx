import { View, Text, Image } from "react-native";
import React from "react";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import posts from "@/assets/data/posts.json";

export default function PostListItem({ poste }) {
  return (
    <View className="bg-white">
      {/*Header */}
      <View className="p-3 flex-row items-center gap-2">
        <Image
          source={{ uri: poste.user.image_url }}
          className="w-12 aspect-square rounded-full"
        />
        <Text className="font-semibold">{poste.user.username}</Text>
      </View>
      <Image
        source={{ uri: poste.image_url }}
        className="w-full aspect-[4/3]"
      />
      {/*ICONS */}

      <View className="flex-row gap-3 p-3">
        <AntDesign name="hearto" size={20} />
        <Ionicons name="chatbubble-outline" size={20} />
        <Feather name="send" size={20} />

        <Feather name="bookmark" size={20} className="ml-auto" />
      </View>
    </View>
  );
}
