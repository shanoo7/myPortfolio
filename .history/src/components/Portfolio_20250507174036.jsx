import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

function Portfolio() {
 
  const cardData = [
  {
    id: 1,
    title: "Todo",
    description: "Full-stack CRUD todo app with interactive task management.",
    badge: 24,
    img: " todo.png",
    github: <FaGithub />,
    live:<FiExternalLink />,
    githublink:"https://github.com/shanoo7/todo-curd",
    livelink:"https://todo-curd-vert.vercel.app/",
  },
  {
    id: 2,
    title: "Book Store",
    description: "MERN bookstore app with authentication, API, and forms.",
    img: "bookStore.png",
    github: <FaGithub />,
    live:<FiExternalLink />,
    githublink:"https://github.com/shanoo7/bookStore",
    livelink:"https://book-store-u4ae.vercel.app/",
  },
  {
    id: 3,
    title: "Namrata Universal",
    description: "React Tailwind website with design, development, marketing solutions.",
    img: "namrata-universal.png",
    github: <FaGithub />,
    live:<FiExternalLink />,
    githublink:"https://github.com/shanoo7/namrataUniversal",
    livelink:"https://namrata-universal-two.vercel.app/",
  },
];

  return (
    <>
      <section  name="Portfolio" className='mt-10 m-auto  min-h-screen'>
      <div className="w-full text-center">
      <h1 data-aos="zoom-out" className="text-3xl md:text-4xl font-bold text-white my-5">
            Portfolio
          </h1>
          <h2 data-aos="zoom-out" className="text-sm md:text-md text-gray-400">
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
                <a className='relative'>
                  <h5 className="text-xl  font-semibold tracking-tight text-gray-900 dark:text-white">
                    {card.title}
                  </h5>
                  <div className="absolute top-0 right-10 rounded-full bg-gray-600 text-gray-200 w-6 h-6 text-center text-xs flex items-center justify-center">
                  <a href={card.githublink}>{card.github}</a>
            </div>
            <div className="absolute top-0 right-0 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center text-xs flex items-center justify-center">
              <a href={card.livelink}>{card.live}</a>
            </div>
                </a>
                <p className="antialiased text-gray-600 dark:text-gray-400 text-sm mt-3 break-all">
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

