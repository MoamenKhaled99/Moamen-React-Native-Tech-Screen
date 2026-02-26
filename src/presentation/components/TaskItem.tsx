import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckCircle2, Circle, Trash2 } from "lucide-react-native";
import { Card, CardContent } from "./Card";
import { Task } from "../../data/models/Task";

interface TaskItemProps {
  item: Task;
  onToggleCompletion: (id: string) => void;
  onDelete: (item: Task) => void;
}

export function TaskItem({
  item,
  onToggleCompletion,
  onDelete,
}: TaskItemProps) {
  return (
    <Card className="mb-3 border-0 bg-[#1A251E] rounded-2xl mx-1 shadow-none">
      <CardContent className="p-4 flex-row items-center justify-between">
        <View className="flex-row items-center flex-1 pr-4 gap-4">
          <TouchableOpacity
            onPress={() => onToggleCompletion(item.id)}
            className="shrink-0 p-1"
          >
            {item.completed ? (
              <CheckCircle2 size={24} color="#1A8A4B" />
            ) : (
              <Circle size={24} color="#5B7667" />
            )}
          </TouchableOpacity>
          <View className="flex-1 justify-center">
            <Text
              className={`text-base font-medium ${item.completed ? "line-through text-[#4A5D54]" : "text-white"}`}
              numberOfLines={2}
            >
              {item.description}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onDelete(item)}
          className="h-10 w-10 items-center justify-center shrink-0"
        >
          <Trash2 size={20} color="#8A9D93" />
        </TouchableOpacity>
      </CardContent>
    </Card>
  );
}
