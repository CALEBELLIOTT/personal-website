import React, { useState, useEffect } from 'react';

const experiences = [
  {
    date: '2025-PRESENT',
    company: 'TALKIATRY',
    title: 'SOFTWARE ENGINEER',
    skills: ['NEXT.JS', 'NODE.JS', 'NEST.JS', 'TYPESCRIPT', 'POSTGRESQL', 'GRAPHQL'],
    description:
      'Building mental health platform features. Patient intake systems, appointment scheduling, insurance integrations.',
  },
  {
    date: '2022-2025',
    company: 'ANCHOR OPERATING SYSTEM',
    title: 'SOFTWARE ENGINEER',
    skills: ['REACT', 'NODE.JS', 'SERVERLESS', 'GRAPHQL', 'REDUX', 'DYNAMODB'],
    description:
      'Ticketing platform for Statue of Liberty, Alcatraz Island, Niagara Falls. Payment processing, reporting.',
  },
];

const projects = [
  {
    name: 'FLAREFI',
    description: 'Financial independence tools and blog',
    tech: ['TYPESCRIPT', 'NEXT.JS', 'VISX'],
    link: 'https://www.flarefi.co/',
  },
  {
    name: 'DASHIFY',
    description: 'Chrome extension - Spotify dashboard for new tab',
    tech: ['TYPESCRIPT', 'REACT', 'TAILWIND'],
    link: 'https://chromewebstore.google.com/detail/dashify/hnokfmokdpjdllpejcjgobfljlgheebp',
  },
];

const skills = ['JAVASCRIPT', 'REACT', 'NODE.JS', 'TYPESCRIPT', 'POSTGRESQL', 'AWS', 'GRAPHQL', 'NEST.JS'];

