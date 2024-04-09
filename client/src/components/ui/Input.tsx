import React from "react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <input
        className={cn(
          "bg-transparent w-full h-12 px-6 py-3 ring-1 ring-inset ring-zinc-800 text-base rounded focus:outline-none focus:ring-zinc-50 active:ring-zinc-50 active:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
