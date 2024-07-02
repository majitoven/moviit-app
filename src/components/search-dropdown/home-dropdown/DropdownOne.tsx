import NiceSelect from "@/ui/NiceSelect";
import PriceRange from "@/components/common/PriceRange";
import UseShortedProperty from "@/hooks/useShortedProperty";
import NiceMultiSelect from "@/ui/NiceMultiSelect";

const DropdownOne = ({ style }: any) => {
  const selectHandler = (e: any) => { };

  const searchHandler = () => {
    window.location.href = "/listing_0";
  };

  const itemsPerPage = 9;
  const page = "listing_5";

  const { handlePriceChange, maxPrice, priceValue } = UseShortedProperty({
    itemsPerPage,
    page,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        searchHandler();
      }}
    >
      <div className="row gx-0 align-items-center">
        <div className="col-xl-3 col-md-6">
          <div className="input-box-one border-left">
            <div className="label">Estoy buscando...</div>
            <NiceSelect
              className={`nice-select ${style ? "fw-normal" : ""}`}
              options={[
                { value: "apartments", text: "Alquilar un apartamento" },
                { value: "rooms", text: "Alquilar una habitación" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className={`${style ? "col-xl-2" : "col-xl-2"} col-md-6`}>
          <div className="input-box-one border-left">
            <div className="label">Zonas</div>
            <NiceMultiSelect
              className={`nice-select location ${style ? "fw-normal" : ""}`}
              options={[
                { value: "Chamberí", text: "Chamberí" },
                { value: "Justicia", text: "Justicia" },
                { value: "Chueca", text: "Chueca" },
                { value: "Malasaña", text: "Malasaña" },
                { value: "Sol", text: "Sol" },
                { value: "Almagro", text: "Almagro" },
                { value: "Ríos Rosas", text: "Ríos Rosas" },
                { value: "Gaztambide", text: "Gaztambide" },
                { value: "Argüelles", text: "Argüelles" },
                { value: "Arapiles", text: "Arapiles" },
                { value: "Trafalgar", text: "Trafalgar" }, //lo agregue
                { value: "Salamanca", text: "Salamanca" },
                { value: "Goya", text: "Goya" },
                { value: "Lista", text: "Lista" },
                { value: "Ibiza", text: "Ibiza" },
                { value: "Recoletos", text: "Recoletos" },
                { value: "Castellana", text: "Castellana" },
                { value: "Cuatro Caminos", text: "Cuatro Caminos" },
                { value: "El Viso", text: "El Viso" },
                { value: "Prosperidad", text: "Prosperidad" },
                { value: "Vallehermoso", text: "Vallehermoso" },
                { value: "Ciudad Jardín", text: "Ciudad Jardín" },
                { value: "Hispanoamérica", text: "Hispanoamérica" },
                { value: "Fuente del Berro", text: "Fuente del Berro" },
                { value: "Guindalera", text: "Guindalera" },
                { value: "Ventas", text: "Ventas" },
                { value: "Ciudad Universitaria", text: "Ciudad Universitaria" },
                { value: "Latina", text: "Latina" },
                { value: "Palacio", text: "Palacio" },
                { value: "Lavapiés", text: "Lavapiés" },
                { value: "Universidad", text: "Universidad" },
                { value: "Cortes", text: "Cortes" }, //lo agregue
                { value: "Pacífico", text: "Pacífico" },
                { value: "Jerónimos", text: "Jerónimos" },
                { value: "Atocha", text: "Atocha" },
                { value: "Arganzuela", text: "Arganzuela" },
                { value: "Delicias", text: "Delicias" },
              ]}
              defaultCurrent={[]}
              onChange={selectHandler}
              name=""
              placeholder="Seleccione"
            />
          </div>
        </div>
        <div className="col-xl-2 col-md-6">
          <div className="input-box-one border-left border-lg-0">
            <div className="label">Duración</div>
            <NiceSelect
              className={`nice-select ${style ? "fw-normal" : ""}`}
              options={[
                { value: "1", text: "3-6 meses" },
                { value: "2", text: "7 - 9 meses" },
                { value: "3", text: "10 - 12 meses" },
              ]}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              placeholder=""
            />
          </div>
        </div>
        <div className="col-xl-3 col-md-6">
          <div className="input-box-one border-left border-lg-0">
            <div className="label">Rango de precios</div>
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
                    value={priceValue[0]}
                    onChange={() => handlePriceChange}
                  />
                </div>
                <div className="divider-line"></div>
                <div className="field d-flex align-items-center">
                  <input
                    style={{ height: "30px" }}
                    type="number"
                    className="input-max"
                    value={priceValue[1]}
                    onChange={() => handlePriceChange}
                  />
                </div>
                <div className="currency ps-1">€</div>
              </div>
            </div>
            <PriceRange
              MAX={maxPrice}
              MIN={600}
              STEP={1}
              values={priceValue}
              handleChanges={handlePriceChange}
            />
          </div>
        </div>

        <div className={`${style ? "col-xl-2" : "col-xl-2"}`}>
          <div className="input-box-one lg-mt-10">
            <button
              className={`fw-500 tran3s ${style
                ? "w-100 tran3s search-btn-three"
                : "text-uppercase search-btn"
                }`}
            >
              {style ? "Buscar" : "Search"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DropdownOne;
