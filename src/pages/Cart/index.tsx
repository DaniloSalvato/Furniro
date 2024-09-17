import FullCart from "./Components/FullCart";
import Certificate from "../../components/Certificate/Certificate";
import Panel from "../../components/Panel/Panel";
import { Page } from "../../types/Page";

const CartPage = ({ page }: Page) => {
  return <div>
    <Panel page={page} />
    <FullCart />
    <Certificate />
  </div>;
};

export default CartPage;
