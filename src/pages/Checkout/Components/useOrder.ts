import { useForm } from "react-hook-form";
import { BillingData, billingSchema } from "../../../schemas/billingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect } from "react";
import { AddressProps } from "./type";
import axios from "axios";
import { totalAmount } from "../../../utils/utils";
import { useAppDispatch, useAppSelector } from "../../../stores";
import { createOrder } from "../../../stores/slices/Orders";
import { toast } from "react-toastify";

export const useOrder = () => {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<BillingData>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(billingSchema),
  });

  const zipCode = watch("zip");
  const payment = watch("paymentMethod");

  const zipCodeMask = (zipCode: string) => {
    if (!zipCode) return "";
    zipCode = zipCode.replace(/\D/g, "");
    zipCode = zipCode.replace(/(\d{5})(\d)/, "$1-$2");
    console.log(zipCode);

    return zipCode;
  };

  const handleSetData = useCallback(
    (data: AddressProps) => {
      setValue("country", "Brasil");
      setValue("city", data.localidade);
      setValue("street", data.logradouro);
      setValue("province", data.uf);
    },
    [setValue]
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${zipCode}/json/`
      );
      handleSetData(data);
    },
    [handleSetData]
  );

  useEffect(() => {
    if (zipCode?.length !== 9) return;
    handleFetchAddress(zipCode);
  }, [handleFetchAddress, setValue, zipCode]);

  const handleFormSubmit = (data: BillingData) => {
    
    const order = {
      ...data,
      add: data.add || "",
      company: data.company || "",
      additionalInfo: data.additionalInfo || "",
      items: items,
      totalAmount: totalAmount(items),
    };

    
    dispatch(createOrder(order));
    reset();
    toast.success("Order sended!");
  };

  return {
    handleSubmit,
    errors,
    register,
    reset,
    dispatch,
    handleFormSubmit,
    items,
    zipCodeMask,
    payment
  };
};
