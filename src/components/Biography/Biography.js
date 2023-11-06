import React from "react"
import CustomLinkText from "../CustomLinkText/CustomLinkText"

const LinkedText = () => {

}


const Biography = () => {
  return <div>
    <p className="text-muted">
      I discovered my passion for coding my senior year of college at Boise State University.
      Originally studying Biology, I knew I wanted to make the switch to the field of software engineering.
      <br />
      <br />
      Since then, I have been building web apps and exploring the world of software. I have had
      the pleasure of learning the fundamentals at {<CustomLinkText href={'https://boisecodeworks.com/'} text={'CodeWorks'} spaceEnds={true} />} and work aside talented engineers at
      <CustomLinkText href={'https://www.getanchor.io/'} text={'Anchor Operating System.'} spaceEnds={true} />
      <br />
      <br />
      In my free time, I enjoy playing guitar, working out, and exploring Los Angeles.

    </p>
  </div>
}

export default Biography