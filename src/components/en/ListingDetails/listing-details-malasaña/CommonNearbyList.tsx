interface DataType {
   title: string;
   count: string;
}[];

const list_data: DataType[] = [
   { title: "School & College:", count: "0.5km" },
   { title: "Supermarket:", count: "0.2km" },
   { title: "Metro Station:", count: "0.3km" },
   { title: "Gym:", count: "0.6km" },
   { title: "University:", count: "1.4km" },
   { title: "Hospital:", count: "1.1km" },
   { title: "Shopping Center:", count: "1.2km" },
   { title: "Police Station:", count: "0.4km" },
   { title: "Bus Station:", count: "0.5km" },
   { title: "River:", count: "3.0km" },
   { title: "Market:", count: "0.6km" },
   { title: "History Museum:", count: "0.8km" }, // Example: Museo de Historia de Madrid
   { title: "Oeste Park:", count: "0.9km" }, // Example: Parque del Oeste
   { title: "2 de Mayo Square:", count: "0.3km" }, // Example: Plaza del Dos de Mayo
];

const CommonNearbyList = () => {
   return (
      <>
         <h4 className="mb-20">What's near <strong>Malasaña</strong>?</h4>
         <p className="fs-20 lh-lg pb-30">Located in the city center, <strong>Malasaña</strong> offers many amenities to make your stay as pleasant as possible.</p>
         <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
            {list_data.map((list, i) => (
               <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
            ))}
         </ul>
      </>
   )
}

export default CommonNearbyList;
