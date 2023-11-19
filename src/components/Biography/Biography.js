import React from "react"
import CustomLinkText from "../CustomLinkText/CustomLinkText"

const Biography = () => {
  return <div>
    <p className="text-muted">
      I am an experienced full-stack software engineer located in the Los Angeles area and have been
      passionately programming since "Hello World".
      <br />
      <br />
      I began my coding journey my senior year of college and haven't looked back. Since then, I have had
      the pleasure of learning the fundamentals at {<CustomLinkText href={'https://boisecodeworks.com/'} text={'CodeWorks'} spaceEnds={true} />} and working aside talented engineers at
      <CustomLinkText href={'https://www.getanchor.io/'} text={'Anchor Operating System.'} spaceEnds={true} />
      <br />
      <br />
      When I'm not at my computer, I enjoy playing guitar, working out, and exploring Los Angeles.
    </p>
  </div>
}

export default Biography