import { useEffect } from 'react';
import { ArrowUpRight, Github, Menu, X } from 'lucide-react';
import { navigation, profile } from '../../data/profile';
import { useUIStore } from '../../store/ui-store';
import ThemeToggle from '../ui/ThemeToggle';

export default function Navigation() {
  const isMenuOpen = useUIStore((state) => state.isMenuOpen);
  const setMenuOpen = useUIStore((state) => state.setMenuOpen);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.body.classList.add('menu-open');
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen, setMenuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`} onClick={closeMenu}>
        <span className="wordmark__mark" aria-hidden="true">n.</span>
        <span className="wordmark__name">{profile.name}</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
      <nav id="primary-navigation" className={`primary-nav${isMenuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
        <div className="primary-nav__links">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              <span className="nav-index">0{index + 1}</span>{item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          {profile.githubUrl && (
            <a className="nav-github" href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={17} aria-hidden="true" /><span>GitHub</span><ArrowUpRight size={13} aria-hidden="true" />
            </a>
          )}
          <ThemeToggle />
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Contact <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
