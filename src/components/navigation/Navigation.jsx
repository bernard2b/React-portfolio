import React from 'react'
import './Nav.css'
import { GrLinkedin } from 'react-icons/gr'
import { BsGithub } from 'react-icons/bs'
import { SiCodewars } from 'react-icons/si'
import { SiHackerrank } from 'react-icons/si'

const nav = () => {
  return (
    <div className='nav'>
      <div className='sites'>
      <a href='https://www.linkedin.com/in/bernardgyugyi/' target="_blank" rel="noopener" ><GrLinkedin /></a>
      <a href='https://github.com/bernard2b/' target="_blank" rel="noopener"><BsGithub /></a>
      <a href='https://www.codewars.com/users/bernard2b' target="_blank" rel="noopener"><SiCodewars /></a>
      <a href='https://www.hackerrank.com/bernard_gyugyi' target="_blank" rel="noopener"><SiHackerrank /></a>
      </div>
      <div className='mail'>
        <a href='mailto:bernard.gyugyi@gmail.com'>bernard.gyugyi@gmail.com</a>
      </div>
    </div>

  )
}

export default nav