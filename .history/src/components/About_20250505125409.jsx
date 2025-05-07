// import React from 'react';

// function About() {
//   return (
//     <>
//       <div name="About" className="max-w-screen-2xl container m-auto mb-10 px-4 md:px-20 min-h-screen">
//         <h2 className="text-3xl text-center font-bold text-gray-300 mb-8">About Me</h2>
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
//           <p className="text-gray-300 text-lg leading-relaxed">
//           Hi! I am Shummy Ranjan Shanoo, and I am a passionate developer seeking to transition my career into software development. I hold a B.Tech in Mechanical Engineering, which I graduated with in 2017. I have just finished an Edureka Full Stack Web Development program, in which I have practical experience using technologies like HTML, CSS, JavaScript, React, and Node.js.

//             </p>
//             <p className="text-gray-300 text-lg leading-relaxed mt-4">
//             I also did an unpaid internship with The Entrepreneurship Network and finished real projects. I was able to apply my skills and was confident of making websites and apps. I want to continue working on enhancing and contributing to my projects.
//             </p>
//             <h3 className="text-xl font-semibold text-gray-300 mt-6">Skills:</h3>
//             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-gray-300 animate-pulse">
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
//             <h3 className="text-xl font-semibold text-gray-300 mt-6">Education:</h3>
//             <ul className="list-disc pl-5 text-gray-300 mt-4">
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

const AboutMe = () => {
  return (
    <section className=" w-full px-4 md:px-12 lg:px-24">
      <div className="w-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/5473957/pexels-photo-5473957.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Developer working"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="">
          
          <p className="text-gray-700 mb-4 leading-relaxed">
            Hi! I'm <strong>Shummy Ranjan Shanoo</strong>, a passionate and self-driven developer
            transitioning from a background in Mechanical Engineering to a full-time software development career.
            I graduated with a <strong>B.Tech in Mechanical Engineering in 2017</strong> and recently completed a
            <strong> Full Stack Web Development program</strong> from Edureka.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            I gained hands-on experience with modern technologies like <strong>HTML, CSS, JavaScript, React, and Node.js</strong>.
            During my internship with <strong>The Entrepreneurship Network</strong>, I worked on real-world projects and gained
            the confidence to build functional websites and apps. I’m driven by curiosity and enjoy solving problems through code.
          </p>

          <p className="text-gray-700 mb-6 leading-relaxed">
            I am now actively looking for opportunities to collaborate on innovative projects and grow as a full stack developer.
          </p>

          {/* Skills Grid */}
          {/* <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 text-sm">
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
