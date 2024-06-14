import CheckoutDetails from "../components/CheckoutComponents/CheckoutDetails"
import Certificate from "../components/GenericComponents/Certificate"
import Panel from "../components/GenericComponents/Panel"
import { Page } from "../types/Page"

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