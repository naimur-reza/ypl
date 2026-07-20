"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface SelectWithOthersProps {
  label?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  options: string[];
  placeholder?: string;
  othersPlaceholder?: string;
  disabled?: boolean;
  className?: string;
}

export function SelectWithOthers({
  label,
  value,
  onValueChange,
  options,
  placeholder = "Select an option",
  othersPlaceholder = "Enter custom value",
  disabled,
  className,
}: SelectWithOthersProps) {
  const [isOthers, setIsOthers] = React.useState(false);
  const [othersValue, setOthersValue] = React.useState("");

  React.useEffect(() => {
    // Check if current value is not in options list
    if (value && !options.includes(value)) {
      setIsOthers(true);
      setOthersValue(value);
    } else {
      setIsOthers(false);
      setOthersValue("");
    }
  }, [value, options]);

  const handleSelectChange = (selectedValue: string) => {
    if (selectedValue === "__others__") {
      setIsOthers(true);
      setOthersValue("");
      onValueChange?.("");
    } else {
      setIsOthers(false);
      setOthersValue("");
      onValueChange?.(selectedValue);
    }
  };

  const handleOthersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setOthersValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <div className={className}>
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block">
          {label}
        </label>
      )}
      {isOthers ? (
        <div className="space-y-2">
          <Input
            value={othersValue}
            onChange={handleOthersChange}
            placeholder={othersPlaceholder}
            disabled={disabled}
          />
          <button
            type="button"
            onClick={() => {
              setIsOthers(false);
              setOthersValue("");
              onValueChange?.("");
            }}
            className="text-xs text-muted-foreground hover:text-foreground underline"
          >
            ← Back to list
          </button>
        </div>
      ) : (
        <Select value={value} onValueChange={handleSelectChange} disabled={disabled}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt) => (
              <SelectItem key={opt} value={opt}>
                {opt}
              </SelectItem>
            ))}
            <SelectItem value="__others__">Others</SelectItem>
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
