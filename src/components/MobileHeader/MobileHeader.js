import React from "react"
import './mobileHeader.css'

const MobileHeader = ({ activeSection }) => {

  return (
    (<div
      className={`header-container d-flex d-md-none p-2 ${!activeSection && 'd-none'}`}
    >
      {activeSection}
    </div>)
  )
}

export default MobileHeader