import React from 'react'

function Portfolio() {
    const cartItem = [
        {
            id:1,
            logo:"myPic.jpg",
            name:"mongoDb"
        },
        {
            id:2,
            logo:"myPic.jpg",
            name:"express"
        },
        {
            id:3,
            logo:"myPic.jpg",
            name:"nodeJs"
        },
        {
            id:4,
            logo:"myPic.jpg",
            name:"reactJs"
        }
    ]
  return (
    <>
    <div name="Portfolio" className='max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen'>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Portfolio</h1>
      <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
      {
        cartItem.map((item,id)=>(
            <div key={id} className='md:w-[200px] md:h-[200px] p-3 mt-5 bg-white rounded-lg shadow-lg cursor-pointer hover:scale-105 duration-300 '>
        <img className='w-12 h-12 mt-3 rounded-full border' src={item.logo} alt="" />
        <div className='space-y-2 '>
          <h1 className='font-bold'>{item.name}</h1> 
          <p className='text-xs'>this is my text</p> 
          <div className='flex md:justify-between gap-5'>
            <button className='bg-green-500 min-w-16 px-2 py-1 text-sm font-bold rounded hover:bg-green-600'>vido</button>
            <button className='bg-red-500 min-w-16 text-sm font-bold px-2 rounded hover:bg-red-600'>code</button>
            </div>  
        </div>
      </div>
        ))
      }
      </div>

      </div>
    </>
  )
}

export default Portfolio;
