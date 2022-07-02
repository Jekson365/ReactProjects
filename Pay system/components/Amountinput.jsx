import React, { useContext } from "react";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Expcontext } from "./Globalvars";

export const Amountinput = () => {
  const [set, setSetter] = useState(false);
  const item = useContext(Expcontext);

  return (
    <>
      <div
        className="overlay"
        style={set ? { opacity: "0" } : { opacity: "1" }}
      ></div>
      <div className="am" style={set ? { bottom: "-100px"} : { bottom: "0"}}>
        <div className="circle">
          <FaAngleUp
            id="ic"
            onClick={() => (set ? setSetter(false) : setSetter(true))}
          />
          <div className="input-group">
            <input
              type="number"
              id="amountinput"
              value={item.wholeMoney}
              onChange={(e) => item.setWholeMoney(e.target.value)}
            />
            <button
              className="btn r"
              type="submit"
              onClick={() => {
                item.setWholeMoney(item.wholeMoney);
                setSetter(true);
              }}
            >
              შენახვა
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
