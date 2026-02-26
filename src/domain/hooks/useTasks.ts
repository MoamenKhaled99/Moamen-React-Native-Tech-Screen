import { useState } from "react";
import { Task } from "../../data/models/Task";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (description: string) => {
    if (!description.trim()) return;

    const newTask: Task = {
      id: Date.now().toString() + Math.random().toString(36).substring(7),
      description: description.trim(),
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const toggleTaskCompletion = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    toggleTaskCompletion,
    deleteTask,
  };
}
