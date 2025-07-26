import React from 'react'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

export default function Skills() {
    return (
 <div id="skills" className="py-16 min-h-[80vh] bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Skills</h2>

        {/* Card Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Frontend Card */}
          <div
            className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 border border-gray-200 text-center 
                        hover:scale-105 hover:shadow-2xl hover:border-blue-500 transition-transform duration-300 ease-in-out cursor-pointer group">
                <FaCode
                    className="text-blue-600 mx-auto mb-4 group-hover:rotate-[6deg] group-hover:scale-110 transition-transform duration-300"
                    size={40} />
                <h3 className="text-xl font-bold mb-2 tracking-wide text-gray-800 group-hover:text-blue-700 transition-colors">
                    Frontend
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                    React, HTML, CSS, JavaScript, Tailwind, Redux
                </p>
            </div>

          {/* Backend Card */}
          <div
            className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 border border-gray-200 text-center 
                      hover:scale-105 hover:shadow-2xl hover:border-blue-500 transition-transform duration-300 ease-in-out cursor-pointer group">
            <FaServer className="text-green-600 mx-auto mb-4 group-hover:rotate-[6deg] group-hover:scale-110 transition-transform duration-300" size={40} />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p>Java, Spring Boot, REST APIs</p>
          </div>

          {/* Database Card */}
          <div
            className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 border border-gray-200 text-center 
                      hover:scale-105 hover:shadow-2xl hover:border-blue-500 transition-transform duration-300 ease-in-out cursor-pointer group">
            <FaDatabase className="text-yellow-600 mx-auto mb-4 group-hover:rotate-[6deg] group-hover:scale-110 transition-transform duration-300" size={40} />
            <h3 className="text-xl font-semibold mb-2">Database</h3>
            <p>MySQL, PostgreSQL</p>
          </div>

          {/* Tools Card */}
          <div
            className="bg-gradient-to-br from-white to-gray-100 shadow-lg rounded-2xl p-6 border border-gray-200 text-center 
                       hover:scale-105 hover:shadow-2xl hover:border-blue-500 transition-transform duration-300 ease-in-out cursor-pointer group">
            <FaTools className="text-purple-600 mx-auto mb-4 group-hover:rotate-[6deg] group-hover:scale-110 transition-transform duration-300" size={40} />
            <h3 className="text-xl font-semibold mb-2">Tools</h3>
            <p>Git, VSCode, Eclipse, npm (basics), Linux</p>
          </div>

        </div>
      </div>
    </div>
    );
}