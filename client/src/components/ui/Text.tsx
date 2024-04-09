import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import React from "react";

const text = cva("", {
  variants: {
    variant: {
      body: ["text-zinc-400"],
      label: ["text-zinc-50"],
    },
    weight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  compoundVariants: [
    { variant: "body", size: "xs", class: "text-base" },
    { variant: "body", size: "sm", class: "text-base" },
    { variant: "label", size: "base", class: "text-sm" },
    { variant: "label", size: "lg", class: "text-sm" },
    { variant: "label", size: "xl", class: "text-sm" },
  ],
  defaultVariants: {
    variant: "body",
    weight: "normal",
    size: "base",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof text> {}

const Text: React.FC<TextProps> = ({
  className,
  variant,
  weight,
  size,
  ...props
}) => (
  <p className={cn(text({ variant, weight, size, className }))} {...props} />
);
Text.displayName = "Text";

export default Text;
