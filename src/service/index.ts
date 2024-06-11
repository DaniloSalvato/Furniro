import { ServiceProductsProps } from "../types/Product";
import { API_URL } from "./url";

export async function getProducts({ setProducts }: ServiceProductsProps) {
  const res = await fetch(API_URL);
  const json = await res.json();
  setProducts(json);
}
