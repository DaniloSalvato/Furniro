import { CartItem } from "../types/Cart";

const formatRupiah = (value: number , locale: string = "id-ID"): string => {
  const formatOptions: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return new Intl.NumberFormat(locale, formatOptions).format(value);
};

const totalAmount = (items: CartItem[]):number => {
  const total = items.reduce((total, item) => {
    return total + item.value * item.quantity;
  }, 0);

  return total
};

export { formatRupiah, totalAmount };
