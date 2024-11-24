import React from 'react'
import Nav from './Navigation/Nav'
import Hero from './Hero 1/hero'
import Courses from './Courses/courses'
import Achievements from './Achievements/achievements'
import Programs from './Programs/programs'
import Teams from './Teams/teams'
import Testimonial from './Testimonial/testimonial'
import Footer from './Footer/footer'

const home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Courses/>
      <Achievements/>
      <Programs/>
      <Teams/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default home
