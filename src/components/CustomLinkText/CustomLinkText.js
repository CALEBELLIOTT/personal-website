import React, { useState } from "react"
import { BoxArrowUpRight } from "react-bootstrap-icons"


const CustomLinkText = ({ href, text, spaceEnds, includeIcon = false }) => {
  const [hovered, setHovered] = useState(false)
  return <a
    href={href}
    target={'_blank'}
    onMouseEnter={() => { setHovered(true) }}
    onMouseLeave={() => { setHovered(false) }}
    className={`clickable ${hovered ? 'text-success' : ''}`}
    style={{ textDecoration: 'none' }}
  >
    {`${spaceEnds ? ' ' : ''}${text}${spaceEnds ? ' ' : ''}`}
    {includeIcon ? <span className="ms-2 link-icon"><BoxArrowUpRight /></span> : ''}
  </a>
}

export default CustomLinkText