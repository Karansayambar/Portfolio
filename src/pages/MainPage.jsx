import React, { Suspense } from "react";
import Navbar from "../components/Navbar";
import BackgroundEffects from "../components/BackgroundEffects";
import ScrollProgress from "../components/ScrollProgress";
import ResumeCTA, { ResumeFloatingButton } from "../components/ResumeCTA";

const HomePage = React.lazy(() => import("./Home"));
const AboutPage = React.lazy(() => import("./About"));
const ExperiencePage = React.lazy(() => import("../components/Experience"));
const SkillsPage = React.lazy(() => import("./SkillsSection"));
const ProjectPage = React.lazy(() => import("./Project"));
const TestimonialsPage = React.lazy(() => import("../components/Testimonials"));
const NowWidget = React.lazy(() => import("../components/NowWidget"));
const ContactPage = React.lazy(() => import("./Contact"));
const Footer = React.lazy(() => import("./Footer"));

const Loader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex items-center gap-3 text-accent-light">
      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.2s" }} />
      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.4s" }} />
    </div>
  </div>
);

const MainPage = () => {
  return (
    <div className="relative min-h-screen">
      <BackgroundEffects />
      <ScrollProgress />
      <Navbar />
      <ResumeFloatingButton />
      <main className="relative">
        <Suspense fallback={<Loader />}>
          <section id="home">
            <HomePage />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="now">
            <NowWidget />
          </section>
          <section id="experience">
            <ExperiencePage />
          </section>
          <section id="skills">
            <SkillsPage />
          </section>
          <section id="project">
            <ProjectPage />
          </section>
          <section id="testimonials">
            <TestimonialsPage />
          </section>
          <section id="resume">
            <ResumeCTA />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </Suspense>
      </main>
    </div>
  );
};

export default MainPage;
