import React from "react";
import { Expcontext } from "./Globalvars";
import { useContext } from "react";


export const Amount = () => {
  const item = useContext(Expcontext)
  const {wholeMoney,setWholeMoney} = item
  
  return (
    <>
      <div className="row">
        <div className="full-money">
          <h1>{wholeMoney}₾</h1>
        </div>
      </div>
    </>
  );
};
