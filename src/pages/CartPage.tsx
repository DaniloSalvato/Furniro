import FullCart from "../components/CartComponents/FullCart";
import Certificate from "../components/GenericComponents/Certificate";
import Panel from "../components/GenericComponents/Panel";
import { Page } from "../types/Page";

const CartPage = ({ page }: Page) => {
  return <div>
    <Panel page={page} />
    <FullCart />
    <Certificate />
  </div>;
};

export default CartPage;
