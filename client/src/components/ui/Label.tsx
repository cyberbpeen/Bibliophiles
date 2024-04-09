import React from "react";
import { cn } from "../../lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label: React.FC<LabelProps> = ({ className, ...props }) => {
  return (
    <label
      className={cn(
        "absolute font-normal text-xs bg-zinc-950 px-1 left-2 -top-2",
        className
      )}
      {...props}
    />
  );
};

Label.displayName = "Label";

export default Label;
