import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const input = tv({
  base: "w-full text-black rounded-lg focus:outline-none",
  variants: {
    color: {
      primary: "",
      secondary:
        "bg-customYellow-900 text-white border border-customYellow-900 hover:bg-white hover:text-customYellow-900",
      tertiary:
        "bg-white text-customYellow-900 hover:bg-customYellow-900 hover:text-white",
      quaternary:
        "bg-white text-customYellow-900 border border-customYellow-900 hover:bg-customYellow-900 hover:text-white",
      fifth: "",
      sixth: "",
      seventh: "",
      eighth: "",
      ninth: "",
      tenth: "",
    },
    area: {
      primary:"py-3 px-2",
      secondary: "",
      tertiary: "",
      quaternary: "",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type InputVariants = VariantProps<typeof input>;

type InputProps = InputVariants & ComponentProps<"input">;

export const formInput = forwardRef<HTMLInputElement, InputProps>(
  ({ color, area, className, ...data }, ref) => {
    return (
      <input
        {...data}
        ref={ref}
        className={input({ color, area, className })}
      />
    );
  }
);
