import * as React from 'react';
import { FaCode, FaPlay } from 'react-icons/fa';

function MoreProjectCard({ project }) {
  return (
    <div className="relative border border-[#1b2c68a0] rounded-lg bg-[#0a0d37] hover:bg-[#0f1642] transition-colors duration-300 w-full h-full p-6 flex flex-col shadow-[0_0_15px_0_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_0_rgba(0,0,0,0.5)]">
      <div className="flex flex-col flex-grow">
        <h3 className="text-[#16f2b3] text-xl font-bold mb-3">{project.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
      </div>
      
      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tools.slice(0, 4).map((tool, index) => (
            <span key={index} className="text-xs bg-[#1a1443] text-[#16f2b3] px-2 py-1 rounded-md">
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="text-xs bg-[#1a1443] text-gray-400 px-2 py-1 rounded-md">
              +{project.tools.length - 4}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4 border-t border-[#1b2c68a0] pt-4 mt-2">
          {project.code ? (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-pink-500 hover:text-pink-400 transition-colors">
              <FaCode size={16} /> Code
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-amber-300 hover:text-amber-200 transition-colors">
              <FaPlay size={14} /> Live Demo
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default MoreProjectCard;
