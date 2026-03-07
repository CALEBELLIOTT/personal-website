import React from 'react';

const experiences = [
  {
    date: 'May 2025 - Present',
    company: 'Talkiatry',
    title: 'Software Engineer',
    skills: ['Next.js', 'Node.js', 'Nest.js', 'Typescript', 'PostgreSQL', 'GraphQL', 'RabbitMQ'],
    description: `Built and maintained a range of features for Talkiatry's mental health platform, helping to improve access to high-quality psychiatric care across the United States.`,
  },
  {
    date: 'Oct 2022 - Apr 2025',
    company: 'Anchor Operating System',
    title: 'Software Engineer',
    skills: ['React', 'Node.js', 'Serverless', 'GraphQL', 'Redux', 'Material-UI', 'DynamoDB'],
    description: `Worked on a variety of features for the ticketing platform which powers famous attractions such as the Statue of Liberty, Alcatraz Island, Niagara Falls, and many others.`,
  },
];

const Experience2000s = () => {
  return (
    <div className="y2k-section">
      <h2 className="y2k-section-title">
        <span className="y2k-arrow">»»</span>
        {' '}My Experience{' '}
        <span className="y2k-arrow">««</span>
      </h2>

      <div className="y2k-section-content">
        <p className="y2k-intro-text">
          <span className="y2k-blink">★</span>
          {' '}Here's where I've worked!!!{' '}
          <span className="y2k-blink">★</span>
        </p>

        {experiences.map((exp, index) => (
          <div key={index} className="y2k-experience-card">
            <div className="y2k-exp-header">
              <span className="y2k-exp-icon">💼</span>
              <span className="y2k-exp-company">{exp.company}</span>
            </div>

            <table className="y2k-exp-table">
              <tbody>
                <tr>
                  <td className="y2k-exp-label">Position:</td>
                  <td className="y2k-exp-value">{exp.title}</td>
                </tr>
                <tr>
                  <td className="y2k-exp-label">Duration:</td>
                  <td className="y2k-exp-value">{exp.date}</td>
                </tr>
                <tr>
                  <td className="y2k-exp-label">What I did:</td>
                  <td className="y2k-exp-value">{exp.description}</td>
                </tr>
              </tbody>
            </table>

            <div className="y2k-skills-box">
              <div className="y2k-skills-label">
                <span className="y2k-blink">»</span> Technologies Used:
              </div>
              <div className="y2k-skills-tags">
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="y2k-skill-tag">
                    [{skill}]
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="y2k-resume-link">
          <a
            href="https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/caleb_elliott_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="y2k-button"
          >
            <span className="y2k-blink">»»</span>
            {' '}DOWNLOAD MY RESUME!!!{' '}
            <span className="y2k-blink">««</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience2000s;
