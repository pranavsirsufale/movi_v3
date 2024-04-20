import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/Context";
import { useContext } from "react";
import axios from "axios";

function Details() {
  const { id } = useParams();
  const [prod, setProd] = useState(null);

  const getsingleproduct = () => {
    let data = localStorage.getItem("products");
    data = JSON.parse(data);
    let condata = data.filter((prod) => prod.id == id);
    setProd(condata);
    return condata;
  };

  useEffect(() => {
    const condata = getsingleproduct();

    setProd(condata[0]);
  }, []);

  return !prod ? (
    <div className="w-[70%] flex h-full items-center  m-auto p-[10%] px-[5%]">
      <div className="content">
        <h1 className="text-4xl">Loading...</h1>
      </div>
    </div>
  ) : (
    <div className="w-[70%] flex h-full items-center  m-auto p-[10%] px-[5%]">
      <img
        className="object-contain w-[50%] h-[50%] mr-10"
        src={prod.image}
        alt={prod.title}
      />

      <div className="content">
        <h1 className="text-4xl">{prod.title}</h1>
        <h3 className="text-zinc-400 mb-4"> {prod.category} </h3>
        <h2 className="mb-4 semibold"> $ {prod.price} </h2>
        <p className="mb-5 pl-3">{prod.description}</p>
        <Link className="py-2 px-5 border rounded border-blue-200 text-blue-300 m-5 mt-5 hover:text-blue-700 hover:border-blue-700 transition-all ease-linear">
          {" "}
          Edit{" "}
        </Link>
        <Link className="py-2 px-5 border rounded border-red-200 text-red-300 hover:text-red-700 hover:border-red-700 transition-all ease-linear">
          {" "}
          Delete{" "}
        </Link>
      </div>
    </div>
  );
}

export default Details;
