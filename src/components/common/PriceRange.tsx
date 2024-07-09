"use client"
import { getTrackBackground, Range } from "react-range";

type IProps = {
   STEP: number;
   MIN: number;
   MAX: number;
   values: number[];
   handleChanges: (val: number[]) => void;
};

const PriceRange = ({ STEP, MIN, MAX, values, handleChanges }: IProps) => {
   return (
      <>
         <Range
            step={STEP}
            min={MIN}
            max={MAX}
            values={values}
            onChange={(vals) => handleChanges(vals)}
            renderTrack={({ props, children }) => (
               <div
                  {...props}
                  key='track'
                  style={{
                     ...props.style,
                     height: '4px',
                     width: '100%',
                     background: getTrackBackground({
                        values: values,
                        colors: ["#fff", "#3BB17C", "#94d6b8"],
                        min: MIN,
                        max: MAX,
                     }),
                  }}
               >
                  {children}
               </div>
            )}
            renderThumb={({ props, index }) => (
               <div
                  {...props}
                  key={`thumb-${index}`}
                  className="ui-input"
                  style={{
                     ...props.style,
                     height: '20px',
                     width: '20px',
                     backgroundColor: "#fff",
                     outline: "none",
                     borderRadius: "50px",
                     border: "2px solid #3BB17C",
                  }}
               />
            )}
         />
      </>
   );
};

export default PriceRange;
