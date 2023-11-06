import React, { useState } from "react"


const CustomLinkText = ({ href, text, spaceEnds }) => {
  const [hovered, setHovered] = useState(false)
  console.log(hovered)
  return <a
    href={href}
    target={'_blank'}
    onMouseEnter={() => { setHovered(true) }}
    onMouseLeave={() => { setHovered(false) }}
    className={`clickable ${hovered ? 'text-success' : ''}`}
    style={{ textDecoration: 'none' }}
  >
    {`${spaceEnds ? ' ' : ''}${text}${spaceEnds ? ' ' : ''}`}
  </a>
}

export default CustomLinkText