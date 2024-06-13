import { Product, ServiceProductIdProps, ServiceProductsProps } from "../types/Product";
import { API_URL } from "./url";

export async function getProducts({ setProducts }: ServiceProductsProps) {
  const res = await fetch(API_URL);
  const json = await res.json();
  setProducts(json);
}

export async function getProductById({ setProduct, paramId }: ServiceProductIdProps) {
  const res = await fetch(API_URL);
  const json = await res.json();
  const jsonFiltered = json.filter(
    ({ id }: Product) => id == paramId
  )
  setProduct(jsonFiltered[0]);
}
