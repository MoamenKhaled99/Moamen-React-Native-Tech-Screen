import React from "react";
import { TextInput, TextInputProps, View, Text } from "react-native";
import { cn } from "../../lib/utils";

interface InputProps extends TextInputProps {
  className?: string;
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <View className="flex flex-col gap-1 w-full">
        {label && (
          <Text className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300">
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          placeholderTextColor="#94a3b8" // slate-400
          className={cn(
            "flex min-h-[40px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900",
            "focus:border-slate-900 dark:focus:border-slate-300 focus:bg-slate-50",
            "dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 dark:placeholder:text-slate-400",
            error && "border-red-500 focus:border-red-500",
            className,
          )}
          {...props}
        />
        {error && (
          <Text className="text-xs text-red-500 font-medium">{error}</Text>
        )}
      </View>
    );
  },
);

Input.displayName = "Input";
