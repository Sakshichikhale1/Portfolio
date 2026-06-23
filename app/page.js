import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import MoreProjects from "./components/homepage/more-projects";
import { projectsData } from "@/utils/data/projects-data";

export default async function Home() {
  const remainingProjects = projectsData.slice(3);

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <MoreProjects projects={remainingProjects} />
      <ContactSection />
    </div>
  )
};