import React from 'react'
import about from './img/about.jpeg'
import Common from './img/Common'

export default function About() {
  return (
    <div>
      <Common name="welcome to About page" visit="/Contact" btnname="Contact now"  imgsrc={about}/>
    </div>
  )
}
