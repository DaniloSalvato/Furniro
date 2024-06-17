import Certificate from "../components/GenericComponents/Certificate";
import Panel from "../components/GenericComponents/Panel";
import Products from "../components/ShopComponents/Products";
import { Page } from "../types/Page";

const ShopPage = ({ page }: Page) => {
  return (
    <>
      <Panel page={page} />
      <Products />
      <Certificate />
    </>
  );
};

export default ShopPage;
