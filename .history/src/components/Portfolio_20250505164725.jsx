import React from 'react'

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: "bookPic.png",
      name: "BookStore",
      link: "https://book-store-u4ae.vercel.app/",
      code: "https://github.com/shanoo7/bookStore"
    },
    {
      id: 2,
      logo: "todoPic.png",
      name: "Todo (CURD)",
      link: "https://todo-curd-vert.vercel.app/",
      code: "https://github.com/shanoo7/todo-curd"
    }
  ]
  return (
    <>
      <div name="Portfolio" className='max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen'>
        <h1 className="text-3xl font-bold text-gray-500 mb-8">Portfolio</h1>

        {/* Card */}

        <div className='w-full flex gap-5'>
          {
            cardItems.map((item) => (
              <div key={item.id} className='group bg-slate-500 rounded-xl relative w-[200px] h-[200px]'>
              <img
                className='w-full p-1 h-full rounded-xl object-cover'
                src="https://images.pexels.com/photos/5198392/pexels-photo-5198392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              <div className='absolute inset-0 w-full h-full flex gap-2 items-end justify-center transition-all duration-500 ease-in-out group-hover:items-center'>
                <h1 className='bg-yellow-400 flex justify-center items-center rounded-full w-[40px] h-[40px]'>w</h1>
                <h2 className='bg-green-600 flex justify-center items-center rounded-full w-[40px] h-[40px]'>L</h2>
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




{/* <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
          {
            cartItem.map((item, id) => (
              <div key={id}>
                <div className='md:w-[200px] md:h-[200px] p-3 mt-5 bg-white rounded-lg shadow-2xl shadow-red-500 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl hover:shadow-red-200 duration-300 '
                  style={{
                    backgroundImage: `url(${item.logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >

                  <div className='flex md:justify-between gap-5'>
                    <button className='bg-green-500 min-w-18 mt-40 px-2 py-1 text-xs rounded hover:bg-green-600'> <a href={item.link} target="_blank">View Live</a></button>
                    <button className='bg-gray-500 min-w-18 mt-40 px-2 py-1 text-xs rounded hover:bg-gray-600'> <a href={item.code} target="_blank">View Code</a></button>
                  </div>
                </div>
                <h1 className='mt-2 text-gray-500 '>{item.name}</h1>
              </div>

            ))

          }
        </div> */}