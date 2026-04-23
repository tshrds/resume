import React from 'react';

const Profile = () => (
  <section className="section-card p-6">
    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      PROFILE
    </h2>
    <p className="text-slate-600 leading-relaxed">
      Back-end engineer specializing in building end-to-end applications with <strong>10+ years</strong> of relevant IT experience. Expert in architecting scalable distributed systems using <strong>Java/Spring Boot</strong> and <strong>Cloud-native patterns (AWS)</strong>. Proven expertise in leading digital transformation across Pharmaceuticals, Consumer Staple, HRMS, Tech-Ed, and BFSI sectors.
    </p>
  </section>
);

export default Profile;
