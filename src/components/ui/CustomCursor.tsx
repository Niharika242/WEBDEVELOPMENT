import { useEffect, useRef } from 'react';
import { useUIStore } from '../../store/ui-store';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mode = useUIStore((state) => state.cursorMode);
  const setCursorMode = useUIStore((state) => state.setCursorMode);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!finePointer.matches) return;

    const cursor = cursorRef.current;
    const dot = cursor?.querySelector<HTMLElement>('.cursor__dot');
    const ring = cursor?.querySelector<HTMLElement>('.cursor__ring');
    if (!cursor || !dot || !ring) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let frame = 0;

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add('is-visible');
    };
    const over = (event: PointerEvent) => {
      if (!(event.target instanceof Element)) return;
      const target = event.target.closest('[data-cursor="view"]');
      const project = event.target.closest('[data-cursor="project"]');
      const interactive = event.target.closest('a, button, [role="button"]');
      setCursorMode(target ? 'view' : project ? 'project' : interactive ? 'link' : 'default');
    };
    const leave = (event: PointerEvent) => {
      if (!(event.relatedTarget instanceof Element) || !event.relatedTarget.closest('[data-cursor], a, button, [role="button"]')) {
        setCursorMode('default');
      }
    };
    const pointerLeave = () => cursor.classList.remove('is-visible');

    const render = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = window.requestAnimationFrame(render);
    };

    frame = window.requestAnimationFrame(render);
    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over);
    document.addEventListener('pointerout', leave);
    window.addEventListener('pointerleave', pointerLeave);
    window.addEventListener('pointerenter', move as EventListener);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
      document.removeEventListener('pointerout', leave);
      window.removeEventListener('pointerleave', pointerLeave);
      window.removeEventListener('pointerenter', move as EventListener);
    };
  }, [setCursorMode]);

  return (
    <div className={`cursor${mode !== 'default' ? ` cursor--${mode}` : ''}`} ref={cursorRef} aria-hidden="true">
      <span className="cursor__dot" />
      <span className="cursor__ring" />
      <span className="cursor__label">{mode === 'project' ? 'PROJECT' : mode === 'view' ? 'VIEW' : ''}</span>
    </div>
  );
}
