import React from "react";
import { Amount } from "./Amount";
import { Userinput } from "./Userinput";
import { Data } from "./Data";
import { Expcontext } from "./Globalvars";
import { useContext } from "react";
import { UserContext } from "./Userinput";
import { Amountinput } from "./Amountinput";


export const Main = () => {
  const item = useContext(Expcontext);

  return (
    <>
      <div className="main">
        <Amount />
        <Userinput />
        <Amountinput/>
      </div>
    </>
  );
};
