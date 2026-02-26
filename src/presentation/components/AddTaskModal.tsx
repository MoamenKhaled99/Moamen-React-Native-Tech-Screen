import React from "react";
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface AddTaskModalProps {
  isVisible: boolean;
  onClose: () => void;
  taskInput: string;
  setTaskInput: (text: string) => void;
  onAddTask: () => void;
}

export function AddTaskModal({
  isVisible,
  onClose,
  taskInput,
  setTaskInput,
  onAddTask,
}: AddTaskModalProps) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 justify-end bg-black/60"
      >
        <View className="bg-[#1A251E] p-6 rounded-t-3xl">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-white text-xl font-bold">New Task</Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-[#8A9D93] font-medium p-2">Cancel</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="What needs to be done?"
            placeholderTextColor="#5B7667"
            value={taskInput}
            onChangeText={setTaskInput}
            multiline={true}
            textAlignVertical="top"
            autoFocus={true}
            className="min-h-[100px] bg-[#101713] text-white p-4 rounded-xl text-base mb-6"
          />
          <TouchableOpacity
            onPress={onAddTask}
            disabled={!taskInput.trim()}
            className={`py-4 rounded-xl items-center ${
              taskInput.trim() ? "bg-[#1EED68]" : "bg-[#1EED68]/50"
            }`}
          >
            <Text className="text-[#101713] font-bold text-lg">Add Task</Text>
          </TouchableOpacity>
          <SafeAreaView edges={["bottom"]} />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
