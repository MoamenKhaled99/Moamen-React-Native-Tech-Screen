# Chapter One Tech Screen - React Native Task Manager

A robust Task Manager application built with **React Native (Expo)**, **NativeWind**, and **TypeScript** for the Chapter One Tech Screen assessment.

## Features Overview

This application provides a highly responsive and strictly typed interface for managing tasks:

- **Add Tasks**: Input new tasks using the designated text input at the top of the screen. Pressing "Add" adds the task to the top of the list.
- **Complete Tasks**: Tap the custom checkbox to toggle a task's completion state. Completed tasks are visually distinguished with strike-through text and a grayed-out background.
- **Delete Tasks**: Each task item features a destructive "trash" icon button to permanently remove the task from the list.

### ⚠️ Important Note Regarding State & Persistence

Currently, the task data is managed **in-memory** using React's `useState` hook within the application's Domain Layer (`useTasks.ts`).
**Tasks are not saved permanently to the device.** If you force-close the app, or if you build the app into a standalone standalone APK/IPA preview, the task list will reset to empty upon restarting.
_To make tasks persist across app sessions, a local storage solution (such as `AsyncStorage`, `MMKV`, or SQLite) would need to be integrated into the Data/Domain layer._

## Architecture Note: Layered Architecture

This project strictly adheres to a **Layered Architecture** pattern to ensure separation of concerns, maintainability, and scalability:

1.  **Presentation Layer (`src/presentation/`)**: Contains all UI components (`components/`) and screens (`screens/`). These files **do not** contain raw business logic. They consume hooks and render the UI.
2.  **Domain Layer (`src/domain/hooks/`)**: Contains the business logic of the application. The custom `useTasks.ts` hook manages the state and provides encapsulated methods (`addTask`, `toggleTaskCompletion`, `deleteTask`) for the UI to call.
3.  **Data Layer (`src/data/models/`)**: Defines the data structures and interfaces. The `Task.ts` file defines the explicit shape of a task object.

## Setup Instructions

Follow these step-by-step instructions to run the application locally:

### Prerequisites

- Node.js (v18+ recommended)
- The **Expo Go** app installed on your physical device (iOS or Android)
- _(Optional)_ Android Studio Emulator or iOS Simulator

### 1. Install Dependencies

Navigate to the project directory and run the following command to install all required packages:

```bash
npm install
```

### 2. Start the Development Server

Start the Expo Metro Bundler with a cleared cache to ensure all NativeWind styles compile correctly:

```bash
npx expo start -c
```

### 3. Run the App

- **On a physical device**: Scan the QR code that appears in your terminal using your phone's camera (iOS) or the Expo Go app directly (Android).
- **On a simulator/emulator**: Press `i` to open in an iOS simulator, or `a` to open in an Android emulator.

## Core Dependencies

- **[Expo](https://expo.dev/)**: The underlying framework and build system, providing the standard Expo SDK for rapid React Native development.
- **[NativeWind](https://www.nativewind.dev/)**: Uses Tailwind CSS to cleanly define atomic classes for styling elements, drastically accelerating the building of "Shadcn-like" reusable UI components.
- **[lucide-react-native](https://lucide.dev/)**: Provides clean, consistent, and beautiful SVG icons (used for the checkmark and trash icons).
