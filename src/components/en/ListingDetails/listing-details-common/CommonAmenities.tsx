const amenities_data: string[] = ["Air Conditioning", "Heating", "Balcony", "Wifi", "Elevator", "Garage", "Pet Friendly", "Bright", "Washer/Laundry"];

const CommonAmenities = ({ amenities }: { amenities: string[] }) => {
   return (
      <>
         <h4 className="mb-20">Amenities</h4>
         <ul className="style-none d-flex flex-wrap list-style-two">
            {amenities?.length ? amenities.map((list, i) => (
               <li key={i}>{list}</li>
            )) : amenities_data.map((list, i) => (
               <li key={i}>{list}</li>
            ))}
         </ul>
      </>
   )
}

export default CommonAmenities
