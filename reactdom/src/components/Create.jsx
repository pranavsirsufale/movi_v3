import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import {nanoid} from 'nanoid'
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate()
  const productContext = useContext(ProductContext); 
  // const [products , setProducts] = useState(productContext)

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   if (productContext) {
  //     setProducts(productContext);
  //   }
  // }, [productContext]);

 



  // const setProducts = productContext[1];
  // const products = productContext[0]; 


  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const addProductHandler = (e) =>{
    e.preventDefault()

    if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5  || description.trim().length < 5 ){
        alert(" caracter should be more than 5 ")
        return;
    }

    let newProduct = {
        id: nanoid(),
        title,
        image,
        category,
        price,
        description


    }
    // setProducts(prevProducts => [...prevProducts, newProduct]);
    
    useEffect(() => {
      const storedProducts = JSON.parse(localStorage.getItem("products"));
      if (storedProducts) {
        setProducts([...storedProducts,newProduct]);
        alert("products has added been succsfully")
      }
    }, []);
  
    
    // localStorage.setItem('products',)
console.log(JSON.stringify(products));

    // setProducts()
   
  }


  return (
    <form onSubmit={addProductHandler} className="p-[5%] w-screen h-screen flex flex-col items-center">
      <h1 className="text-3xl w-1/2 mb-3">Add New Product </h1>

      <input
        type="url"
        placeholder="image link"
        className="outline-yellow-100 text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="outline-yellow-100 text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="outline-yellow-100 text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />

        <input
          type="number"
          placeholder="price"
          className="outline-yellow-100 text-1xl bg-zinc-100 rounded w-[48%] p-3  mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>

      <textarea className="outline-yellow-100 text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"rows="10" 
      onChange={(e)=>setDescription(e.target.value)}
      value={description}
      placeholder="Enter Product Description here."
      ></textarea>

        <div className="w-1/2">

        <button
      className="self-start py-2 px-3 border rounded transition-all ease-in-out border-blue-200 text-blue-300 hover:bg-zinc-100 hover:text-blue-700 hover:border-blue-700 hover:scale-105"
      > Add New Product </button>
        </div>
    </form>
  );
}

export default Create;
