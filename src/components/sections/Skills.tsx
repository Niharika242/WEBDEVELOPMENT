import { engineeringFocus, skillGroups } from '../../data/skills';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

export default function Skills() {
  return (
    <section className="section-shell skills-section" id="skills" aria-labelledby="skills-title">
      <SectionHeading id="skills-title" index="03" eyebrow="Engineering toolkit" title="A practical full-stack toolkit." description="Technologies and methods used across product engineering, data, and applied AI." />
      <div className="skills-list">
        {skillGroups.map((group) => (
          <article className="skill-row" key={group.name} data-reveal>
            <span className="skill-row__number mono">{String(skillGroups.indexOf(group) + 1).padStart(2, '0')}</span>
            <div className="skill-row__title">
              <h3>{group.name}</h3>
            </div>
            <ul className="skill-tags" aria-label={group.name}>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <ArrowUpRight className="skill-row__arrow" size={20} aria-hidden="true" />
          </article>
        ))}
      </div>
      <div className="engineering-focus">
        <h3 className="engineering-focus__title">How I build.</h3>
        <div className="engineering-focus__grid">
          {engineeringFocus.map((focus, index) => (
            <article className="focus-item" key={focus.title} data-reveal>
              <span className="mono">0{index + 1}</span>
              <h3>{focus.title}</h3>
              <p>{focus.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
