import { Main } from "./components/Main";
import { useContext } from "react";
import { createContext } from "react";
import { Expcontext } from "./components/Globalvars";
import { useState } from "react";

function App() {
  const [expanses, setExpanses] = useState([]);
  const [wholeMoney, setWholeMoney] = useState();
  const [val,setVal] = useState(null)
  return (
    <>
      <Expcontext.Provider
        value={{ expanses, setExpanses, wholeMoney, setWholeMoney,val,setVal }}
      >
        <Main />
      </Expcontext.Provider>
    </>
  );
}

export default App;
