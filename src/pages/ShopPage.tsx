import Certificate from "../components/GenericComponents/Certificate";
import Panel from "../components/GenericComponents/Panel";
import { Page } from "../types/Page";

const ShopPage = ({ page }: Page) => {
  return (
    <>
      <Panel page={page} />
      <Certificate />
    </>
  );
};

export default ShopPage;
