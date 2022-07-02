import React from "react";
import { useContext } from "react";
import { Expcontext } from "./Globalvars";

export const Data = (props) => {
  const { datas, deleteFunction } = props
  const item = useContext(Expcontext);
  const days = ['ორშაბათი',"სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი","კვირა"]
  return (
    <>
      <div className="exp-container">
        <div className="col-1">
          <p
            id="amount"
            style={!datas.income ? {"color":"red"} : {"color":"#2bdd01"}}
          >
            {datas.damage}₾
          </p>
        </div>
        <div className="col-2">
          <div className="min-col">
            <p id='date'>{datas.date} - {datas.dateTime.h}:{datas.dateTime.m}</p>
            <p id="date">{days[datas.day - 1]}</p>
          </div>
          <div className="min-col">
            <p id="delete" onClick={()=>deleteFunction(datas.id)}>X</p>
          </div>
        </div>
      </div>
    </>
  );
};
