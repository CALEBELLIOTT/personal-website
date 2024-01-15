import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import NameSticky from "./components/NameSticky/NameSticky";
import Biography from "./components/Biography/Biography";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import { useInView } from 'react-intersection-observer';
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Blog from "./components/Blog/Blog";
// import Blogs from "./components/Blogs/Blogs";


const getActiveSection = ({
  aboutSectionVisible,
  experienceSectionVisible,
  projectsSectionVisible,
  mainSectionVisible
}) => {
  if (mainSectionVisible) {
    return false
  } else if (aboutSectionVisible) {
    return 'About'
  } else if (experienceSectionVisible) {
    return 'Experience'
  } else if (projectsSectionVisible) {
    return 'Projects'
  }
}


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const { ref: mainSectionRef, inView: mainSectionVisible } = useInView();
  const { ref: aboutSectionRef, inView: aboutSectionVisible } = useInView();
  const { ref: experienceSectionRef, inView: experienceSectionVisible } = useInView();
  const { ref: projectsSectionRef, inView: projectsSectionVisible } = useInView();
  const activeSection = getActiveSection({
    aboutSectionVisible,
    experienceSectionVisible,
    projectsSectionVisible,
    mainSectionVisible
  })

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width < 768;

  return (
    <div className="App" id="app">
      {/* <MobileHeader activeSection={activeSection} /> */}
      <div className="container mt-5">
        <Row>
          <Col md={6}>
            <div
              className={!isMobile ? `name-sticky-container` : ''}
              ref={mainSectionRef}>
              <NameSticky />
            </div>
          </Col>
          <Col md={6}>
            <div
              className="mt-5 mt-md-0"
              id='about-section'
              ref={aboutSectionRef}>
              <Biography />
            </div>
            <div
              className="experience-section"
              id='experience-section'
              ref={experienceSectionRef}>
              <Experience isMobile={isMobile} />
            </div>
            <div
              className="mt-5"
              id='projects-section'
              ref={projectsSectionRef}>
              <Projects isMobile={isMobile} />
            </div>
            {/* <div className="mt-5" id='blogs-section'>
              <Blogs />
            </div> */}
          </Col>
          <Col md={12}>
            <Blog />
          </Col>
          <Col md={12}>
            {/* <GetInTouch isMobile={isMobile} /> */}
          </Col>
        </Row>
      </div>
    </div >
  );
}

export default App;
