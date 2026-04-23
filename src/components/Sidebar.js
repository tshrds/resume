import React from 'react';

const Sidebar = () => {
  return (
    <aside className="lg:col-span-4 space-y-6">
      <div className="section-card text-center lg:text-left p-6">
        <h1 className="text-3xl font-bold text-slate-900">TUSHAR DAS</h1>
        <p className="text-blue-600 font-semibold tracking-wide mt-1 uppercase text-sm">Software Engineer</p>
        
        <div className="mt-6 space-y-3 text-sm text-slate-600">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Bengaluru, India
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            +91-7209748142
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            tushar.das@outlook.in
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            tshrds
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
            profile.wandererdroid.in
          </div>
        </div>
      </div>

      <div className="section-card p-6">
        <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-4">
          <i className="fa-solid fa-bolt text-yellow-500 mr-2"></i> EXPERTISE
        </h3>
        <div className="space-y-4">
          <SkillGroup title="Languages" skills={['Java/J2EE', 'Javascript', 'Python']} colorClass="text-blue-700" />
          <SkillGroup title="Databases" skills={['RDBMS', 'MongoDB', 'Neo4J', 'Snowflake']} colorClass="text-green-700" />
          <SkillGroup title="Frameworks" skills={['Spring Boot', 'Spring Webflux', 'Hibernate', 'Mockito', 'FastAPI']} colorClass="text-orange-700" />
          <SkillGroup title="Architecture" skills={['Microservices', 'Event-Driven', 'DDD / Clean Architecture', 'System Design (HLD/LLD)']} colorClass="text-purple-700" />
          <SkillGroup title="Cloud & Tools" skills={['Github-Copilot', 'AWS', 'Azure', 'Jenkins', 'Grafana', 'Databricks', 'NiFi', 'Qlik Sense', 'Metabase']} colorClass="text-slate-700" />
        </div>
      </div>

      <div className="section-card p-6">
        <h3 className="text-lg font-bold text-slate-900 border-b pb-2 mb-4">EDUCATION</h3>
        <p className="font-bold text-slate-800 text-sm">B.Tech in CS & Technology</p>
        <p className="text-slate-600 text-xs">West Bengal University of Technology</p>
        <p className="text-slate-500 text-xs mt-1 italic">2011 - 2015</p>
      </div>
    </aside>
  );
};

const SkillGroup = ({ title, skills, colorClass }) => (
  <div>
    <p className="text-xs font-bold text-slate-400 uppercase mb-2">{title}</p>
    <div className="flex flex-wrap -m-1">
      {skills.map(skill => (
        <span key={skill} className={`skill-tag ${colorClass}`}>{skill}</span>
      ))}
    </div>
  </div>
);

export default Sidebar;
