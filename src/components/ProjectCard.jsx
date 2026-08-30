import React, { useState } from 'react';

export default function ProjectCard({ project }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const currentImg = project.images[activeImgIndex] || project.images[0];

  return (
    <div className="bg-white border border-brand-gray-200 rounded-brand-lg overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Main Image */}
      <div className="relative w-full h-72 sm:h-80 bg-brand-gray-100 overflow-hidden">
        <img
          src={currentImg.src}
          alt={currentImg.alt || project.title}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail Bar (if multiple images) */}
      {project.images.length > 1 && (
        <div className="flex gap-2.5 px-5 py-3 bg-brand-off border-b border-brand-gray-200 overflow-x-auto no-scrollbar">
          {project.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImgIndex(idx)}
              className={`relative flex-none w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-200 focus:outline-none ${
                activeImgIndex === idx
                  ? 'border-maroon opacity-100 scale-105 shadow-sm'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.alt || ''} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-heading font-bold text-xl text-brand-black mb-2.5">
            {project.title}
          </h3>
          <p className="text-brand-gray-600 text-sm sm:text-base leading-relaxed mb-0">
            {project.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
