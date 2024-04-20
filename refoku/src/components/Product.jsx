import React from "react";
import Button from "./Button";

function Product({val}) {
  return (
    <div className="w-full py-20 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium" > {val.title} </h1>
        <div className="dete w-1/3">
          <p className="mb-10">
            {val.description}
           
          </p >

          <div className="flex items-center gap-5"> 
          {val.live &&  <Button /> }
          {val.caase &&  <Button title={'case study'} /> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
