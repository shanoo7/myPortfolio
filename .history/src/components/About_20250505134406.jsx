// import React from 'react';

// function About() {
//   return (
//     <>
//       <div name="About" className="max-w-screen-2xl container m-auto mb-10 px-4 md:px-20 min-h-screen">
//         <h2 className="text-3xl text-center font-bold text-white mb-8">About Me</h2>
//         <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
//           {/* Left Section - Image */}
//           <div className="md:w-1/3 flex justify-center">
//             <img
//               src="myPic.jpg"
//               alt="About me"
//               className="rounded-lg shadow-2xl shadow-red-500 hover:shadow-red-200 w-64 h-64 object-cover"
//             />
//           </div>
//           {/* Right Section - Content */}
//           <div className="md:w-2/3">
//           <p className="text-white text-lg leading-relaxed">
//           Hi! I am Shummy Ranjan Shanoo, and I am a passionate developer seeking to transition my career into software development. I hold a B.Tech in Mechanical Engineering, which I graduated with in 2017. I have just finished an Edureka Full Stack Web Development program, in which I have practical experience using technologies like HTML, CSS, JavaScript, React, and Node.js.

//             </p>
//             <p className="text-white text-lg leading-relaxed mt-4">
//             I also did an unpaid internship with The Entrepreneurship Network and finished real projects. I was able to apply my skills and was confident of making websites and apps. I want to continue working on enhancing and contributing to my projects.
//             </p>
//             <h3 className="text-xl font-semibold text-white mt-6">Skills:</h3>
//             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-white animate-pulse">
//               {/* List of Skills */}
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
//                 <span>JavaScript</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
//                 <span>React.js</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-green-500 rounded-full"></span>
//                 <span>Node.js</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-indigo-500 rounded-full"></span>
//                 <span>Express.js</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-teal-500 rounded-full"></span>
//                 <span>MongoDB</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
//                 <span>Git & GitHub</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-purple-600 rounded-full"></span>
//                 <span>Redux</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
//                 <span>REST APIs</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
//                 <span>CSS / Tailwind CSS</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-red-500 rounded-full"></span>
//                 <span>DOM Manipulation</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-yellow-600 rounded-full"></span>
//                 <span>Async JavaScript</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-green-600 rounded-full"></span>
//                 <span>Mongoose</span>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <span className="w-4 h-4 bg-purple-700 rounded-full"></span>
//                 <span>CRUD Operations</span>
//               </li>
//             </ul>
//             <h3 className="text-xl font-semibold text-white mt-6">Education:</h3>
//             <ul className="list-disc pl-5 text-white mt-4">
//               <li><strong>B Tech</strong> | Eastern Academy of Science & Technology, Phulnakhra, Odisha, CGPA: 7.26 (2017)</li>
//               <li><strong>XII (BSEB)</strong> | ABS, Bihar, Percentage: 73.6% (2013)</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default About;


import React from "react";
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiExpress, SiPostman } from "react-icons/si";
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

          {/* Skills Grid */}
          {/* <div>
            <h3 className="text-xl font-semibold text-white mb-3">Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-white text-sm">
              {[
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Git & GitHub",
                "Redux",
                "REST APIs",
                "Tailwind CSS",
                "CSS / HTML",
                "Async JavaScript",
                "CRUD Operations",
                "Mongoose",
                "DOM Manipulation",
              ].map((skill) => (
                <li key={skill} className="bg-white border border-gray-200 px-3 py-1 rounded shadow-sm">
                  {skill}
                </li>
              ))}
            </ul>
          </div> */}


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

export default AboutMe;














//  {/* Social Icons */}
//  <div className="mt-6 flex lg:justify-start gap-4">
//  <a
//    to={"#"}
//    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-white hover:bg-gray-700 hover:w-32 transition-all overflow-hidden"
//  >
//    <span className="hidden group-hover:inline whitespace-nowrap mr-2">GitHub</span>
//    <FaGithub />
//  </a>

//  <a
//    to={"https://www.aedin.com/company/namrata-universal/"}
//    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-white hover:bg-[#0077b5] hover:w-36 transition-all overflow-hidden"
//  >
//    <span className="hidden group-hover:inline whitespace-nowrap mr-2">aedIn</span>
//    <FaGithub />
//  </a>

//  <a
//    to={"https://www.facebook.com/namratauniversal01/"}
//    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white hover:bg-[#1877f2] hover:w-36 transition-all overflow-hidden"
//  >
//    <span className="hidden group-hover:inline whitespace-nowrap mr-2">Facebook</span>
//    <FaFacebook />
//  </a>

//  <a
//    to={"https://www.youtube.com/channel/UCGXSQ12i8BZW1D-rDlAKDCQ"}
//    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white hover:bg-[#ff0000] hover:w-36 transition-all overflow-hidden"
//  >
//    <span className="hidden group-hover:inline whitespace-nowrap mr-2">YouTube</span>
//    <FaYoutube />
//  </a>
// </div>
