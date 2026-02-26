import { useState, useMemo } from "react";
import { Alert } from "react-native";
import { useTasks } from "../../domain/hooks/useTasks";
import { Task } from "../../data/models/Task";

export function useHomeScreen() {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTasks();
  const [taskInput, setTaskInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTask = () => {
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
      setIsModalVisible(false);
    }
  };

  const activeTasks = useMemo(
    () => tasks.filter((t: Task) => !t.completed),
    [tasks],
  );
  const completedTasks = useMemo(
    () => tasks.filter((t: Task) => t.completed),
    [tasks],
  );
  const totalTasks = tasks.length;
  const completedCount = completedTasks.length;
  const progressPercentage =
    totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);

  const sections = [];
  if (activeTasks.length > 0 || tasks.length === 0) {
    sections.push({ title: "ACTIVE", data: activeTasks });
  }
  if (completedTasks.length > 0) {
    sections.push({ title: "COMPLETED", data: completedTasks });
  }

  const handleDeleteTask = (task: Task) => {
    if (!task.completed) {
      Alert.alert(
        "Delete Task",
        "This task is not completed yet. Are you sure you want to delete it?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: () => deleteTask(task.id),
          },
        ],
      );
    } else {
      deleteTask(task.id);
    }
  };

  return {
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
  };
}
