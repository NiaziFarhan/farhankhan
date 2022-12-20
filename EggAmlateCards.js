import React from "react";


const EggAmlateCards=(props)=>{
    return(
        <>
          <div className="card tamagoyaki-card">
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div> 
        </>
    )
}
export default EggAmlateCards;

