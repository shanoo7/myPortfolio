import React from 'react'

function Portfolio() {
 
  const cardData = [
    {
      id: 1,
      title: "Todo",
      description: "A full-stack todo app with CRUD operations, handling tasks through an interactive frontend and server-side backend.  ",
      badge: 24,
      link: "https://todo-curd-vert.vercel.app/",
      img: "https://tailwindflex.com/public/images/thumbnails/coming-soon-page/thumb_u.min.webp",
    },
    {
      id: 2,
      title: "Input",
      description: "description",
      badge: 19,
      link: "#",
      img: "https://tailwindflex.com/public/images/thumbnails/radio-buttons/thumb_u.min.webp",
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
    },
    {
      id: 5,
      title: "Alert",
      description: "description",
      badge: 10,
      link: "#",
      img: "https://tailwindflex.com/public/images/thumbnails/alert-mono-color/thumb_u.min.webp",
    },
    {
      id: 6,
      title: "Gradient",
      description: "description",
      badge: 9,
      link: "#",
      img: "https://tailwindflex.com/public/images/thumbnails/mango-gradient/canvas.min.webp",
    },
    {
      id: 7,
      title: "Badge",
      description: "description",
      badge: 8,
      link: "https://tailwindflex.com/tag/badge",
      img: "https://tailwindflex.com/public/images/thumbnails/badges-without-border/thumb_u.min.webp",
    },
    {
      id: 8,
      title: "Button Group",
      description: "description",
      badge: 7,
      link: "#",
      img: "https://tailwindflex.com/public/images/thumbnails/pagination-with-buttons/thumb_u.min.webp",
    },
    {
      id: 9,
      title: "Feature",
      description: "description",
      badge: 7,
      link: "#",
      img: "https://tailwindflex.com/public/images/thumbnails/resonsive-card-grid-with-hover-animation/thumb_u.min.webp",
    },
    {
      id: 10,
      title: "Call to Action",
      description: "description",
      badge: 6,
      link: "https://tailwindflex.com/tag/call-to-action",
      img: "https://tailwindflex.com/public/images/thumbnails/hero-header-with-search-button/thumb_u.min.webp",
    },
    {
      id: 11,
      title: "Grid",
      description: "description",
      badge: 6,
      link: "#",
      img: "https://tailwindflex.com/public/images/thumbnails/feature-showcase/canvas.min.webp",
    },
    {
      id: 12,
      title: "Login",
      description: "description",
      badge: 6,
      link: "#",
      img: "https://tailwindflex.com/public/images/thumbnails/login-form-with-icon/thumb_u.min.webp",
    }
  ];
  
  return (
    <>
      <section name="Portfolio" className='max-w-screen-2xl container py-4 m-auto px-4 md:px-20 min-h-screen'>
      <div className="w-full text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 sm:mb-20">
            Portfolio
          </h1>
      </div>
      {/* main card div */}
      <div className="h-full flex w-full justify-center bg-red-500 items-center p-2">
      <div className="grid bg-green-500 gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
        {cardData.map(card => (
          <div
            key={card.id}
            className="relative bg-orange-500 border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105"
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