const ammenities_data: string[] = ["Aire Cond.", "Calefacción", "Balcón", "Wifi", "Ascensor", "Garage", "Pet friendly", "Luminoso", "Lavarropa/Lavandería"];

const CommonAmenities = () => {
   return (
      <>
         <h4 className="mb-20">Amenities</h4>
         <ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
            {ammenities_data.map((list, i) => (
               <li key={i}>{list}</li>
            ))}
         </ul>
      </>
   )
}

export default CommonAmenities
