import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import React from "react";

const buttonVariants = cva(
  [
    "inline-flex",
    "gap-2",
    "items-center",
    "justify-center ",
    "text-zinc-50",
    "font-medium",
    "disabled:cursor-not-allowed",
    "disabled:text-zinc-400",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-zinc-800", "hover:bg-violet-700"],
        outline: [
          "ring-1",
          "ring-inset",
          "ring-zinc-800",
          "hover:text-zinc-50",
          "hover:bg-zinc-800",
          "disabled:hover:bg-zinc-800/50",
        ],
        ghost: ["hover:bg-zinc-800"],
      },
      size: {
        small: ["text-xs", "h-8", "px-3"],
        medium: ["text-base", "h-10", "px-6"],
      },
      rounded: {
        normal: "rounded",
        full: "rounded-full",
      },
      _content: {
        text: "",
        leading: "",
        trailing: "",
        icon: ["px-0", "text-zinc-400", "hover:text-zinc-50"],
      },
    },
    compoundVariants: [
      { _content: "icon", size: "medium", class: ["w-10"] },
      { _content: "icon", size: "small", class: ["w-8"] },
      { _content: "leading", size: "small", class: ["pl-2"] },
      { _content: "leading", size: "medium", class: ["pl-5"] },
      { size: "small", class: ["text-zinc-400"] },
    ],
    defaultVariants: {
      variant: "primary",
      size: "medium",
      rounded: "normal",
      _content: "text",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, _content, ...props }, ref) => (
    <button
      className={cn(
        buttonVariants({ variant, size, rounded, _content, className })
      )}
      ref={ref}
      {...props}
    />
  )
);

Button.displayName = "Button";

export default Button;