const Terminal80s = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Simulate boot sequence
    setTimeout(() => setBootComplete(true), 500);

    return () => clearInterval(interval);
  }, []);

  if (!bootComplete) {
    return (
      <div className='terminal-window'>
        <div className='terminal-content'>
          <p className='terminal-line'>BOOTING SYSTEM...</p>
          <p className='terminal-line blink'>_</p>
        </div>
      </div>
    );
  }

  return (
    <div className='terminal-window'>
      {/* Title Bar */}
      <div className='terminal-titlebar'>
        <span>CALEB.EXE - PERSONAL TERMINAL v1.0</span>
        <span>{currentTime}</span>
      </div>

      <div className='terminal-content'>
        {/* Boot Messages */}
        <div className='terminal-section'>
          <p className='terminal-line dim'>CALEB OS [VERSION 1.0.1985]</p>
          <p className='terminal-line dim'>(C) 2025 CALEB ELLIOTT. ALL RIGHTS RESERVED.</p>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line'>SYSTEM READY.</p>
          <p className='terminal-line'>TYPE 'HELP' FOR AVAILABLE COMMANDS.</p>
        </div>

        <div className='terminal-divider'>{'═'.repeat(60)}</div>

        {/* About Section */}
        <div className='terminal-section'>
          <p className='terminal-line command'>C:\&gt; WHOAMI</p>
          <p className='terminal-line'>&nbsp;</p>
          <pre className='terminal-ascii'>
            {`  ╔══════════════════════════════════════════════════════╗
  ║                                                      ║
  ║   ██████╗ █████╗ ██╗     ███████╗██████╗             ║
  ║  ██╔════╝██╔══██╗██║     ██╔════╝██╔══██╗            ║
  ║  ██║     ███████║██║     █████╗  ██████╔╝            ║
  ║  ██║     ██╔══██║██║     ██╔══╝  ██╔══██╗            ║
  ║  ╚██████╗██║  ██║███████╗███████╗██████╔╝            ║
  ║   ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝             ║
  ║                                                      ║
  ║            E L L I O T T                             ║
  ║                                                      ║
  ╚══════════════════════════════════════════════════════╝`}
          </pre>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line'>NAME.......... CALEB ELLIOTT</p>
          <p className='terminal-line'>OCCUPATION.... SOFTWARE ENGINEER</p>
          <p className='terminal-line'>EMPLOYER...... TALKIATRY</p>
          <p className='terminal-line'>
            STATUS........ <span className='blink'>ACTIVE</span>
          </p>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line'>BUILDING APPLICATIONS FOR THE WORLD WIDE WEB.</p>
        </div>

        <div className='terminal-divider'>{'═'.repeat(60)}</div>

        {/* Skills Section */}
        <div className='terminal-section'>
          <p className='terminal-line command'>C:\&gt; DIR /SKILLS</p>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line dim'> VOLUME IN DRIVE C IS BRAIN</p>
          <p className='terminal-line dim'> DIRECTORY OF C:\SKILLS</p>
          <p className='terminal-line'>&nbsp;</p>
          {skills.map((skill, index) => (
            <p key={index} className='terminal-line'>
              {'  '}
              {skill.padEnd(20, '.')}
              {' [LOADED]'}
            </p>
          ))}
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line dim'> {skills.length} FILE(S) READY</p>
        </div>

        <div className='terminal-divider'>{'═'.repeat(60)}</div>

        {/* Experience Section */}
        <div className='terminal-section'>
          <p className='terminal-line command'>C:\&gt; TYPE EXPERIENCE.DAT</p>
          <p className='terminal-line'>&nbsp;</p>
          {experiences.map((exp, index) => (
            <div key={index} className='terminal-block'>
              <p className='terminal-line'>┌{'─'.repeat(56)}┐</p>
              <p className='terminal-line'>│ {exp.company.padEnd(54)} │</p>
              <p className='terminal-line'>│ {exp.title.padEnd(54)} │</p>
              <p className='terminal-line'>│ {exp.date.padEnd(54)} │</p>
              <p className='terminal-line'>├{'─'.repeat(56)}┤</p>
              <p className='terminal-line'>│ {exp.description.substring(0, 54).padEnd(54)} │</p>
              {exp.description.length > 54 && (
                <p className='terminal-line'>│ {exp.description.substring(54, 108).padEnd(54)} │</p>
              )}
              <p className='terminal-line'>├{'─'.repeat(56)}┤</p>
              <p className='terminal-line'>│ TECH: {exp.skills.slice(0, 4).join(', ').padEnd(48)} │</p>
              <p className='terminal-line'>└{'─'.repeat(56)}┘</p>
              <p className='terminal-line'>&nbsp;</p>
            </div>
          ))}
        </div>

        <div className='terminal-divider'>{'═'.repeat(60)}</div>

        {/* Projects Section */}
        <div className='terminal-section'>
          <p className='terminal-line command'>C:\&gt; DIR /PROJECTS</p>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line dim'> DIRECTORY OF C:\PROJECTS</p>
          <p className='terminal-line'>&nbsp;</p>
          {projects.map((project, index) => (
            <div key={index} className='terminal-block'>
              <p className='terminal-line'> [{project.name}]</p>
              <p className='terminal-line dim'> {project.description}</p>
              <p className='terminal-line dim'> TECH: {project.tech.join(', ')}</p>
              <p className='terminal-line'>
                {' '}
                <a href={project.link} target='_blank' rel='noreferrer' className='terminal-link'>
                  &gt; EXECUTE PROGRAM
                </a>
              </p>
              <p className='terminal-line'>&nbsp;</p>
            </div>
          ))}
        </div>

        <div className='terminal-divider'>{'═'.repeat(60)}</div>

        {/* Contact Section */}
        <div className='terminal-section'>
          <p className='terminal-line command'>C:\&gt; CONTACT --INFO</p>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line'>ESTABLISHING CONNECTION...</p>
          <p className='terminal-line'>CONNECTION ESTABLISHED.</p>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line'>
            {' '}
            GITHUB.....{' '}
            <a href='https://github.com/CALEBELLIOTT' target='_blank' rel='noreferrer' className='terminal-link'>
              GITHUB.COM/CALEBELLIOTT
            </a>
          </p>
          <p className='terminal-line'>
            {' '}
            LINKEDIN...{' '}
            <a
              href='https://www.linkedin.com/in/caleb-elliott1/'
              target='_blank'
              rel='noreferrer'
              className='terminal-link'
            >
              LINKEDIN.COM/IN/CALEB-ELLIOTT1
            </a>
          </p>
          <p className='terminal-line'>
            {' '}
            EMAIL......{' '}
            <a href='mailto:caleb123elliott@gmail.com' className='terminal-link'>
              CALEB123ELLIOTT@GMAIL.COM
            </a>
          </p>
        </div>

        <div className='terminal-divider'>{'═'.repeat(60)}</div>

        {/* Footer */}
        <div className='terminal-section'>
          <p className='terminal-line'>&nbsp;</p>
          <p className='terminal-line'>
            C:\&gt; <span className='blink'>_</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terminal80s;
