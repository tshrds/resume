import React from 'react';

const Highlights = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="section-card p-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="fa-solid fa-trophy text-yellow-500"></i> Recognition
        </h2>
        <ul className="text-sm text-slate-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Customer Focus Champion</strong> Award at BayOne (Albertsons)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Gem Award</strong> for outstanding platform contribution at Calibo</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span>Multiple <strong>Inspire & Integrity</strong> Awards at Altimetrik</span>
          </li>
        </ul>
      </div>
      <div className="section-card p-6">
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <i className="fa-solid fa-earth-americas text-blue-500"></i> Highlights
        </h2>
        <ul className="text-sm text-slate-600 space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>International:</strong> Visited Uruguay for strategy meets & peer-programming</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Innovation:</strong> Winner of College Hackathon for Organ Donation App</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Tech-Savvy:</strong> Early adopter of AI tools (GitHub Copilot) for architecture</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Highlights;
