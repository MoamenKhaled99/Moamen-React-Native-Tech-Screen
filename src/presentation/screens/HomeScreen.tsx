import React, { useState } from "react";
import { View, FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTasks } from "../../domain/hooks/useTasks";
import { Task } from "../../data/models/Task";

import { Heading, Body } from "../components/Typography";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card, CardContent } from "../components/Card";
import { Checkbox } from "../components/Checkbox";
import { Trash2 } from "lucide-react-native";

export function HomeScreen() {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTasks();
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    addTask(taskInput);
    setTaskInput("");
  };

  const renderTaskItem = ({ item }: { item: Task }) => (
    <Card
      className={`mb-3 ${item.completed ? "bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800" : ""}`}
    >
      <CardContent className="p-4 flex-row items-center justify-between">
        <View className="flex-row items-center flex-1 pr-4 gap-3">
          <Checkbox
            checked={item.completed}
            onCheckedChange={() => toggleTaskCompletion(item.id)}
          />
          <Body
            className={`flex-1 ${item.completed ? "line-through text-slate-400 dark:text-slate-500" : ""}`}
            numberOfLines={2}
          >
            {item.description}
          </Body>
        </View>
        <Button
          variant="destructive"
          size="icon"
          onPress={() => deleteTask(item.id)}
          className="h-8 w-8 rounded-md shrink-0"
        >
          <Trash2 size={16} className="text-white" />
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-slate-50 dark:bg-slate-950"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <StatusBar style="auto" />

      {/* Header Section */}
      <View className="px-6 pt-16 pb-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <Heading className="mb-6">Tasks</Heading>
        <View className="flex-row gap-3">
          <View className="flex-1">
            <Input
              placeholder="What needs to be done?"
              value={taskInput}
              onChangeText={setTaskInput}
              onSubmitEditing={handleAddTask}
              returnKeyType="done"
            />
          </View>
          <Button onPress={handleAddTask} disabled={!taskInput.trim()}>
            Add
          </Button>
        </View>
      </View>

      {/* Task List Section */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTaskItem}
        contentContainerClassName="p-6"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center py-10">
            <Body className="text-slate-400 text-center">
              No tasks yet. Add a task above to get started!
            </Body>
          </View>
        }
      />
    </KeyboardAvoidingView>
  );
}
