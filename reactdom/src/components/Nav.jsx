import React, { useContext } from 'react'
import { ProductContext } from '../context/Context'
import { Link } from 'react-router-dom';

function Nav() {

  const {products} = useContext(ProductContext)

  let distinct_category = products && products.reduce((acc, cur)=>[...acc,cur.category],[])

  distinct_category = [...new Set(distinct_category)];


  const color = () =>{
    return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
  }
 


  

  return (
    <nav
    className="w-[20%] h-full bg-zinc-50 flex flex-col items-center pt-5
"
  >
    <a
      className="py-3 px-5 border rounded border-blue-200 text-blue-300"
      href="/create"
    >
      {" "}
      Add New Product{" "}
    </a>
    <hr className="my-3 w-[80%]" />
    <h1 className="text-2xl mb-3 w-[80%]">categories Filter</h1>
    <div className="w-[80%]">


        {
       distinct_category.map((c,i)=>(

      <Link key={i} to={`/?category=${c}`} className="mb-3 flex items-center">
       
        <span style={{backgroundColor:`${color()}`}} className="mr-2 w-[15px] h-[15px] rounded-full"></span>{" "}
        {c}
      </Link>
       ))
      }


    
  
     
    </div>
  </nav>
  )
}

export default Nav