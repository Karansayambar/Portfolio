import React from 'react'
import Projects from '../components/Projects'

const Project = () => {
  return (
    <div className='lg:px-40 md:px-20 px-5 bg-[#1A1A29]'>
      <p className="text-[32px] text-[#7562E0] font-semibold pt-10">Featured projects:</p>
      <p>I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world projects</p>
      <div className='m-auto'>
        <Projects/>
      </div>
    </div>
  )
}

export default Project
