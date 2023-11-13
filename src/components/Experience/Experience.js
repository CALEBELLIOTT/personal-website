import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import './experience.css'

const experiences = [
  {
    date: 'October 2022 - Present',
    location: 'Anchor Operating System',
    title: 'Software Engineer',
    skills: ['React', 'Node', 'Serverless', 'GraphQL', 'Redux', 'Material-UI', 'DynamoDB'],
    description: `Daily work on Anchor, a large scale software platform that provides a wide array of services related to ticketing. Services provided include: payment processing, ticketing, report generation, integration with 3rd party ticketing providers, helicopter flight scheduling, automated email and text services, and others.`
  },
  {
    date: 'May 2022 - Aug 2022',
    location: 'CodeWorks',
    title: 'Full Stack Developer Student',
    skills: ['Vue', 'Node', 'CSS', 'Bootstrap', 'C#', '.Net', 'MySQL', 'MongoDB'],
    description: `Worked individually and in teams to build client side software using JavaScript, MVC, Vue.js, HTML 5, CSS 3, and Bootstrap. Created REST APIs using technologies including Node.js, Express, .net C#, MySQL, and MongoDB.

    Created functional full-stack applications within teams and individually while implementing Scrum methodology.`
  }
]

const ExperienceSection = ({
  date,
  title,
  location,
  skills,
  description,
  activeSection,
  setActiveSection
}) => {
  const isInactive = activeSection && activeSection !== location
  const isActive = activeSection === location
  return (
    <Row
      className={`mt-3 p-3 ${isInactive && 'inactive-filter'} default-cursor ${isActive && 'active-container'} container`}
      onMouseEnter={() => setActiveSection(location)}
      onMouseLeave={() => setActiveSection('')}
    >
      <Col xs={4}>
        <p className="text-muted font-small">
          {date}
        </p>
      </Col>
      <Col xs={8}>
        <p className="text-success m-0">
          {title}
        </p>
        <p>
          {location}
        </p>
        <p className="text-muted font-small">
          {description}
        </p>
        <div className="d-flex flex-wrap">
          {skills.map(skill => <div className="skill-container p-2 mx-2 my-1"><p className="m-0 text-success">{skill}</p></div>)}
        </div>
      </Col>
    </Row>
  )
}


const Experience = () => {
  const [activeSection, setActiveSection] = useState('')

  return (
    <div>
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
    </div>
  )
}

export default Experience