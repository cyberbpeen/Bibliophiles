import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";
import React from "react";

const heading = cva("text-zinc-50", {
  variants: {
    as: {
      H1: ["text-6xl"],
      H2: ["text-5xl"],
      H3: ["text-4xl"],
      H4: ["text-3xl"],
      H5: ["text-2xl"],
      H6: ["text-xl"],
    },
    weight: {
      normal: ["font-normal"],
      medium: ["font-medium"],
      semibold: ["font-semibold"],
      bold: ["font-bold"],
    },
  },
  defaultVariants: {
    as: "H4",
    weight: "semibold",
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {}

export const Heading: React.FC<HeadingProps> = ({
  className,
  as,
  weight,
  ...props
}) => {
  if (as === "H1")
    return <h1 className={cn(heading({ as, weight, className }))} {...props} />;
  else if (as === "H2")
    return <h2 className={cn(heading({ as, weight, className }))} {...props} />;
  else if (as === "H3")
    return <h3 className={cn(heading({ as, weight, className }))} {...props} />;
  else if (as === "H4")
    return <h4 className={cn(heading({ as, weight, className }))} {...props} />;
  else if (as === "H5")
    return <h5 className={cn(heading({ as, weight, className }))} {...props} />;
  else
    return <h6 className={cn(heading({ as, weight, className }))} {...props} />;
};

Heading.displayName = "Heading";

export default Heading;
