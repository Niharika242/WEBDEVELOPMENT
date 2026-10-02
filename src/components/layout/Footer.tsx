import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile } from '../../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer section-shell">
      <a className="footer-mark" href="#home" aria-label="Back to top">n.</a>
      <div className="site-footer__identity">
        <strong>{profile.name}</strong>
        <span>{profile.role}</span>
      </div>
      <span className="site-footer__location"><MapPin size={13} aria-hidden="true" />{profile.location}</span>
      <nav className="site-footer__links" aria-label="Contact and social links">
        {profile.githubUrl && <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">GitHub <Github size={14} aria-hidden="true" /><ArrowUpRight size={12} aria-hidden="true" /></a>}
        {profile.linkedInUrl && <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">LinkedIn <Linkedin size={14} aria-hidden="true" /><ArrowUpRight size={12} aria-hidden="true" /></a>}
        <a href={`mailto:${profile.email}`}><Mail size={14} aria-hidden="true" />Email</a>
      </nav>
      <p className="site-footer__copyright">© {new Date().getFullYear()} {profile.name}</p>
    </footer>
  );
}
