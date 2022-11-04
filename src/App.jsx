import React from "react";
import "./index.css";
import Card from "./Cards";
import Heading from "./Heading";
import Sdata from "./Sdata";

fetch("https://jsonkeeper.com/b/MN1I")
  .then((response) => response.json())
  .then((data) => console.log(data));

let nCards = (val) => {
  return (
    <Card
      key={val.id}
      imgsrc={val.imgscr}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
  );
};

function App() {
  return (
    <>
      <Heading />
      <div className="cards">{Sdata.map(nCards)}</div>
    </>
  );
}
export default App;
