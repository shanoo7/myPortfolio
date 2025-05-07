import React from 'react';

function About() {
  return (
    <>
      <div name="About" className="max-w-screen-2xl container m-auto mb-10 px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-500 mb-8">About Me</h2>
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Section - Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="myPic.jpg"
              alt="About me"
              className="rounded-lg shadow-2xl shadow-red-500 hover:shadow-red-200 w-64 h-64 object-cover"
            />
          </div>
          {/* Right Section - Content */}
          <div className="md:w-2/3">
          <p className="text-gray-500 text-lg leading-relaxed animate-spin">
              Hi! I'm <span className="font-bold text-gray-400">Shummy Ranjan Shanoo</span>, a passionate developer transitioning into software development. I have a B.Tech degree in Mechanical Engineering, which I completed in 2017. Recently, I completed a Full Stack Web Development course at Edureka, where I gained hands-on experience with technologies such as HTML, CSS, JavaScript, React, and Node.js.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mt-4">
              I also did an unpaid internship with <span className="font-bold text-gray-400" >The Entrepreneurship Network</span>, where I worked on real-world projects. This allowed me to practically apply my skills and gain confidence in building websites and applications. My goal is to continue growing as a developer and contribute to impactful projects.
            </p>
            <h3 className="text-xl font-semibold text-gray-500 mt-6">Skills:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 text-gray-500">
              {/* List of Skills */}
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span>JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                <span>React.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span>Node.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-indigo-500 rounded-full"></span>
                <span>Express.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-teal-500 rounded-full"></span>
                <span>MongoDB</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-gray-500 rounded-full"></span>
                <span>Git & GitHub</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-purple-600 rounded-full"></span>
                <span>Redux</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
                <span>REST APIs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                <span>CSS / Tailwind CSS</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                <span>DOM Manipulation</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-600 rounded-full"></span>
                <span>Async JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-600 rounded-full"></span>
                <span>Mongoose</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-purple-700 rounded-full"></span>
                <span>CRUD Operations</span>
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-500 mt-6">Education:</h3>
            <ul className="list-disc pl-5 text-gray-500 mt-4">
              <li><strong>B Tech</strong> | Eastern Academy of Science & Technology, Phulnakhra, Odisha, CGPA: 7.26 (2017)</li>
              <li><strong>XII (BSEB)</strong> | ABS, Bihar, Percentage: 73.6% (2013)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
