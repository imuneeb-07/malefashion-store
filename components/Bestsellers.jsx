import React from 'react'

const Bestsellers = ({pro}) => {
  return (
    <div className='  '>
      <div className='mb-2'>
        <img src={pro.image} alt="" />
      </div>
      <div className='mb-2'>
        <h3 className=' text-lg '>{pro.title}</h3>
<div>
    <i className="bx text-orange-600 bxs-star"></i>
    <i className="bx text-orange-600  bxs-star"></i>
    <i className="bx text-orange-600  bxs-star"></i>
    <i className="bx bx-star"></i>
</div>
<p className='font-bold' >${pro.price}</p>
<div>

</div>
      </div>
    </div>
  )
}

export default Bestsellers
