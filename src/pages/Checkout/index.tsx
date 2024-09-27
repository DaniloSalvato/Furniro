import Certificate from "../../components/Certificate/Certificate"
import Panel from "../../components/Panel/Panel"
import { Page } from "../../types/Page"
import CheckoutDetails from "./Components/CheckoutDetails"

const CheckoutPage = ({page}:Page) => {
  return (
    <div>
      <Panel page={page} />
      <CheckoutDetails />
      <Certificate />
    </div>
  )
}

export default CheckoutPage