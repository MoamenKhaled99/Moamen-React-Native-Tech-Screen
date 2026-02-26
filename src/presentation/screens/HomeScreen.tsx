import React from "react";
import {
  View,
  SectionList,
  KeyboardAvoidingView,
  Platform,
  Text,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHomeScreen } from "./useHomeScreen";

import { TaskItem } from "../components/TaskItem";
import { HomeHeader } from "../components/HomeHeader";
import { AddTaskModal } from "../components/AddTaskModal";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { EmptyTaskList } from "../components/EmptyTaskList";

export function HomeScreen() {
  const {
    taskInput,
    setTaskInput,
    isModalVisible,
    setIsModalVisible,
    handleAddTask,
    toggleTaskCompletion,
    handleDeleteTask,
    progressPercentage,
    completedCount,
    totalTasks,
    sections,
  } = useHomeScreen();

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-[#101713]"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
        <StatusBar style="light" />

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              onToggleCompletion={toggleTaskCompletion}
              onDelete={handleDeleteTask}
            />
          )}
          contentContainerClassName="p-5 pb-32"
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title, data } }) => {
            if (title === "COMPLETED" && data.length > 0) {
              return (
                <Text className="text-[#5B7667] text-xs font-bold tracking-widest mt-6 mb-3 ml-1">
                  {title}
                </Text>
              );
            }
            return null;
          }}
          ListHeaderComponent={
            <HomeHeader
              completedCount={completedCount}
              totalTasks={totalTasks}
              progressPercentage={progressPercentage}
            />
          }
          ListEmptyComponent={<EmptyTaskList />}
        />

        <FloatingActionButton onPress={() => setIsModalVisible(true)} />

        <AddTaskModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          taskInput={taskInput}
          setTaskInput={setTaskInput}
          onAddTask={handleAddTask}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
