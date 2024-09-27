import React, { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const label = tv({
  base:"",
  variants:{
    variants:{
      primary:"flex w-full justify-start md:items-start",
      secondary:"font-medium text-base"
    }
  },
  defaultVariants: {
    variants:"primary"
  }
})

type LabelVariants = VariantProps<typeof label>

type LabelProps = {
  children: React.ReactNode;
} & ComponentProps<"label"> & LabelVariants

export const formLabel = ({ children, variants, ...props }: LabelProps) => {
  return (
    <label {...props} className={label({variants})}>
      {children}
    </label>
  );
};