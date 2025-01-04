import React from 'react'

function Portfolio() {
  const cartItem = [
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
        <div className='grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
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
                    <a href={item.link} target="_blank"><button className='bg-green-500 min-w-18 mt-40 px-2 py-1 text-xs rounded hover:bg-green-600'>View Live</button></a>
                    <a href={item.code} target="_blank"><button className='bg-gray-500 min-w-18 mt-40 px-2 py-1 text-xs rounded hover:bg-gray-600'>View Code</button></a>
                  </div>
                </div>
                <h1 className='mt-2 text-gray-500 '>{item.name}</h1>
              </div>

            ))

          }
        </div>

      </div>
    </>
  )
}

export default Portfolio;
