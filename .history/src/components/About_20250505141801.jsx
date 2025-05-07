import React from "react";
import { FaGithub, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiPostman } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsFillDatabaseFill } from "react-icons/bs";
import { TbBrandRedux } from "react-icons/tb";

const AboutMe = () => {
  return (
    <section className="w-full px-10">
      <div className="w-full text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-20">
            About Me
          </h2>
      </div>
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {/* Image Section */}
        <div className="flex">
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
      <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* JavaScript */}
        <SkillIcon label="JavaScript" bgColor="bg-yellow-400" icon={<DiJavascript1 />} />

        {/* React */}
        <SkillIcon label="React.js" bgColor="bg-sky-500" icon={<FaReact />} />

        {/* Node.js */}
        <SkillIcon label="Node.js" bgColor="bg-green-700" icon={<FaNodeJs />} />

        {/* Express.js */}
        <SkillIcon label="Express.js" bgColor="bg-gray-900" icon={<SiExpress />} />

        {/* MongoDB */}
        <SkillIcon label="MongoDB" bgColor="bg-green-500" icon={<SiMongodb />} />

        {/* GitHub */}
        <SkillIcon label="GitHub" bgColor="bg-black" icon={<FaGithub />} />

        {/* Redux */}
        <SkillIcon label="Redux" bgColor="bg-purple-600" icon={<TbBrandRedux />} />

        {/* Tailwind CSS */}
        <SkillIcon label="Tailwind CSS" bgColor="bg-cyan-500" icon={<SiTailwindcss />} />

        {/* HTML */}
        <SkillIcon label="HTML" bgColor="bg-orange-600" icon={<FaHtml5 />} />

        {/* CSS */}
        <SkillIcon label="CSS" bgColor="bg-blue-600" icon={<FaCss3Alt />} />

        {/* Git */}
        <SkillIcon label="Git" bgColor="bg-orange-500" icon={<FaGitAlt />} />

        {/* REST APIs */}
        <SkillIcon label="REST APIs" bgColor="bg-orange-400" icon={<SiPostman />} />

        {/* CRUD */}
        <SkillIcon label="CRUD" bgColor="bg-teal-700" icon={<BsFillDatabaseFill />} />
      </div>
    </div>

         
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

const SkillIcon = ({ label, bgColor, icon }) => {
  return (
    <a
      href="#"
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full ${bgColor} text-white hover:w-36 transition-all overflow-hidden`}
    >
      <span className="hidden group-hover:inline whitespace-nowrap mr-2 text-sm">{label}</span>
      <span className="text-lg">{icon}</span>
    </a>
  );
};

