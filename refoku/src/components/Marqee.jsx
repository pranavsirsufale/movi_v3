import React from 'react'

function Marqee({imagesurls}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
       {imagesurls.map(url=>  <img src={url} className='w-32 flex-shrink-0' /> )}
       {imagesurls.map(url=>  <img src={url} className='w-32 flex-shrink-0' /> )}
    </div>
  )
}

export default Marqee