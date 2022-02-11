import { useState } from "react";
import Continents from "./continents";
import Countries from "./countries";
import "./screen-1.css";
const Screen1 = () => {
  const [continent, setContinent] = useState("");

  return (
    <div className="main">
      <h2>Scree-1</h2>
      <div className="data-cont">
        <Continents onContinentChange={setContinent} />
        <Countries continent={continent} />
      </div>
    </div>
  );
};

export default Screen1;
