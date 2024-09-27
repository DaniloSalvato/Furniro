import Certificate from "../../components/Certificate/Certificate";
import Panel from "../../components/Panel/Panel";
import { Page } from "../../types/Page";
import Products from "./Components/Products";

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
