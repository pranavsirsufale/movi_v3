import React from 'react'
import {IoIosReturnRight} from 'react-icons/io'

function Button({title='Get Started'}) {
  return (
    <div className='max-w-40 px-4 flex items-center justify-between py-2 bg-zinc-100 text-black rounded-full'> 
    <span className='text-sm font-medium'> {title} </span>
    <IoIosReturnRight/>
    </div>
  )
}

export default Button