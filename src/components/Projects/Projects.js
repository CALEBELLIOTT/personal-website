import React, { useState } from 'react';
import './projects.css';
import CustomLinkText from '../CustomLinkText/CustomLinkText';
import { Col } from 'react-bootstrap';

const projectsData = [
  {
    name: 'Dashify',
    description: `Chrome extension which overwrites your new tab page to a Spotify dashboard where you can view
    your spotify statistics and control playback.`,
    technology: ['Typescript', 'React', 'Tailwind'],
    image: 'https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/dashify.png',
    link: 'https://chromewebstore.google.com/detail/dashify/hnokfmokdpjdllpejcjgobfljlgheebp?hl=en',
  },
];

const currentSiteTechnologies = ['React', 'Bootstrap', 'Contentful API'];

const ProjectItem = ({ name, description, technology, image, setActiveSection, activeSection, link }) => {
  const isInactive = activeSection && activeSection !== name;
  const isActive = activeSection === name;
  return (
    <div
      className={`row mt-2 ${isInactive && 'inactive-filter'} ${isActive && 'active-container'} p-2 py-3`}
      onMouseEnter={() => setActiveSection(name)}
      onMouseLeave={() => setActiveSection('')}
    >
      <div className='col-md-4'>
        <img src={image} className='project-img' alt='project screenshot' />
      </div>
      <div className='col mt-2 mt-md-0'>
        <CustomLinkText href={link} text={name} spaceEnds={true} includeIcon={true} />
        <p className='text-muted font-small'>{description}</p>
        <div className='d-flex flex-wrap'>
          {technology.map((tech) => (
            <div className='skill-container p-2 mx-2 my-1'>
              <p className='m-0 text-success'>{tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = ({ isMobile }) => {
  const [activeSection, setActiveSection] = useState('');
  return (
    <div className='container-fluid projects-section'>
      {isMobile && (
        <Col md={12}>
          <h3 className='mt-4 fw-bold text-success'>Projects</h3>
        </Col>
      )}
      {projectsData.map(({ name, description, technology, image, link }) => (
        <div key={name} className='default-cursor'>
          <ProjectItem
            name={name}
            description={description}
            technology={technology}
            image={image}
            setActiveSection={setActiveSection}
            activeSection={activeSection}
            link={link}
          />
        </div>
      ))}
      <div className='row mt-4'>
        <div className='col-12'>
          <div className='d-flex flex-column align-items-center'>
            <CustomLinkText
              href={'https://github.com/CALEBELLIOTT/personal-website'}
              text={'This Website!'}
              includeIcon={false}
              spaceEnds={false}
            />
            <p className='font-small text-muted text-center'>
              Although heavily inspired by
              <span>
                <CustomLinkText href={'https://brittanychiang.com'} text={'Brittany Chiang'} spaceEnds={true} />
              </span>
              This site was coded from scratch myself and is deployed with AWS
            </p>
            <div className='d-flex flex-wrap'>
              {currentSiteTechnologies.map((tech) => (
                <div className='skill-container p-2 mx-2 my-1'>
                  <p className='m-0 text-success'>{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
