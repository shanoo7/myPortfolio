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
          <h2 className="text-sm md:text-md text-gray-400">
          With strong MERN stack experience, I implement high-performance scalable web applications. Below are most significant projects outlining my ability in designing, creating, and hosting high-performance current applications with phenomenal user experience.

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

                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm mb-2 break-words">
  {card.description}
</p>
<div className="flex gap-3 mt-2">
  <a href={card.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-lg">
    <FaGithub />
  </a>
  <a href={card.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white text-lg">
    <FiExternalLink />
  </a>
</div>

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

