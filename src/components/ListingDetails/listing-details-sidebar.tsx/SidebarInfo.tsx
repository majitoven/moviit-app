import Image from "next/image"
import Link from "next/link"

import infoAvatar from "@/assets/images/agent/img_06.jpg"

const SidebarInfo = () => {
   return (
      <>
         <Link href="/contact" className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONTACTAR UN AGENTE</Link>
      </>
   )
}

export default SidebarInfo
