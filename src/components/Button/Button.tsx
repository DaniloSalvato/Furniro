import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "bg-white text-black w-full",
  variants: {
    variants: {
      primary:
        "bg-customYellow-900 text-white hover:text-black hover:bg-white rounded py-2 md:py-3",
      secondary:
        "flex justify-center items-center gap-2 bg-red-700 text-white hover:text-black hover:bg-white rounded px-10 py-2 md:px-5 md:py-3 lg:px-16",
      tertiary:
        "flex justify-center items-center gap-2 bg-blue-500 text-white hover:text-black hover:bg-white rounded px-10 py-2 md:px-5 md:py-3 lg:px-16",
      quaternary:
        "bg-white text-customYellow-900 border border-customYellow-900 hover:bg-customYellow-900 hover:text-white px-20 py-3",
      fifth: "",
      sixth: "",
      seventh: "",
      eighth: "",
      ninth: "",
      tenth: "",
    }
  },
  defaultVariants: {
    variants: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<"button"> &
  ButtonVariants;

export const Button = ({ children, variants, ...props }: ButtonProps) => {
  return (
    <button {...props} className={button({ variants })}>
      {children}
    </button>
  );
};
