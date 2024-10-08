import React, { useState } from 'react';
import { Github, Instagram, Linkedin } from 'react-bootstrap-icons';
import './nameSticky.css';

const socials = [
  {
    icon: Github,
    link: 'https://github.com/CALEBELLIOTT',
  },
  {
    icon: Linkedin,
    link: 'https://www.linkedin.com/in/caleb-elliott1/',
  },
  {
    icon: Instagram,
    link: 'https://www.instagram.com/caleb.ellio/',
  },
];

const SectionBar = ({ label, setActiveSections, activeSections, scrollToId }) => {
  const isActive = activeSections[label];
  return (
    <div
      className='d-flex align-items-center my-4 clickable d-flex'
      onMouseEnter={() => setActiveSections({ ...activeSections, [label]: true })}
      onMouseLeave={() => setActiveSections({ ...activeSections, [label]: false })}
      onClick={() => {
        // @ts-ignore
        document.getElementById(scrollToId).scrollIntoView();
      }}
    >
      <div className={isActive ? 'section-bar-active' : 'section-bar'} />
      <p className={`m-0 ${!isActive && 'text-muted'} ms-2`}>{label}</p>
    </div>
  );
};

const NameSticky = () => {
  const [activeSections, setActiveSections] = useState({});

  return (
    <div>
      <h1 className='mb-2'>Caleb Elliott</h1>
      <h4 className='mt-2'>Engineer at Anchor Operating System</h4>
      <p className='text-muted caption mt-2 mb-5'>Building applications for the web</p>
      <div className='d-none d-md-block link-section'>
        <div>
          <SectionBar
            label={'About'}
            setActiveSections={setActiveSections}
            activeSections={activeSections}
            scrollToId={'app'}
          />
          <SectionBar
            label={'Experience'}
            setActiveSections={setActiveSections}
            activeSections={activeSections}
            scrollToId={'experience-section'}
          />
          <SectionBar
            label={'Projects'}
            setActiveSections={setActiveSections}
            activeSections={activeSections}
            scrollToId={'projects-section'}
          />
        </div>
      </div>
      <div className='d-flex justify-content-between w-50 mt-5'>
        {socials.map(({ icon: Icon, link }) => (
          <a href={link} target='_blank' rel='noreferrer'>
            <h3 className='text-muted'>
              <Icon href={link} />
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default NameSticky;
