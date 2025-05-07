import React from "react";
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiPostman } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsFillDatabaseFill } from "react-icons/bs";

const AboutMe = () => {
  return (
    <section className="w-full">
      <div className="w-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-20">
            About Me
          </h2>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 ">
        {/* Image Section */}
        <div className="flex items-center">
          <img
            src="https://images.pexels.com/photos/5198392/pexels-photo-5198392.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="Developer working"
            className="rounded shadow-lg w-full max-w-2xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="">
          <p className="text-white mb-4 leading-relaxed">
          Hello! I am <strong>Shummy Ranjan Shanoo</strong>, a passionate and self-motivated coder shifting from the Mechanical Engineering field to a professional software development career. I graduated with a <strong>B.Tech in Mechanical Engineering in 2017</strong> and have recently done a <strong> Full Stack Web Development program</strong>  from Edureka.
          </p>

          <p className="text-white mb-4 leading-relaxed">
          I got hands-on experience with new technologies such as <strong>HTML, CSS, JavaScript, React, Node.js and MongoDb</strong>. Under the internship at <strong>The Entrepreneurship Network</strong>, I built real-world projects and was able to develop functional websites and applications. I am curious and have fun solving problems with code.
          </p>

          <p className="text-white mb-6 leading-relaxed">
          I am currently actively searching for chances to work on innovative projects and develop as a full-stack developer.

          </p>

          <div>
          <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
          

 {/* Social Icons */}
 <div className="mt-6 flex flex-wrap lg:justify-start gap-4">
      {/* JavaScript */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-black hover:bg-yellow-500 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">JavaScript</span>
        <DiJavascript1 />
      </a>

      {/* React */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">React.js</span>
        <FaReact />
      </a>

      {/* Node.js */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-white hover:bg-green-800 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">Node.js</span>
        <FaNodeJs />
      </a>

      {/* Express.js */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-700 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">Express.js</span>
        <SiExpress />
      </a>

      {/* MongoDB */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">MongoDB</span>
        <SiMongodb />
      </a>

      {/* GitHub */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">GitHub</span>
        <FaGithub />
      </a>

      {/* Redux */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">Redux</span>
        <FaGithub />
      </a>

      {/* Tailwind CSS */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-white hover:bg-cyan-600 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">Tailwind CSS</span>
        <SiTailwindcss />
      </a>

      {/* HTML / CSS */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white hover:bg-orange-700 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">HTML</span>
        <FaHtml5 />
      </a>

      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">CSS</span>
        <FaCss3Alt />
      </a>

      {/* Git */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">Git</span>
        <FaGitAlt />
      </a>

      {/* Postman / REST APIs */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-400 text-white hover:bg-orange-500 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">REST APIs</span>
        <SiPostman />
      </a>

      {/* CRUD / Mongoose / DOM / Async JS */}
      <a
        href="#"
        className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-white hover:bg-teal-800 hover:w-36 transition-all overflow-hidden"
      >
        <span className="hidden group-hover:inline whitespace-nowrap mr-2">CRUD</span>
        <BsFillDatabaseFill />
      </a>
    </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe

