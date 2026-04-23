import React from 'react';

const Experience = () => {
  return (
    <section className="section-card p-6">
      <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        WORK EXPERIENCE
      </h2>

      <div className="space-y-8">
        <ExperienceItem 
          title="Senior Java Fullstack Developer"
          company="BayOne Techno Advisors,Pvt Ltd"
          period="Oct 2024 – Apr 2026"
          client="Albertsons Companies, Inc."
          description="State-of-the-art platform catering to individual needs through Deep Learning to provide a personalized shopping experience."
          achievements={[
            "Developed a <strong>dynamic configuration engine</strong> that leverages RESTful APIs to deliver real-time personalized product recommendations based on historical consumer data, enhancing user engagement.",
            "Leading <strong>System Design</strong> for low-latency REST endpoints to serve personalized content flows.",
            "Designed and developed <strong>model-serving APIs</strong> using <strong>Spring and FastAPI</strong> microservices to optimize <strong>distributed system</strong> response times.",
            "Enabled <strong>A/B experimentation</strong> via configuration-driven platform supporting dynamic model strategies, segmentation, and campaign execution.",
            "Introduced <strong>Prometheus</strong> configurations to track performance metrics, visualized through <strong>Grafana</strong> dashboards."
          ]}
        />

        <ExperienceItem 
          title="Product Development Engineer II"
          company="Calibo India Pvt Ltd"
          period="Apr 2021 – Oct 2024"
          project="LAZSA Platform (PPaaS Architecture)"
          description="Orchestrating data-innovation journeys through unified digital solutions."
          achievements={[
            "Engineered robust <strong>NiFi Data Pipelines</strong> for real-time Kafka, Snowflake, Hadoop, and MySQL integrations.",
            "Containerized <strong>Metabase</strong> and <strong>Open-Refine</strong> using Docker for scalable visualization and data transformation.",
            "Implemented <strong>AWS S3</strong> integration using SDK and high-impact analytics using <strong>Qlik-Sense</strong>.",
            "Developed <strong>Python</strong> wheel packages and notebook templates for Databricks and Kinesis Stream processing.",
            "Enhanced application security posture by neutralizing high-risk vulnerabilities via automated <strong>Snyk</strong> audits."
          ]}
        />

        <div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 uppercase">Senior Engineer</h3>
              <p className="text-blue-600 font-medium">Altimetrik India Pvt Ltd | <span className="text-slate-500">July 2015 – Mar 2021</span></p>
            </div>
          </div>
          
          <div className="space-y-6 mt-4">
            <SubProject 
              title="Integrated Business Development Platform (BDP)"
              description="Low Code/No Code platform for Developer Productivity."
              achievements={[
                "Worked on Agile Integration using JIRA and Trello APIs.",
                "Integrated Metabase and Qlik Sense for dashboard visualization.",
                "Developed DevOps pipelines using Jenkins CI/CD and deployed microservices in EKS Clusters."
              ]}
            />
            <SubProject 
              title="Playground (HRMS)"
              description="Talent grooming and transformational initiative platform."
              achievements={[
                "Created orchestration layers in Node.js to bridge UI and backend services.",
                "Integrated AWS SDK and SDFC Sandbox APIs for cloud workspace management.",
                "Optimized developer productivity by provisioning cloud-based workspaces using AWS Workspaces and Eclipse CHE, reducing local hardware dependency."
              ]}
            />
            <SubProject 
              title="Platform-API E&M (RESTful Services)"
              description="Microservices architecture with Spring Boot & Neo4j."
              achievements={[
                "Integrated Phabricator for Git functionalities.",
                "Built components with Spring Boot microservices and Neo4j Graph DB."
              ]}
            />
            <SubProject 
              title="AltiFin - Paysa (BFSI Remittance)"
              description="Remittance application for rural populations."
              achievements={[
                "Integrated with RBL and Axis Bank APIs for fund transfers.",
                "Developed Angular components for interaction with REST services."
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, company, period, client, project, description, achievements }) => (
  <div className="mb-8">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h3 className="text-lg font-bold text-slate-900 uppercase">{title}</h3>
        <p className="text-blue-600 font-medium">{company} | <span className="text-slate-500">{period}</span></p>
      </div>
    </div>
    <div className="experience-border mt-4">
      {client && <p className="text-sm font-semibold text-slate-700">Client: {client}</p>}
      {project && <p className="text-sm font-semibold text-slate-700">Project: {project}</p>}
      <p className="text-xs text-slate-500 italic mb-3">{description}</p>
      <ul className="list-disc list-outside ml-4 text-sm text-slate-600 space-y-2">
        {achievements.map((achievement, idx) => (
          <li key={idx} dangerouslySetInnerHTML={{ __html: achievement.replace(/<strong>(.*?)<\/strong>/g, '<b>$1</b>') }} />
        ))}
      </ul>
    </div>
  </div>
);

const SubProject = ({ title, description, achievements }) => (
  <div className="experience-border">
    <p className="text-sm font-semibold text-slate-700">{title}</p>
    <p className="text-xs text-slate-500 mb-2 italic">{description}</p>
    <ul className="list-disc list-outside ml-4 text-sm text-slate-600 space-y-1">
      {achievements.map((achievement, idx) => (
        <li key={idx}>{achievement}</li>
      ))}
    </ul>
  </div>
);

export default Experience;
