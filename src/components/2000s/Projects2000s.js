import React from 'react';

const projectsData = [
  {
    name: 'FlareFi',
    description: 'Website and blog where I build tools and write content for those pursuing financial independence.',
    technology: ['Typescript', 'Next.js', 'visx'],
    image: 'https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/flare-fi.webp',
    link: 'https://www.flarefi.co/',
  },
  {
    name: 'Dashify',
    description: `Chrome extension which overwrites your new tab page to a Spotify dashboard where you can view your spotify statistics and control playback.`,
    technology: ['Typescript', 'React', 'Tailwind'],
    image: 'https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/dashify.png',
    link: 'https://chromewebstore.google.com/detail/dashify/hnokfmokdpjdllpejcjgobfljlgheebp?hl=en',
  },
];

const Projects2000s = () => {
  return (
    <div className="y2k-section">
      <h2 className="y2k-section-title">
        <span className="y2k-arrow">»»</span>
        {' '}My Cool Projects{' '}
        <span className="y2k-arrow">««</span>
      </h2>

      <div className="y2k-section-content">
        <p className="y2k-intro-text">
          <span className="y2k-blink">★</span>
          {' '}Check out these AWESOME projects I've built!!!{' '}
          <span className="y2k-blink">★</span>
        </p>

        <div className="y2k-projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="y2k-project-card">
              <div className="y2k-project-header">
                <span className="y2k-project-icon">🖥️</span>
                <span className="y2k-project-name">{project.name}</span>
                <span className="y2k-new-badge">NEW!</span>
              </div>

              <div className="y2k-project-image-container">
                <img
                  src={project.image}
                  alt={project.name}
                  className="y2k-project-image"
                />
              </div>

              <div className="y2k-project-description">
                {project.description}
              </div>

              <div className="y2k-project-tech">
                <span className="y2k-tech-label">Built with:</span>
                <div className="y2k-tech-list">
                  {project.technology.map((tech, techIndex) => (
                    <span key={techIndex} className="y2k-tech-tag">
                      • {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="y2k-project-link"
              >
                <span className="y2k-blink">»»</span>
                {' '}CLICK HERE TO VIEW!!!{' '}
                <span className="y2k-blink">««</span>
              </a>
            </div>
          ))}
        </div>

        {/* Animated "more coming soon" */}
        <div className="y2k-coming-soon">
          <marquee scrollamount="2">
            ★ More projects coming soon!!! Stay tuned!!! ★
            ★ More projects coming soon!!! Stay tuned!!! ★
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default Projects2000s;
