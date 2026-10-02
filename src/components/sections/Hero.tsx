import { ArrowDown, ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { profile } from '../../data/profile';
import ProfileImage from '../ui/ProfileImage';

export default function Hero() {
  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero__topline hero-kicker">
        <span className="status"><span className="status__dot" />{profile.role}</span>
        <span className="mono hero__coordinates">{profile.company}&nbsp; / &nbsp;{profile.location}</span>
      </div>
      <div className="hero__main">
        <div className="hero__copy">
          <p className="eyebrow hero-kicker"><span>01</span> SOFTWARE ENGINEERING&nbsp; / &nbsp;FULL STACK</p>
          <h1 className="hero__title hero-title" id="hero-title">
            FULL-STACK<br />SOFTWARE<br /><em>ENGINEER</em><span className="accent-period">.</span>
          </h1>
          <div className="hero__bottom hero-copy">
            <p>{profile.introduction}</p>
            <div className="hero__actions hero-actions">
              <a className="button button--primary" href="#work" data-cursor="link">
                View my work <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="text-link" href="#contact" data-cursor="link">
                Get in touch <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              {profile.githubUrl && <a className="hero__github" href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile" data-cursor="link"><Github size={17} aria-hidden="true" /></a>}
            </div>
          </div>
        </div>
        <div className="hero__portrait hero-art">
          <ProfileImage src={profile.photo} alt={profile.photoAlt} name={profile.name} />
          <p className="hero-art__caption mono">PORTRAIT&nbsp; / &nbsp;{profile.location.toUpperCase()}</p>
        </div>
      </div>
      <div className="hero__current hero-copy">
        <span className="mono">CURRENT ROLE</span>
        <p><strong>{profile.role}</strong><span>{profile.company}</span><span>{profile.location}</span></p>
        <span className="hero__period mono">{profile.period}</span>
      </div>
      <div className="hero__foot mono">
        <span>BACKEND&nbsp; / &nbsp;REAL-TIME&nbsp; / &nbsp;APPLIED AI</span>
        <a href="#about" aria-label="Scroll to about section"><ArrowDown size={16} aria-hidden="true" /></a>
        <span>SCROLL TO EXPLORE&nbsp; ↓</span>
      </div>
    </section>
  );
}
