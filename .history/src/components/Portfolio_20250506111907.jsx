import React from 'react'

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "BookStore",
      link: "https://book-store-u4ae.vercel.app/",
      code: "https://github.com/shanoo7/bookStore"
    },
    {
      id: 2,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Todo (CURD)",
      link: "https://todo-curd-vert.vercel.app/",
      code: "https://github.com/shanoo7/todo-curd"
    },
    {
      id: 3,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "BookStore",
      link: "https://book-store-u4ae.vercel.app/",
      code: "https://github.com/shanoo7/bookStore"
    },
    {
      id: 4,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Todo (CURD)",
      link: "https://todo-curd-vert.vercel.app/",
      code: "https://github.com/shanoo7/todo-curd"
    },
    {
      id: 5,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "BookStore",
      link: "https://book-store-u4ae.vercel.app/",
      code: "https://github.com/shanoo7/bookStore"
    },
    {
      id: 6,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Todo (CURD)",
      link: "https://todo-curd-vert.vercel.app/",
      code: "https://github.com/shanoo7/todo-curd"
    },
    {
      id: 7,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "BookStore",
      link: "https://book-store-u4ae.vercel.app/",
      code: "https://github.com/shanoo7/bookStore"
    },
    {
      id: 8,
      logo: "https://images.pexels.com/photos/52608/pexels-photo-52608.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Todo (CURD)",
      link: "https://todo-curd-vert.vercel.app/",
      code: "https://github.com/shanoo7/todo-curd"
    }
  ]
  return (
    <>
      <section name="Portfolio" className='max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen'>
      <div className="w-full text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-20">
            Portfolio
          </h1>
      </div>

        {/* Card */}

        <div className='w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5'>
          {
            cardItems.map((item) => (
<div key={item.id} className='relative w-[200px] h-[200px]'>

{/* Background Box - Lower Z-index */}
<div className='absolute -top-2 -left-2 w-[200px] h-[200px] rounded-xl bg-slate-400  z-0'></div>
<div className='absolute -top-1 -left-1 w-[200px] h-[200px] rounded-xl bg-slate-500  z-0'></div> 
{/* Main Card - Higher Z-index */}
<div className='group overflow-hidden rounded-xl relative w-full h-full z-10'>

  {/* Image */}
  <img
    className='w-full h-full rounded-xl object-cover'
    src={item.logo}
    alt=""
  />

  {/* Hover Overlay with Icons */}
  <div className='absolute inset-0 h-0 opacity-0 group-hover:opacity-100 flex gap-2 items-center justify-center group-hover:h-full transition-all duration-1000 ease-in-out bg-black/40 z-10'>
    <h1 className='bg-yellow-400 text-xs flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer'>code</h1>
    <h2 className='bg-green-600  text-xs flex justify-center items-center rounded-full w-[40px] h-[40px] cursor-pointer'>Live</h2>
  </div>

  {/* Top Label Tag */}
  <div className='absolute top-2 left-2 bg-white text-black text-[10px] px-2 py-1 rounded z-30'>
    {item.name}
  </div>


</div>
</div>






            ))
          }

        </div>

      </section>
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