import React from "react";
import { View, Text } from "react-native";

interface HomeHeaderProps {
  completedCount: number;
  totalTasks: number;
  progressPercentage: number;
}

export function HomeHeader({
  completedCount,
  totalTasks,
  progressPercentage,
}: HomeHeaderProps) {
  return (
    <View className="pt-12 pb-6">
      <Text className="text-3xl font-bold text-white mb-2">My Tasks</Text>
      <Text className="text-[#8A9D93] text-base mb-8">
        Keep it up, you're doing great!
      </Text>

      <View className="flex-row justify-between mb-2">
        <Text className="text-white font-medium">
          {completedCount} of {totalTasks} completed
        </Text>
        <Text className="text-[#8A9D93]">{progressPercentage}%</Text>
      </View>
      <View className="h-2 w-full bg-[#1A251E] rounded-full overflow-hidden mb-4">
        <View
          className="h-full bg-[#1EED68] rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </View>
    </View>
  );
}
