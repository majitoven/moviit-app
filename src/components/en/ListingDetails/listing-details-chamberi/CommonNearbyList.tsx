interface DataType {
   title: string;
   count: string;
}[];

const list_data: DataType[] = [
   { title: "School & College:", count: "0.4km" },
   { title: "Supermarket:", count: "0.3km" },
   { title: "Metro Station:", count: "0.2km" },
   { title: "Gym:", count: "0.5km" },
   { title: "University:", count: "1.2km" },
   { title: "Hospital:", count: "1.0km" },
   { title: "Shopping Center:", count: "1.5km" },
   { title: "Police Station:", count: "0.7km" },
   { title: "Bus Station:", count: "0.3km" },
   { title: "River:", count: "4.0km" },
   { title: "Market:", count: "0.5km" },
   { title: "Sorolla Museum:", count: "0.6km" }, // Example: Sorolla Museum
   { title: "Santander Park:", count: "0.8km" }, // Example: Santander Park
   { title: "Olavide Square:", count: "0.4km" }, // Example: Plaza de Olavide
];

const CommonNearbyList = () => {
   return (
      <>
         <h4 className="mb-20">What's nearby in <strong>Chamberí</strong>?</h4>
         <p className="fs-20 lh-lg pb-30">In the city center, <strong>Chamberí</strong> offers many benefits to make your stay as comfortable as possible.</p>
         <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
            {list_data.map((list, i) => (
               <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
            ))}
         </ul>
      </>
   )
}

export default CommonNearbyList;
