import React from 'react'
import Product from './Product'

function Products() {

    let products = [ 
        {
          title : 'arquitel',
          description: 'arque Executive and its emplyess contune to receive order for customrs that ',
          live:true,
          caase:true
        },
        {
          title : 'TTR',
          description: 'arque Executive and its emplyess contune to receive order for customrs that ',
          live:true,
          caase:true
        },
        {
          title : 'YIR 2300',
          description: 'arque Executive and its emplyess contune to receive order for customrs that ',
          live:true,
          caase:true
        },
        {
          title : 'Yahoo',
          description: 'arque Executive and its emplyess contune to receive order for customrs that ',
          live:true,
          caase:true
        },
    ]

  return (
    <div className='mt-32' >
        {products.map((val, inde)=>(
          <Product val={val} />
        ))}
    </div>
  )
}

export default Products