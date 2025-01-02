// import React from 'react'

// function Experiance() {
//   return (
//     <>
//     <div className='max-w-screen-2xl container py-4  m-auto px-4 md:px-20'>
//       <h1>experiance</h1>
//       </div>
//     </>
//   )
// }

// export default Experiance

import React from 'react';

function Experience() {
  return (
<>
      <div name="Experiance" className="max-w-screen-2xl container m-auto mb-10 px-4 md:px-20 min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Digital Marketing - Junior React.js Developer
            </h3>
            <p className="text-gray-600 font-medium">
              The Entrepreneurship Network (Limitless Technologies LLP)
            </p>
            <p className="text-sm text-gray-500">Mar '11 - Sep '11</p>
          </div>
          <div>
            <p className="text-gray-700">
              Worked as a front-end developer. Key responsibilities included:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              <li>Created reusable React components from HTML themes.</li>
              <li>Implemented navigation using React Router.</li>
              <li>Managed complex states using Redux.</li>
              <li>Styled projects with Bootstrap and Tailwind CSS.</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600 italic">Internship Type: Unpaid (6 months)</p>
        </div>
      </div>
      </>
  );
}

export default Experience;

