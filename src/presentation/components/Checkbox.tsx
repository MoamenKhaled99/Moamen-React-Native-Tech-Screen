import React from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { Check } from "lucide-react-native";
import { cn } from "../../lib/utils";

interface CheckboxProps extends Omit<TouchableOpacityProps, "onPress"> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  className?: string;
}

export function Checkbox({
  checked,
  onCheckedChange,
  className,
  ...props
}: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onCheckedChange(!checked)}
      className={cn(
        "h-6 w-6 shrink-0 rounded border items-center justify-center",
        checked
          ? "bg-slate-900 border-slate-900 dark:bg-slate-50 dark:border-slate-50"
          : "border-slate-200 dark:border-slate-800 bg-transparent",
        className,
      )}
      {...props}
    >
      {checked && (
        <Check
          size={16}
          strokeWidth={3}
          className="text-white dark:text-slate-950"
        />
      )}
    </TouchableOpacity>
  );
}
