interface DataType {
   title: string;
   count: string;
}[];

const list_data: DataType[] = [
   { title: "Escuela & Colegio:", count: "0.4km" },
   { title: "Supermercado:", count: "0.3km" },
   { title: "Estación de Metro:", count: "0.2km" },
   { title: "Gimnasio:", count: "0.5km" },
   { title: "Universidad:", count: "1.2km" },
   { title: "Hospital:", count: "1.0km" },
   { title: "Centro Comercial:", count: "1.5km" },
   { title: "Comisaría:", count: "0.7km" },
   { title: "Estación de buses:", count: "0.3km" },
   { title: "Río:", count: "4.0km" },
   { title: "Mercado:", count: "0.5km" },
   { title: "Museo Sorolla:", count: "0.6km" }, // Ejemplo: Museo Sorolla
   { title: "Parque Santander:", count: "0.8km" }, // Ejemplo: Parque de Santander
   { title: "Plaza Olavide:", count: "0.4km" }, // Ejemplo: Plaza de Olavide
];

const CommonNearbyList = () => {
   return (
      <>
         <h4 className="mb-20">¿Qué hay cerca en <strong>Chamberí</strong>?</h4>
         <p className="fs-20 lh-lg pb-30">En el centro de la ciudad, <strong>Chamberí</strong> cuenta con muchos beneficios para hacer de tu estadía lo mejor posible.</p>
         <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
            {list_data.map((list, i) => (
               <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
            ))}
         </ul>
      </>
   )
}

export default CommonNearbyList;
