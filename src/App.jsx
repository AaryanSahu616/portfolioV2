import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ContentShelf from './components/ContentShelf';
import {
  SkillTile,
  ToolTile,
  ProjectTile,
  ExperienceTile,
  EducationTile,
  HobbyTile,
} from './components/TileCard';
import Footer from './components/Footer';

import data from './data/portfolioData.json';

function App() {
  const { profile, skills, experience, projects, education, hobbies } = data;

  return (
    <>
      <Navbar />
      <HeroBanner profile={profile} />

      {/* Skills — Frontend & Backend */}
      <ContentShelf
        id="skills"
        title="Skills & Technologies"
        subtitle="Frontend, backend, and everything in between"
      >
        {skills.frontend.map((s) => (
          <SkillTile key={s.name} skill={s} />
        ))}
        {skills.backend.map((s) => (
          <SkillTile key={s.name} skill={s} />
        ))}
      </ContentShelf>

      {/* Tools & Soft Skills */}
      <ContentShelf
        id="tools"
        title="Tools & Soft Skills"
        subtitle="What I bring beyond the code"
      >
        {skills.tools.map((t) => (
          <ToolTile key={t.name} tool={t} />
        ))}
      </ContentShelf>

      {/* Experience */}
      <ContentShelf
        id="experience"
        title="Work Experience"
        subtitle="Professional journey so far"
      >
        {experience.map((exp) => (
          <ExperienceTile key={exp.id} exp={exp} />
        ))}
      </ContentShelf>

      {/* Projects */}
      <ContentShelf
        id="projects"
        title="Projects"
        subtitle="Things I've built"
      >
        {projects.map((proj) => (
          <ProjectTile key={proj.id} project={proj} />
        ))}
      </ContentShelf>

      {/* Education */}
      <ContentShelf
        id="education"
        title="Education"
        subtitle="Academic background"
      >
        {education.map((edu) => (
          <EducationTile key={edu.id} edu={edu} />
        ))}
      </ContentShelf>

      {/* Hobbies */}
      <ContentShelf
        id="hobbies"
        title="Beyond the Code"
        subtitle="What I enjoy in my free time"
      >
        {hobbies.map((hobby) => (
          <HobbyTile key={hobby} hobby={hobby} />
        ))}
      </ContentShelf>

      <Footer profile={profile} />
    </>
  );
}

export default App;
