import { education, experience } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section className="section-shell experience-section" id="experience" aria-labelledby="experience-title">
      <SectionHeading id="experience-title" index="04" eyebrow="Experience" title="Engineering in production." description="Applied work across reliability, test quality, and user-facing performance." />
      <div className="experience-content">
        {experience.map((entry) => (
          <article className="experience-card" key={`${entry.period}-${entry.title}`} data-reveal>
            <div className="experience-card__top">
              <div>
                <p className="experience-card__company mono">{entry.organization}</p>
                <h3>{entry.title}</h3>
              </div>
              <span className="experience-card__period mono">{entry.period}</span>
            </div>
            <p className="experience-card__description">{entry.description}</p>
            {entry.focus && (
              <div className="experience-card__focus">
                <span className="mono">ENGINEERING FOCUS</span>
                <ul>{entry.focus.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            )}
            {entry.impact && (
              <ul className="experience-impact" aria-label="Selected impact">
                {entry.impact.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </article>
        ))}
        <div className="education-strip" data-reveal>
          <h3 className="mono">EDUCATION</h3>
          <ul>
            {education.map((entry) => <li key={`${entry.period}-${entry.title}`}><span className="mono">{entry.period}</span>{entry.title}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
