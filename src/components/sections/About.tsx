import { MapPin } from 'lucide-react';
import { profile } from '../../data/profile';
import SectionHeading from '../ui/SectionHeading';

export default function About() {
  return (
    <section className="section-shell about-section" id="about" aria-labelledby="about-title">
      <SectionHeading id="about-title" index="01" eyebrow="A little context" title="Software, across the stack." />
      <div className="about-grid">
        <p className="about-lead" data-reveal>
          I’m Niharika — a full-stack engineer who likes systems that work <em>well end to end.</em>
        </p>
        <div className="about-copy" data-reveal>
          <p>
              {profile.introduction}
          </p>
          <div className="about-meta">
            <span className="mono"><MapPin size={14} aria-hidden="true" /> BASED IN</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
      <div className="about-note" data-reveal>
        <span className="about-note__mark" aria-hidden="true">“</span>
        <p>Reliable underneath. Considered at the interface.</p>
        <span className="mono">ENGINEERING PRINCIPLE</span>
      </div>
    </section>
  );
}
