import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

function Context(props) {
    const data = JSON.parse(localStorage.getItem('products'))
    const [ products , setProducts ] = useState(data);

    // const getProducts = async () =>{
    //     try {
    //         const { data }  = await axios('/products')
    //         setProducts(data)

            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(()=>{
    //     getProducts()
    // },[])

   
    
  return (
    <div>
        <ProductContext.Provider value={[products,setProducts]}>
        {props.children}
        </ProductContext.Provider>
    </div>
  )
}

export default Context