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

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-32">
      {/* Image at Top */}
      <div className="flex justify-center mb-10">
        <img
          src="https://images.pexels.com/photos/12899121/pexels-photo-12899121.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Developer at work"
          className="rounded-xl shadow-xl w-full max-w-md object-cover"
        />
      </div>

      {/* About Me Text */}
      <div className="text-center mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 text-lg mb-4">
          Hi! I'm <strong>Shummy Ranjan Shanoo</strong>, a passionate developer making the leap from
          Mechanical Engineering into the world of software development. I hold a <strong>B.Tech in Mechanical Engineering</strong>
          (2017), and recently completed a comprehensive <strong>Full Stack Web Development program</strong> at Edureka.
        </p>

        <p className="text-gray-600 text-lg mb-4">
          My journey has involved building real-world projects, mastering tools like <strong>React, Node.js, and MongoDB</strong>,
          and contributing through an internship at <strong>The Entrepreneurship Network</strong>. I thrive on challenges and love
          transforming ideas into user-friendly web apps.
        </p>

        <p className="text-gray-600 text-lg mb-6">
          I’m now excited to grow as a full stack developer, collaborate with passionate teams, and build meaningful products.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-5 text-center">Tech Stack & Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-center">
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
            "HTML / CSS",
            "Async JS",
            "CRUD Operations",
            "Mongoose",
            "DOM Manipulation",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-100 rounded-md shadow-sm py-2 px-3 text-gray-700 hover:bg-gray-200 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

