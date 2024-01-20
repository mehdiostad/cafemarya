import React from 'react'

const item = ({itemName , smallPrice , largePrice}) => {
  return (
    <div className='flex justify-between w-72  mt-4'>
       
        <div className=' flex gap-6'>
            <div>{largePrice}</div>
            <div>{smallPrice}</div>
        </div>
        <div className='-mr-2 font-bold text-xl'>
            {itemName}
        </div>
    </div>
  )
}

export default item