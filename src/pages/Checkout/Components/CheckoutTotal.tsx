import { ItemType } from "../../../stores/slices/Items/type";
import { formatRupiah } from "../../../utils/utils";

type CheckoutTotalProps = {
    items: ItemType[]
}

const CheckoutTotal = ({items}:CheckoutTotalProps) => {
  return (
    <ul className="gap-2">
      {items.map((item: ItemType) => (
        <li key={item.id} className="flex w-full justify-between">
          <div className="flex items-center gap-3">
            <span className="font-poppins font-normal text-base text-customBlack-800">
              {item.title}
            </span>
            <span className="font-poppins font-medium text-xs">X</span>
            <span className="font-poppins font-medium text-xs">
              {item.quantity}
            </span>
          </div>
          <div>
            <span className="font-poppins font-light text-base mb-5">
              {formatRupiah(item.value * item.quantity)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CheckoutTotal;
