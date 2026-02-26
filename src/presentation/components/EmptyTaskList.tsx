import React from "react";
import { View, Text } from "react-native";

export function EmptyTaskList() {
  return (
    <View className="flex-1 items-center justify-center py-10 mt-10">
      <Text className="text-[#5B7667] text-center text-base">
        No tasks yet. Tap the + button to add one!
      </Text>
    </View>
  );
}
