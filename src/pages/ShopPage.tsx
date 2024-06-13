import Certificate from "../components/GenericComponents/Certificate";
import Panel from "../components/GenericComponents/Panel";
import Filter from "../components/ShopComponents/Filter";
import Products from "../components/ShopComponents/Products";
import { Page } from "../types/Page";

const ShopPage = ({ page }: Page) => {
  return (
    <>
      <Panel page={page} />
      <Filter />
      <Products />
      <Certificate />
    </>
  );
};

export default ShopPage;
