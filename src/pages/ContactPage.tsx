import Contacts from "../components/ContactComponents/Contacts"
import Certificate from "../components/GenericComponents/Certificate"
import Panel from "../components/GenericComponents/Panel"
import { Page } from "../types/Page"

const ContactPage = ({page}:Page) => {
  return (
    <>
    <Panel page={page}/>
    <Contacts />
    <Certificate />
    </>
  )
}

export default ContactPage