import React from "react";
import { Text, TextProps } from "react-native";
import { cn } from "../../lib/utils";

interface TypographyProps extends TextProps {
  className?: string;
  children: React.ReactNode;
}

export function Heading({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn(
        "text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50",
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Subheading({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn(
        "text-xl font-semibold tracking-tight text-slate-800 dark:text-slate-100",
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Body({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn("text-base text-slate-700 dark:text-slate-300", className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Small({ className, children, ...props }: TypographyProps) {
  return (
    <Text
      className={cn(
        "text-sm font-medium leading-none text-slate-500 dark:text-slate-400",
        className,
      )}
      {...props}
    >
      {children}
    </Text>
  );
}
