import React, { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";
import { Data } from "./Data";
import { Expcontext } from "./Globalvars";

export const UserContext = createContext();

export const Userinput = () => {
  const item = useContext(Expcontext);
  const [inp, setInput] = useState("");
  const { expanses, setExpanses, setWholeMoney, wholeMoney } = item;

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const submitData = (mode) => {
    if (mode == "damage") {
      setExpanses([
        ...expanses,
        {
          income: false,
          damage: inp,
          id: Math.floor(Math.random() * 9999999),
          date: new Date().toLocaleDateString(),
          day: new Date().getDay(),
          dateTime:{h:new Date().getHours(),m:new Date().getMinutes()}
        },
      ]);

      setWholeMoney(wholeMoney - Number(inp));
    }
    if (mode == "income") {
      setExpanses([
        ...expanses,
        {
          income: true,
          damage: inp,
          id: Math.floor(Math.random() * 9999999),
          date: new Date().toLocaleDateString(),
          day: new Date().getDay(),
          dateTime:{h:new Date().getHours(),m:new Date().getMinutes()}
        },
      ]);
      setWholeMoney(wholeMoney + Number(inp));
    }
  };
  const handleDelete = (id) => {
    const newList = expanses.filter((item) => item.id !== id);
    setExpanses(newList);
  };
  return (
    <>
      <UserContext.Provider value={{ expanses }}>
        <div className="inputfieldmain">
          <input type="number" onChange={handleInput} value={inp} />
          <div className="buttons">
            <button className="btn r" onClick={() => submitData("damage")}>
              ხარჯი
            </button>
            <button className="btn g" onClick={() => submitData("income")}>
              შემოსავალი
            </button>
          </div>
        </div>
        <div className="expanses">
          {expanses.map((single) => {
            return <Data datas={single} deleteFunction={handleDelete} />;
          })}
        </div>
      </UserContext.Provider>
    </>
  );
};
