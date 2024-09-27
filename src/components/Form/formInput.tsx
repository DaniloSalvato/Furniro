import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const input = tv({
  base: "w-full text-black rounded-lg focus:outline-none",
  variants: {
    variants: {
      primary: "flex justify-center py-3 px-2",
      secondary:
        "bg-customYellow-900 text-white border border-customYellow-900 hover:bg-white hover:text-customYellow-900",
      tertiary:
        "bg-white text-customYellow-900 hover:bg-customYellow-900 hover:text-white",
      quaternary:
        "bg-white text-customYellow-900 border border-customYellow-900 hover:bg-customYellow-900 hover:text-white",
      fifth: "border lg:w-[211px] lg:h-[75px] rounded-md mt-[22px] py-[26px] px-[29px]",
      sixth: "border lg:w-[453px] lg:h-[75px] rounded-md mt-[22px] py-[26px] px-[29px]",
      seventh: "border lg:w-[453px] lg:h-[75px] rounded-md mt-[22px] mb-[123px] py-[26px] px-[29px]",
      eighth: "",
      ninth: "",
      tenth: "",
    }
  },
  defaultVariants: {
    variants: "primary",
  },
});

type InputVariants = VariantProps<typeof input>;

type InputProps = InputVariants & ComponentProps<"input">;

export const formInput = forwardRef<HTMLInputElement, InputProps>(
  ({ variants, ...data }, ref) => {
    return (
      <input
        {...data}
        ref={ref}
        className={input({ variants })}
      />
    );
  }
);
