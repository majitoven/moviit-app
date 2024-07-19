interface DataType {
   title: string;
   count: string;
 }[];
 
 const list_data: DataType[] = [
   { title: "School & College:", count: "0.6km" },
   { title: "Supermarket:", count: "0.2km" },
   { title: "Metro Station:", count: "0.3km" },
   { title: "Gym:", count: "0.5km" },
   { title: "University:", count: "1.8km" },
   { title: "Hospital:", count: "1.2km" },
   { title: "Shopping Center:", count: "1.4km" },
   { title: "Police Station:", count: "0.7km" },
   { title: "Bus Station:", count: "0.3km" },
   { title: "River:", count: "4.5km" },
   { title: "Market:", count: "0.7km" },
   { title: "Tiflological Museum:", count: "1.0km" }, // Example: Museo Tiflológico
   { title: "Berlin Park:", count: "1.0km" }, // Example: Parque de Berlín
   { title: "Cuzco Square:", count: "0.4km" }, // Example: Plaza de Cuzco
   { title: "Bernabéu Stadium:", count: "0.2km" }, // Santiago Bernabéu Stadium
 ];
 
 const CommonNearbyList = () => {
   return (
     <>
       <h4 className="mb-20">What's nearby in <strong>Bernabéu</strong>?</h4>
       <p className="fs-20 lh-lg pb-30">In the city center, <strong>Bernabéu</strong> offers many benefits to make your stay as comfortable as possible.</p>
       <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
         {list_data.map((list, i) => (
           <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
         ))}
       </ul>
     </>
   );
 };
 
 export default CommonNearbyList;
 