# Task Manager App

A beautiful, robust Task Manager application built with **React Native (Expo)**, **NativeWind**, and **TypeScript**.

## Features Overview

This application provides a highly responsive and strictly typed interface for managing tasks, featuring a sleek modern dark theme:

- **Add Tasks**: Use the Floating Action Button (+) to open a modal and quickly add new tasks.
- **Task Organization**: Tasks are automatically separated into "Active" and "Completed" sections.
- **Progress Tracking**: A dynamic progress bar at the top visually tracks your daily completion rate.
- **Complete Tasks**: Tap a task to toggle its completion state. Completed tasks are visually distinguished.
- **Delete Tasks**: Each task item features a destructive "trash" icon button to permanently remove the task.

### ⚠️ Important Note Regarding State & Persistence

Currently, the task data is managed **in-memory** using React's state hooks. **Tasks are not saved permanently to the device.** If you force-close the app, the task list will reset to empty upon restarting.
_To make tasks persist across app sessions, a local storage solution (such as `AsyncStorage`, `MMKV`, or SQLite) would need to be integrated._

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

Start the Expo Metro Bundler:

```bash
npx expo start -c
```

### 3. Run the App

- **On a physical device**: Scan the QR code that appears in your terminal using your phone's camera (iOS) or the Expo Go app directly (Android).
- **On a simulator/emulator**: Press `i` to open in an iOS simulator, or `a` to open in an Android emulator.

## Third-Party Libraries Used

- **[Expo](https://expo.dev/)**: The core framework for building and running the cross-platform React Native app.
- **[NativeWind](https://www.nativewind.dev/) & TailwindCSS**: Used to style components using utility classes, significantly speeding up UI development.
- **[lucide-react-native](https://lucide.dev/)**: Provides clean, consistent vector icons (used for the add, checkmark, and trash icons).
- **[react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)**: Powers the smooth animations in the UI, such as the dynamic progress bar.
- **clsx & tailwind-merge**: Used to conditionally join utility classes together and handle style conflicts safely.
