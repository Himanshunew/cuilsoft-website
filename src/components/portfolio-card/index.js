import React from "react";
import { ExternalLink, Github, Code } from "lucide-react";
import { portfolioData } from "../../constants/portfolioData"; // Adjust path as needed

export default function PortfolioCard({ activeTab, tabs }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {tabs.find((tab) => tab.id === activeTab)?.label} Portfolio
        </h2>
        <span className="text-sm text-gray-500">
          {portfolioData[activeTab]?.length || 0} Projects
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-500">
        {portfolioData[activeTab]?.map((project, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-secondary text-white text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveLink}
                  className="flex items-center gap-1 text-secondary transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  className="flex items-center gap-1 text-gray-500 hover:text-gray-600 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {portfolioData[activeTab]?.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Code className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
          <p className="text-gray-500">Projects in this category are coming soon!</p>
        </div>
      )}
    </div>
  );
}
