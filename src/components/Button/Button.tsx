import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "bg-white text-black w-full",
  variants: {
    color: {
      primary: "bg-customYellow-900 text-white hover:text-black hover:bg-white rounded ",
      secondary:
        "bg-red-700 text-white hover:text-black hover:bg-white rounded",
      tertiary:
        "bg-blue-500 text-white hover:text-black hover:bg-white rounded",
      quaternary:
        "bg-white text-customYellow-900 border border-customYellow-900 hover:bg-customYellow-900 hover:text-white",
      fifth: "",
      sixth: "",
      seventh: "",
      eighth: "",
      ninth: "",
      tenth: "",
    },
    size: {
      primary: "py-2",
      secondary: "px-10 py-4 md:px-5 md:py-3 lg:px-16 lg:py-5",
      tertiary: "px-5 py-2",
      quaternary: "px-20 py-3",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonVariants = VariantProps<typeof button>;

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<"button"> &
  ButtonVariants;

export const Button = ({
  children,
  color,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={button({ color, size, className })}>
      {children}
    </button>
  );
};
