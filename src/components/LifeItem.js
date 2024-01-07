import React from "react";

function LifeItem({ image, name, description }) {
  return (
    <div className="lifeItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {description} </p>
      {/* {<img src = {image}/>} */}
    </div>
  );
}

export default LifeItem;
