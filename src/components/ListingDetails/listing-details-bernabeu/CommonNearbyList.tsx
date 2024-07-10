interface DataType {
   title: string;
   count: string;
}[];
const list_data: DataType[] = [
   { title: "Escuela & Colegio:", count: "0.6km" },
   { title: "Supermercado:", count: "0.2km" },
   { title: "Estación de Metro:", count: "0.3km" },
   { title: "Gimnasio:", count: "0.5km" },
   { title: "Universidad:", count: "1.8km" },
   { title: "Hospital:", count: "1.2km" },
   { title: "Centro Comercial:", count: "1.4km" },
   { title: "Comisaría:", count: "0.7km" },
   { title: "Estación de buses:", count: "0.3km" },
   { title: "Río:", count: "4.5km" },
   { title: "Mercado:", count: "0.7km" },
   { title: "Museo Tiflológico:", count: "1.0km" }, // Ejemplo: Museo Tiflológico
   { title: "Parque Berlin:", count: "1.0km" }, // Ejemplo: Parque de Berlín
   { title: "Plaza Cuzco:", count: "0.4km" }, // Ejemplo: Plaza de Cuzco
   { title: "Estadio Bernabéu:", count: "0.2km" }, // Estadio Santiago Bernabéu
];

const CommonNearbyList = () => {
   return (
      <>
         <h4 className="mb-20">¿Qué hay cerca en <strong>Bernabéu</strong>?</h4>
         <p className="fs-20 lh-lg pb-30">En el centro de la ciudad, <strong>Bernabéu</strong> cuenta con muchos beneficios para hacer de tu estadía lo mejor posible.</p>
         <ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
            {list_data.map((list, i) => (
               <li key={i}>{list.title}<span className="fw-500 color-dark">{list.count}</span></li>
            ))}
         </ul>
      </>
   )
}

export default CommonNearbyList;
