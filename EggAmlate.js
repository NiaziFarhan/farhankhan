import React from "react";
import Amlate_Data from "./Amlate_Data";
import EggAmlateCards from "./EggAmlateCards";

const EggAmlate = () => {
   return (
      <>
         <div className="my-5 ">
            <h1 className="text-center amlate-heading">Here are the variesties of amalates</h1>
         </div>
         <div className="amlate-cards  container-fluid mb-5 ">
            <div className="row">
               <div className="col-10 ms-auto">

                  <div className="row">
                     {
                        Amlate_Data.map((val, ind) => {
                           return <EggAmlateCards key={ind}
                              imgsrc={val.imgsrc}
                              title={val.title}
                              text={val.text}
                           />
                        })
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
export default EggAmlate;





