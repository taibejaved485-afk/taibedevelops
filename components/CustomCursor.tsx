import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices to avoid interaction issues
    if ('ontouchstart' in window) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      if (trailRef.current) {
        // The trail follows with a slight delay naturally due to transition: transform 0.1s
        trailRef.current.style.transform = `translate3d(${clientX - 10}px, ${clientY - 10}px, 0)`;
      }
    };

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .glass-card, input, textarea')) {
        document.body.classList.add('cursor-active');
      } else {
        document.body.classList.remove('cursor-active');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onHoverStart);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onHoverStart);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ top: 0, left: 0 }} />
      <div ref={trailRef} className="cursor-trail" style={{ top: 0, left: 0 }} />
    </>
  );
};

export default CustomCursor;