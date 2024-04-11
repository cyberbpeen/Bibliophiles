import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const flexVariants = cva("flex", {
  variants: {
    justify: {
      normal: "justify-normal",
      start: "justify-start",
      center: "justify-center ",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    },
    item: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    direction: {
      row: "flex-row",
      "row-reverse": "flex-row-reverse",
      column: "flex-col",
      "column-reverse": "flex-col-reverse",
    },
    gap: {
      "0": "gap-0",
      "1": "gap-1",
      "2": "gap-2",
      "3": "gap-3",
    },
  },
  defaultVariants: {
    justify: "center",
    item: "center",
    direction: "row",
    gap: "0",
  },
});

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ className, justify, item, gap, direction, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(flexVariants({ justify, item, gap, direction, className }))}
      {...props}
    />
  )
);

Flex.displayName = "Flex";

export default Flex;
