import React, { Suspense } from 'react'
import Navbar from '../components/Navbar';

const MainPage = () => {
    const HomePage = React.lazy(() => import('./Home'));
    const AboutPage = React.lazy(() => import('./About'));
    const ContactPage = React.lazy(() => import("./Contact"));
    const ProjectPage = React.lazy(() => import("./Project"));
    const Footer = React.lazy(() => import("./Footer"));
  
    return (
      <div>
          <Navbar/>
           <Suspense fallback={<div className='flex items-center justify-center'>...Loading</div>}>
          <section id='home'>
            <HomePage/>
          </section>
          <section id='about'>
              <AboutPage/>
          </section>
          <section id='project'>
          <ProjectPage/>
          </section>
          <section id='contact'>
          <ContactPage/>
          </section>
          <section id='footer'>
            <Footer/>
          </section>
          </Suspense>
      </div>
    )
  }

export default MainPage
