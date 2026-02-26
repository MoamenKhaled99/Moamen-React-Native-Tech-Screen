import React from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus } from "lucide-react-native";

interface FloatingActionButtonProps {
  onPress: () => void;
}

export function FloatingActionButton({ onPress }: FloatingActionButtonProps) {
  return (
    <SafeAreaView
      className="absolute bottom-8 right-8"
      edges={["bottom", "right"]}
    >
      <TouchableOpacity
        className="w-16 h-16 bg-[#1EED68] rounded-full items-center justify-center shadow-lg"
        onPress={onPress}
      >
        <Plus size={32} color="#101713" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
