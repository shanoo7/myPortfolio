
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  const experienceList = [
    {
      role: 'Junior React.js Developer',
      company: 'The Entrepreneurship Network (Limitless Technologies LLP)',
      period: "Mar '11 - Sep '11",
      type: 'Unpaid (6 months)',
      focus: 'Digital Marketing',
      responsibilities: [
        'Created reusable React components from HTML themes.',
        'Implemented navigation using React Router.',
        'Managed complex states using Redux.',
        'Styled projects with Bootstrap and Tailwind CSS.',
      ],
    },
  ];

  return (
    <section
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-10 min-h-screen bg-gray-50"
    >
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Experience</h2>
        <p className="text-gray-400">My professional journey and internship highlights</p>
      </div>

      <div className="relative border-l-4 border-violet-500 ml-4">
        {experienceList.map((exp, index) => (
          <div
            key={index}
            className="mb-10 ml-6 p-6 bg-white duration-300 relative"
          >
            <div className="absolute -left-5 top-6 w-10 h-10 bg-violet-500  flex items-center justify-center rounded-full shadow-lg">
              <FaBriefcase className="text-lg" />
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-1">
              {exp.focus} - {exp.role}
            </h3>
            <p className="text-gray-600 font-medium">{exp.company}</p>
            <p className="text-sm text-gray-400 mb-3">{exp.period}</p>

            <div>
              <p className="text-gray-600 mb-2">Key Responsibilities:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-500 italic mt-4">Internship Type: {exp.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
