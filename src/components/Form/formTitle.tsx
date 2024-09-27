import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const title = tv({
  base: "",
  variants: {
    variants: {
      primary:"flex justify-center w-full font-poppins font-bold text-4xl",
      secondary:"flex font-poppins font-semibold text-4xl"
    },
  },
  defaultVariants:{
    variants:"primary"
  }
});

type titleVariants = VariantProps<typeof title>

type TitleProps = {
  children: React.ReactNode;
} & titleVariants

export const formTitle = ({ children, variants }: TitleProps) => {
  return <h1 className={title({variants})}>{children}</h1>;
};
