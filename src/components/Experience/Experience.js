import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './experience.css';
import CustomLinkText from '../CustomLinkText/CustomLinkText';

const experiences = [
  {
    date: 'May 2025 - Present',
    location: 'Talkiatry',
    title: 'Software Engineer',
    skills: ['Next.js', 'Node.js', 'Nest.js', 'Typescript', 'PostgreSQL', 'GraphQL', 'RabbitMQ'],
    description: `Built and maintained a range of features for Talkiatry’s mental health platform, helping to improve access to high-quality psychiatric care across the United States. Contributions included building secure patient intake systems, streamlining appointment scheduling, integrating with insurance and billing providers, and enhancing internal tools to support clinical operations.`,
  },
  {
    date: 'Oct 2022 - Apr 2025',
    location: 'Anchor Operating System',
    title: 'Software Engineer',
    skills: ['React', 'Node.js', 'Serverless', 'GraphQL', 'Redux', 'Material-UI', 'DynamoDB'],
    description: `Worked on a variety of features for the ticketing platform which powers famous attractions such as the Statue of Liberty, Alcatraz Island, Niagara Falls, and many others. Services rendered include payment processing, report generation, integration with third party ticketing providers, and more.`,
  },
  {
    date: 'May 2022 - Aug 2022',
    location: 'CodeWorks',
    title: 'Full Stack Developer Student',
    skills: ['Vue', 'Node.js', 'CSS', 'Bootstrap', 'C#', '.Net', 'MySQL', 'MongoDB'],
    description: `Worked individually and in teams to build client side software using JavaScript, Vue.js, HTML, CSS, and Bootstrap. Created REST APIs using technologies including Node.js, Express, .net C#, MySQL, and MongoDB.

    Created full-stack applications within teams and individually while implementing Scrum methodology.`,
  },
];

const ExperienceSection = ({ date, title, location, skills, description, activeSection, setActiveSection }) => {
  const isInactive = activeSection && activeSection !== location;
  const isActive = activeSection === location;
  return (
    <Row
      className={`mt-3 p-3 ${isInactive && 'inactive-filter'} default-cursor ${
        isActive && 'active-container'
      } container`}
      onMouseEnter={() => setActiveSection(location)}
      onMouseLeave={() => setActiveSection('')}
    >
      <Col md={4}>
        <p className='text-muted font-small'>{date}</p>
      </Col>
      <Col md={8}>
        <p className='text-success m-0'>{title}</p>
        <p>{location}</p>
        <p className='text-muted font-small'>{description}</p>
        <div className='d-flex flex-wrap'>
          {skills.map((skill) => (
            <div className='skill-container p-2 mx-2 my-1'>
              <p className='m-0 text-success font-small'>{skill}</p>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
};

const Experience = ({ isMobile }) => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <div>
      {isMobile && (
        <Col md={12}>
          <h3 className='mt-4 fw-bold text-success'>Experience</h3>
        </Col>
      )}
      {experiences.map(({ date, location, title, skills, description }) => (
        <ExperienceSection
          date={date}
          location={location}
          title={title}
          skills={skills}
          description={description}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      ))}
      <div className='mt-2 ms-2'>
        <CustomLinkText
          href={'https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/caleb_elliott_resume.pdf'}
          text={'View Full CV'}
          includeIcon={true}
          spaceEnds={false}
        />
      </div>
    </div>
  );
};

export default Experience;
