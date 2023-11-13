import React, { useState } from "react"
import './projects.css'
import CustomLinkText from "../CustomLinkText/CustomLinkText"
import { ArrowRight, Github, Instagram, Linkedin } from "react-bootstrap-icons"

const projectsData = [
  {
    name: 'On-Tracker',
    description: `Application for contractors to manage employees, schedule jobs,
    and contact clients. UI includes a dynamic map where users can drop custom pins.`,
    technology: ['Vue', 'Node.js', 'MapBox', 'Web-Socket'],
    image: 'https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/onTracker.png',
    link: 'https://github.com/CALEBELLIOTT/on-tracker'
  },
  {
    name: 'Tower',
    description: `Small ticketing application where users can post events, RSVP to other's events, and comment on postings.`,
    technology: ['Vue', '.net C#', 'mySQL'],
    image: 'https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/tower.png',
    link: 'https://github.com/CALEBELLIOTT/tower'
  },
  {
    name: 'All-Spice',
    description: `Recipe sharing app where users can create recipes with ingredients and steps. Users can also comment,
    favorite, and categorize their recipes.`,
    technology: ['Vue', 'Node.js', 'Bootstrap'],
    image: 'https://caleb-elliott-assets.s3.us-west-2.amazonaws.com/allSpice.png',
    link: 'https://github.com/CALEBELLIOTT/AllSpiceNode'
  }
]

const currentSiteTechnologies = ['react', 'bootstrap']

const ProjectItem = ({ name, description, technology, image, setActiveSection, activeSection, link }) => {
  const isInactive = activeSection && activeSection !== name
  const isActive = activeSection === name
  return (
    <div className={`row mt-2 ${isInactive && 'inactive-filter'} ${isActive && 'active-container'} p-2 py-3`}
      onMouseEnter={() => setActiveSection(name)}
      onMouseLeave={() => setActiveSection('')}
    >
      <div className="col-md-4">
        <img src={image} className="project-img" />
      </div>
      <div className="col">
        <CustomLinkText href={link} text={name} spaceEnds={true} includeIcon={true} />
        <p className="text-muted font-small">{description}</p>
        <div className="d-flex flex-wrap">
          {technology.map(tech => <div className="skill-container p-2 mx-2 my-1"><p className="m-0 text-success">{tech}</p></div>)}
        </div>
      </div>
    </div>
  )
}



const Projects = () => {
  const [activeSection, setActiveSection] = useState('')
  return (
    <div className="container-fluid projects-section">
      {
        projectsData.map(({ name, description, technology, image, link }) => (
          <div key={name} className="default-cursor">
            <ProjectItem
              name={name}
              description={description}
              technology={technology}
              image={image}
              setActiveSection={setActiveSection}
              activeSection={activeSection}
              link={link} />
          </div>
        ))
      }
      <div className="row mt-4">
        <div className="col-12">
          <div className="d-flex flex-column align-items-center">
            <CustomLinkText href={'https://github.com/CALEBELLIOTT/personal-website'} text={'This Website!'} includeIcon={false} spaceEnds={false} />
            <p className="font-small text-muted text-center">Although heavily inspired by
              <span><CustomLinkText href={'https://brittanychiang.com'} text={'Brittany Chiang'} spaceEnds={true} /></span>
              This site was coded from scratch myself and is deployed with AWS</p>
            <div className="d-flex flex-wrap">
              {currentSiteTechnologies.map(tech => <div className="skill-container p-2 mx-2 my-1"><p className="m-0 text-success">{tech}</p></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects