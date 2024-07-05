interface DataType {
   title: string;
   count: string;
}[];

const list_data: DataType[] = [
   { title: "Escuela & Colegio:", count: "0.5km" },
   { title: "Supermercado:", count: "0.2km" },
   { title: "Estación de Metro:", count: "0.3km" },
   { title: "Gimnasio:", count: "0.6km" },
   { title: "Universidad:", count: "1.4km" },
   { title: "Hospital:", count: "1.1km" },
   { title: "Centro Comercial:", count: "1.2km" },
   { title: "Comisaría:", count: "0.4km" },
   { title: "Estación de buses:", count: "0.5km" },
   { title: "Río:", count: "3.0km" },
   { title: "Mercado:", count: "0.6km" },
   { title: "Museo Historia:", count: "0.8km" }, // Ejemplo: Museo de Historia de Madrid
   { title: "Parque Oeste:", count: "0.9km" }, // Ejemplo: Parque del Oeste
   { title: "Plaza 2 de Mayo:", count: "0.3km" }, // Ejemplo: Plaza del Dos de Mayo
];

const CommonNearbyList = () => {
   return (
      <>
         <h4 className="mb-20">¿Qué hay cerca?</h4>
         <p className="fs-20 lh-lg pb-30">En el centro de la ciudad, <strong>Malasaña</strong> cuenta con muchos beneficios para hacer de tu estadía lo mejor posible.</p>
         <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
            {list_data.map((list, i) => (
               <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
            ))}
         </ul>
      </>
   )
}

export default CommonNearbyList;
