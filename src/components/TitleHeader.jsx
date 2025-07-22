import React from 'react'

const TitleHeader = ({
    title, text, number
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="">
            <h1 className='gradient-title font-semibold xl:text-6xl md:text-4xl text-3xl uppercase'>{title}</h1>
            <p className='md:text-3xl md:mt-5'>{text}</p>
        </div>
       <div className='md:flex hidden items-center gap-7'>
         <div className='w-36 border border-amber-100'></div>
         <p className='gradient-title text-6xl'>{number}</p>
       </div>
      </div>
    </div>
  )
}

export default TitleHeader
