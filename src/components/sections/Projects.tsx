import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import ProjectVisual from '../projects/ProjectVisual';
import SectionHeading from '../ui/SectionHeading';

export default function Projects() {
  return (
    <section className="section-shell projects-section" id="work" aria-labelledby="work-title">
      <SectionHeading id="work-title" index="02" eyebrow="Selected work" title="Systems, made tangible." description="Three projects across distributed product flows, language data, and spatial interaction." />
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.number} data-reveal data-project={project.number}>
            <ProjectVisual project={project} />
            <div className="project__details">
              <div className="project__eyebrow mono"><span>{project.category}</span><span>{project.number} / 03</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project__engineering">
                <span className="mono">ENGINEERING FOCUS</span>
                <ul>{project.engineeringHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              </div>
              <ul className="project__tags" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
              {project.result && <p className="project__result"><span className="mono">RESULT</span>{project.result}</p>}
              <div className="project__links">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} aria-hidden="true" /></a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={15} aria-hidden="true" /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note mono" data-reveal>DIAGRAMS SHOW CONCEPTUAL FLOWS · ADD VERIFIED PROJECT LINKS WHEN AVAILABLE</p>
    </section>
  );
}
