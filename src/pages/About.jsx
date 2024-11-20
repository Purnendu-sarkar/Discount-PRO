import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up">
              {/* Cover Image */}
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2000&q=80)',
                }}
              />
  
              {/* Profile Content */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">About the Developer</h1>
                  <p className="text-gray-600">
                    Full Stack Developer | React Specialist | Open Source Contributor
                  </p>
                </div>
  
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">About Me</h2>
                    <p className="text-gray-600">
                      I'm a passionate developer focused on creating intuitive and efficient web
                      applications. With expertise in modern web technologies, I strive to deliver
                      high-quality solutions that make a difference.
                    </p>
                  </div>
  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {['', 'React', 'TypeScript', 'Node.js', 'Firebase', 'Tailwind CSS', 'MongoDB', ''].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Other Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <a
                        href="#"
                        className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors"
                      >
                        <h3 className="font-medium mb-2">Project 1</h3>
                        <p className="text-sm text-gray-600">
                          Another interesting project.
                        </p>
                      </a>
                      <a
                        href="#"
                        className="block p-4 border border-gray-200 rounded-lg hover:border-indigo-500 transition-colors"
                      >
                        <h3 className="font-medium mb-2">Project 2</h3>
                        <p className="text-sm text-gray-600">
                          Another notable project.
                        </p>
                      </a>
                    </div>
                  </div>
  
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Connect With Me</h2>
                    <div className="flex justify-center space-x-6">
                      <a
                        href="https://github.com/Purnendu-sarkar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/purnendu-sarkar-203b24332/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a
                        href="mailto:hellopurnendusarkar590@gmail.com"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <Mail className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;