import React from 'react'

function Portfolio() {
 
  const cardData = [
  {
    id: 1,
    title: "Todo",
    description: "Full-stack CRUD todo app with interactive task management.",
    badge: 24,
    link: "#",
    img: " todo.png",
  },
  {
    id: 2,
    title: "Book Store",
    description: "MERN bookstore app with authentication, API, and forms.",
    badge: 19,
    link: "#",
    img: "bookStore.png",
  },
  {
    id: 3,
    title: "Button",
    description: "description",
    badge: 18,
    link: "#",
    img: "https://tailwindflex.com/public/images/thumbnails/buttons-with-border-bottom/thumb_u.min.webp",
  },
  {
    id: 4,
    title: "Form",
    description: "description",
    badge: 15,
    link: "https://tailwindflex.com/tag/form",
    img: "https://tailwindflex.com/public/images/thumbnails/sb-admin-2-login-page-with-tailwind/canvas.min.webp",
  }
];

  return (
    <>
      <section name="Portfolio" className='max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen'>
      <div className="w-full text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white my-5">
            Portfolio
          </h1>
          <h2 className="text-sm md:text-md font-semibold text-white">
      My Projects
          </h2>
      </div>

      
      <div className="h-full flex w-full justify-center items-center dark:bg-gray-800 p-2">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
        {cardData.map(card => (
          <div
            key={card.id}
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105"
          >
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center text-xs flex items-center justify-center">
              {card.badge}
            </div>
            <div className="p-2 flex justify-center">
              <a href={card.link}>
                <img
                  className="rounded-md"
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href={card.link}>
                  <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                </a>
                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
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