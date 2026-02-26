import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { cn } from "../../lib/utils";

interface ButtonProps extends TouchableOpacityProps {
  className?: string;
  variant?: "default" | "destructive" | "ghost" | "outline" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  children: React.ReactNode;
  textClassName?: string;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  children,
  textClassName,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={cn(
        "flex-row items-center justify-center rounded-md font-medium px-4 py-2",
        // variant styles
        variant === "default" &&
          "bg-slate-900 border border-slate-900 dark:bg-slate-50",
        variant === "destructive" &&
          "bg-red-500 border border-red-500 dark:bg-red-900",
        variant === "outline" &&
          "border border-slate-200 bg-transparent dark:border-slate-800",
        variant === "secondary" &&
          "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
        variant === "ghost" && "bg-transparent",
        // size styles
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-9 rounded-md px-3",
        size === "lg" && "h-11 rounded-md px-8",
        size === "icon" && "h-10 w-10",
        className,
      )}
      {...props}
    >
      {typeof children === "string" ? (
        <Text
          className={cn(
            "font-medium",
            variant === "default" && "text-slate-50 dark:text-slate-900",
            variant === "destructive" && "text-slate-50",
            variant === "outline" && "text-slate-900 dark:text-slate-50",
            variant === "secondary" && "text-slate-900 dark:text-slate-50",
            variant === "ghost" && "text-slate-900 dark:text-slate-50",
            textClassName,
          )}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
