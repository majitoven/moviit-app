import Image, { StaticImageData } from "next/image"

import icon_1 from "@/assets/images/icon/icon_47.svg"
import icon_2 from "@/assets/images/icon/icon_48.svg"
import icon_3 from "@/assets/images/icon/icon_49.svg"
import icon_4 from "@/assets/images/icon/icon_45.svg"
import icon_5 from "@/assets/images/icon/icon_51.svg"

interface DataType {
   id: number;
   icon: StaticImageData;
   title: string;
}[];

const property_overview_data: DataType[] = [
   {
      id: 1,
      icon: icon_1,
      title: "Mts² . 75",
   },
   {
      id: 2,
      icon: icon_2,
      title: "Dorm . 3",
   },
   {
      id: 3,
      icon: icon_3,
      title: "Baños . 1",
   },
   {
      id: 4,
      icon: icon_4,
      title: "1 año",
   },
   {
      id: 5,
      icon: icon_5,
      title: "Amueblado a estrenar",
   }
]

const CommonPropertyOverview = () => {
   return (
      <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
         {property_overview_data.map((item) => (
            <li key={item.id}>
               <Image src={item.icon} alt="" className="lazy-img icon" />
               <span className="fs-20 color-dark">{item.title}</span>
            </li>
         ))}
      </ul>
   )
}

export default CommonPropertyOverview
