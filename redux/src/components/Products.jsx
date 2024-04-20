import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncGetProducts } from "../store/actions/ProductActions"

function Products() { 
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.ProductReducer)
  console.log(products);

  useEffect(()=>{
    dispatch(asyncGetProducts())
   
  },[])

  
  return (
    <div className="n-auto container mt-5 bg-red-100 p-10">
      <h1 className="text-2xl font-bold text-red-900"> user list </h1>
    <ul>
      {
        products.map((item)=>(
          <li key={item.id} > {` ${item.id}   ${ item.title}`}  </li>
        ))
      }
    </ul>
   </div>
  )
}

export default Products