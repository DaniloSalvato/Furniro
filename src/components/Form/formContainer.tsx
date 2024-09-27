import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const container = tv({
base: "",
variants:{
  variants:{
    primary:"flex flex-col w-full gap-2 px-10",
    secondary:"flex flex-col font-poppins font-medium text-base"
  }
},
defaultVariants:{
  variants:"primary"
}
})

type ContainerVariants = VariantProps<typeof container>

type ContainerProps = {
  children: React.ReactNode;
} & ContainerVariants

export const formContainer = ({ children, variants }: ContainerProps) => {
  return (
    <article className={container({variants})}>
      {children}
    </article>
  );
};
