import React from 'react';

function Experience() {
  return (
    <>
      <div name="Experience" className="max-w-screen-2xl container m-auto mb-10 px-4 md:px-20 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold  mb-2">Experience</h2>
        <p className="text-gray-4y00">My professional journey and internship highlights</p>
      </div>

        <div className="space-y-6">
          {/* Experience Card */}
          <div className=" rounded-lg shadow-lg shadow-red-500 p-6 transform transition-all hover:cursor-pointer hover:shadow-2xl hover:shadow-red-200 duration-300">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-500 mb-2 hover:text-pink-500 cursor-pointer transition-colors">
                  Digital Marketing - Junior React.js Developer
                </h3>
                <p className="text-gray-600 font-medium mb-2">
                  The Entrepreneurship Network (Limitless Technologies LLP)
                </p>
                <p className="text-sm text-gray-500">Mar '11 - Sep '11</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-500 mb-2">
                Worked as a front-end developer. Key responsibilities included:
              </p>
              <ul className="list-disc list-inside text-gray-500 space-y-2">
                <li>Created reusable React components from HTML themes.</li>
                <li>Implemented navigation using React Router.</li>
                <li>Managed complex states using Redux.</li>
                <li>Styled projects with Bootstrap and Tailwind CSS.</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 italic mt-4">Internship Type: Unpaid (6 months)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;


