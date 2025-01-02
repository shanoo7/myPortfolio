import React from 'react';

function About() {
  return (
  <>
      <div name="About" className="max-w-screen-2xl container m-auto mb-10 px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="md:flex items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Section - Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="myPic.jpg" // Replace this with your image URL
              alt="About me"
              className="rounded-lg shadow-lg w-64 h-64 object-cover"
            />
          </div>
          {/* Right Section - Content */}
          <div className="md:w-2/3">
            <p className="text-gray-700 text-lg leading-relaxed">
              Hi! I'm <span className="font-bold text-gray-900">[Your Name]</span>, a passionate developer with a love for creating elegant solutions to complex problems.
              I specialize in [mention your expertise, e.g., full-stack web development, UI/UX design], and I enjoy learning new technologies and applying them in meaningful ways.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              When I'm not coding, you can find me [add a personal touch, e.g., exploring nature, playing video games, or reading a good book].
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Skills:</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span>JavaScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                <span>React</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-purple-500 rounded-full"></span>
                <span>Node.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span>CSS/Tailwind</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                <span>MongoDB</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-teal-500 rounded-full"></span>
                <span>Git & GitHub</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </>
  );
}

export default About;
