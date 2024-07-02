import NiceSelect from "@/ui/NiceSelect";
import NumberNiceSelect from "@/ui/NumberNiceSelect";
import PriceRange from "@/components/common/PriceRange";
import UseShortedProperty from "@/hooks/useShortedProperty";

const ListingDetails = () => {

   const selectHandler = (e: any) => { };

   const itemsPerPage = 9;
   const page = "listing_5";
   const { handleSqFeetChange, maxSqFeet, sqFeetValue } = UseShortedProperty({
      itemsPerPage,
      page,
   });

   return (
      <div className="bg-white card-box border-20 mt-40">
         <h4 className="dash-title-three">Detalles del inmueble</h4>
         <div className="row align-items-end">
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Número de dormitorios*</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Número de baños</label>
                  <NumberNiceSelect className="nice-select"
                     options={[
                        { value: 1, text: 0 },
                        { value: 2, text: 1 },
                        { value: 3, text: 2 },
                        { value: 4, text: 3 },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Amueblado</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: 'si', text: "Si" },
                        { value: 'no', text: "no" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Interior/Exterior</label>
                  <NiceSelect className="nice-select"
                     options={[
                        { value: 'Interior', text: "Interior" },
                        { value: 'Exterior', text: "Exterior" },
                        { value: 'Indiferente', text: "Indiferente" },
                     ]}
                     defaultCurrent={0}
                     onChange={selectHandler}
                     name=""
                     placeholder="" />
               </div>
            </div>
            <div className="col-md-4">
               <div className="dash-input-wrapper mb-30">
                  <label htmlFor="">Tamaño (m²)*</label>
                  <>
                     <div className="price-ranger">
                        <div
                           className="price-input d-flex align-items-center justify-content-between pt-5"
                           style={{ marginBottom: "12px" }}
                        >
                           <div className="field d-flex align-items-center">
                              <input
                                 style={{ height: "30px" }}
                                 type="number"
                                 className="input-min"
                                 value={sqFeetValue[0]}
                                 onChange={() => handleSqFeetChange}
                              />
                           </div>
                           <div className="divider-line"></div>
                           <div className="field d-flex align-items-center">
                              <input
                                 style={{ height: "30px" }}
                                 type="number"
                                 className="input-max"
                                 value={sqFeetValue[1]}
                                 onChange={() => handleSqFeetChange}
                              />
                           </div>
                           <div className="currency ps-1">m²</div>
                        </div>
                     </div>
                     <PriceRange
                        MAX={maxSqFeet}
                        MIN={40}
                        STEP={1}
                        values={sqFeetValue}
                        handleChanges={handleSqFeetChange}
                     />
                  </>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ListingDetails;
