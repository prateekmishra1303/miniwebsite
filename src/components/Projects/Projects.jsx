import React from 'react';

const projects = [
  {
    title: 'YouTube Clone',
    description: 'A YouTube-like platform using HTML, CSS, JavaScript. Includes video listing, individual video pages, and authentication.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/prateekmishra1303/Youtube',
    demo: 'https://videostraming1303.netlify.app/',
  },
  {
    title: 'Hotstar Clone',
    description: 'A fully responsive clone of Disney+ Hotstar built using HTML, CSS, and JavaScript. Features include a sliding banner, interactive UI, and movie card sections mimicking the real Hotstar experience.',
    tech: ['Python', 'PubMed API', 'Poetry'],
    github: 'https://github.com/prateekmishra1303/Hoststar',
    demo: 'https://hoststar.netlify.app/',
  },
  {
    title: 'Instagram Clone',
    description: 'A minimal front-end clone of Instagram built with React and CSS Modules. Includes login/signup forms, profile view, and a post feed layout similar to the original Instagram UI.',
    tech: ['PHP', 'WordPress', 'WooCommerce'],
    github: 'https://github.com/prateekmishra1303/instagram',
    demo: 'https://insta-clone-sw-1303.netlify.app/',
  },
  {
    title: 'Todo List Website',
    description: ' A dynamic to-do list app built using HTML, CSS, and JavaScript, focusing on task creation, deletion, and storage using localStorage for persistence across sessions.',
    tech: ['PHP', 'WordPress', 'WooCommerce'],
    github: 'https://github.com/prateekmishra1303/Todo-Website',
    demo: 'https://todo-website1303.netlify.app/',
  },
  {
    title: 'Tic-Tac-toe Game',
    description: ' A classic Tic-Tac-Toe game built in JavaScript with intuitive UI and win-draw logic. Designed for two players, it resets automatically after the game ends.',
    tech: ['PHP', 'WordPress', 'WooCommerce'],
    github: 'https://github.com/prateekmishra1303/tic-tac-toe',
    demo: 'https://tic-tac-toe-mark07.netlify.app/',
  },
];

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-[#76B900]">Projects</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-2xl border border-black hover:border-[#76B900] hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-sm text-gray-600 mb-3">{project.description}</p>
            <div className="text-xs text-gray-500 mb-3">
              <strong>Tech:</strong> {project.tech.join(', ')}
            </div>
            <div className="flex space-x-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}