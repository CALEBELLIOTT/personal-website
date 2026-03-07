import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NameSticky from '../NameSticky/NameSticky';
import Biography from '../Biography/Biography';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Blog from '../Blog/Blog';

const ModernLayout = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width < 768;

  return (
    <div className='container mt-5'>
      <Row>
        <Col md={6}>
          <div className={!isMobile ? `name-sticky-container` : ''}>
            <NameSticky />
          </div>
        </Col>
        <Col md={6}>
          <div className='mt-5 mt-md-0' id='about-section'>
            <Biography />
          </div>
          <div className='experience-section' id='experience-section'>
            <Experience isMobile={isMobile} />
          </div>
          <div className='mt-5' id='projects-section'>
            <Projects isMobile={isMobile} />
          </div>
        </Col>
        <Col md={12}>
          <Blog />
        </Col>
      </Row>
    </div>
  );
};

export default ModernLayout;
