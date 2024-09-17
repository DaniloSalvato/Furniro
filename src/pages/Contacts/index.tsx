import Certificate from "../../components/Certificate/Certificate"
import Panel from "../../components/Panel/Panel"
import { Page } from "../../types/Page"
import Contacts from "./Components/Contacts"


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