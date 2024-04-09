import React from "react";
import { cn } from "../../lib/utils";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "bg-transparent w-full h-[180px] resize-none px-6 py-3 ring-1 ring-inset ring-zinc-800 text-base rounded focus:outline-none focus:ring-zinc-50 active:ring-zinc-50 active:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
