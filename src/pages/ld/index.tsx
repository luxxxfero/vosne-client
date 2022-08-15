import {NextPage} from "next";
import LDLayout from "../../layouts/ld-layout";
import LDContent from "../../components/page-content/ld-content";


const LD: NextPage = () => {
  return  (
    <LDLayout>
      <LDContent/>
    </LDLayout>
  )
}

export default LD;