import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const TextField = forwardRef(
  (
  {
    label = "",
    id = "",
    name,
    type = "text",
    placeholder = "",
    className = "",
    error,
    description = "",
    required = false,
    disabled = false,
    ...props
  },
  ref
) => {
  // Generate an ID based on the name or label if none is provided
  const inputId =
    id ||
    name ||
    (label ? label.toLowerCase().replace(/\s+/g, "-") : "input-field");

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 text-gray-700">
      {label && (
        <Label htmlFor={inputId} className={cn(error && "text-gray-700")}>
          {label}
          {required && <span className="text-gray-700 text-xl ml-1">*</span>}
        </Label>
      )}
      <Input
    
        ref={ref}
        type={type}
        id={inputId}
        name={name || inputId}
        placeholder={placeholder || label}
        className={cn(error && "border-destructive", className)}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${inputId}-error`
            : description
            ? `${inputId}-description`
            : undefined
           
        }
        disabled={disabled}
        required={required}
        {...props}
      />
      {description && !error && (
        <p
          id={`${inputId}-description`}
          className="text-sm text-muted-foreground"
        >
          {description}
        </p>
      )}
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-sm font-medium text-destructive"
        >
          {error}
        </p>
      )}
    </div>)
  
})